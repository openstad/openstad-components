'use strict';

import OpenStadComponentDefaultInput from './default-input.jsx';

export default class OpenStadComponentSelect extends OpenStadComponentDefaultInput {

  constructor(props) {

    super(props, {
      allowMultiple: false,
			imageserver: {
				process: '/image',
				fetch: '/image'
			},
    });

    var uploadedFiles = [];
    let value = props.value || [];

    if (!Array.isArray(value)) value = [value];
    value.forEach((image) => {
      let src = typeof image == 'object' ? image.src : image;
      uploadedFiles.push({
        source: { url: src },
        options : {
          type: 'local',
          file: {
            name: src,
          },
          metadata: {
            poster: src,
          }
        }
      })
    });

    this.state = {
      uploadedFiles: uploadedFiles,
    }

  }

	componentDidMount(prevProps, prevState) {
    // filepond files
		this._loadedFiles = 0;
    this.files = [
      "https://unpkg.com/filepond/dist/filepond.js",
      "https://unpkg.com/filepond-polyfill/dist/filepond-polyfill.js",
      "https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.js",
      "https://unpkg.com/filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.js",
      "https://unpkg.com/filepond-plugin-file-validate-size/dist/filepond-plugin-file-validate-size.js",
      "https://unpkg.com/filepond-plugin-file-poster/dist/filepond-plugin-file-poster.js",
    ];
    this.loadNextFile();

  }
  
  loadNextFile() {
    var self = this;
    var file = self.files[self._loadedFiles];
    if (file) {
			let element;
			element = document.createElement('script');
			element.src = file;
			element.async = true;
			if (element) {
				element.onload = function() {
          self.loadNextFile();
				}
				document.body.appendChild(element);
			}
    }
		if (self._loadedFiles == self.files.length) {
      self.fileUploaderInit()
    }
		self._loadedFiles++;
  }

  validate() {
    let isValid = true;
		if ( this.imageuploader && this.imageuploader.getFiles ) {
			var images = this.imageuploader.getFiles();
			images.forEach(function(image) {
				if (!image.serverId) {
					isValid = false;
				}
			});
		}
    return isValid;
  }

  fileUploaderInit() {

    let self = this;

		var containerElement = document.querySelector('.osc-image-upload-container');
		if (containerElement) {
			FilePond.registerPlugin(FilePondPluginImagePreview);
			FilePond.registerPlugin(FilePondPluginFileValidateSize);
			FilePond.registerPlugin(FilePondPluginFileValidateType);
			FilePond.registerPlugin(FilePondPluginFilePoster);

			// FilePond.setOptions({
			//   server: 'https://image-server2.openstadsdeel.nl/image/?access_token=MHhfb5U0m8vquAR81p',
			// });
      
			var filePondSettings = {
				// set allowed file types with mime types
				acceptedFileTypes: ['image/*'],
				allowFileSizeValidation: true,
        allowMultiple: this.config.allowMultiple,
        allowReorder: true,
        styleItemPanelAspectRatio: 1,
				maxFileSize: '8mb',
				name: 'image',
				maxFiles: 5,
				allowBrowse: true,
				files: this.state.uploadedFiles,
				server: {
					process: this.config.imageserver.process,
					fetch: this.config.imageserver.fetch,
				},
				imageResizeTargetWidth: 80,
				imageResizeTargetHeight: 80,
				imageCropAspectRatio: '1:1',
				labelIdle: "Sleep afbeelding(en) naar deze plek of <span class='filepond--label-action'>KLIK HIER</span>",
				labelInvalidField: "Field contains invalid files",
				labelFileWaitingForSize: "Wachtend op grootte",
				labelFileSizeNotAvailable: "Grootte niet beschikbaar",
				labelFileCountSingular: "Bestand in lijst",
				labelFileCountPlural: "Bestanden in lijst",
				labelFileLoading: "Laden",
				labelFileAdded: "Toegevoegd", // assistive only
				labelFileLoadError: "Fout bij het uploaden",
				labelFileRemoved: "Verwijderd", // assistive only
				labelFileRemoveError: "Fout bij het verwijderen",
				labelFileProcessing: "Laden",
				labelFileProcessingComplete: "Afbeelding geladen",
				labelFileProcessingAborted: "Upload cancelled",
				labelFileProcessingError: "Error during upload",
				labelFileProcessingRevertError: "Error during revert",
				labelTapToCancel: "tap to cancel",
				labelTapToRetry: "tap to retry",
				labelTapToUndo: "tap to undo",
				labelButtonRemoveItem: "Verwijderen",
				labelButtonAbortItemLoad: "Abort",
				labelButtonRetryItemLoad: "Retry",
				labelButtonAbortItemProcessing: "Verwijder",
				labelButtonUndoItemProcessing: "Undo",
				labelButtonRetryItemProcessing: "Retry",
				labelButtonProcessItem: "Upload"
			}

      self.imageuploader = FilePond.create(containerElement, filePondSettings);
			var sortableInstance;
			var pondEl = document.querySelector('.filepond--root');

      // tmp
      //self.state.value = ["https://image-server.staging.openstadsdeel.nl/image/85ef5669d9a5db2f0ec2adb6310620be"]
      //self.props.handleFieldChange(self.props.name, self.state.value )

			document.querySelector('.filepond--root').addEventListener('FilePond:processfile', e => {
				if (e.detail && e.detail.error) {
					console.log('Error uploding file: ', e.detail);
				}
				self.fileUploaderUpdateCurrentInput()
			});
			
			document.querySelector('.filepond--root').addEventListener('FilePond:removefile', e => {
				if (e.detail && e.detail.error) {
					console.log('Error uploding file: ', e.detail);
				}
				self.fileUploaderUpdateCurrentInput()
			});

			if (self.state.formfields) {
				self.imageuploader.addFiles(self.state.formfields.images)
			}

		}

	}

  fileUploaderUpdateCurrentInput() {
    let self = this;
		self.state.value = [];
		if ( this.imageuploader && this.imageuploader.getFiles ) {
			var images = this.imageuploader.getFiles();
      var asJson = self.config.as && self.config.as == 'json';
			images.forEach((image) => {
				try {
					var serverId = typeof image.serverId == 'string' ? JSON.parse(image.serverId) : image.serverId;
					self.state.value.push( asJson ? { "src": serverId.url } : serverId.url  )
				} catch(err) { console.log(err) }
			});
		}
    self.props.onChange({name: self.config.name, value: self.state.value})
	}

  fileUploaderUploaderAddImages(images) {
    let self = this;

		if (this.imageuploader) {
			this.imageuploader.addFiles(images)
		}
	}

	render() {

		let self = this;

    let errorHTML = null;
    if (self.state.error) {
      errorHTML = (<div className="osc-form-error">Je hebt nog geen afbeelding geupload</div>)
    }
    
    return (
			<div className="osc-image-upload-container">
				<input type="file" className="imageUploader-gebiedstool filepond-gebiedstool"/>
        {errorHTML}
		  </div>
    );

  }

}

