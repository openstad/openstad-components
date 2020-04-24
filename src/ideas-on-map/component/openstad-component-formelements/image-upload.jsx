import React from 'react';
import OpenStadComponentFormelement from './formelement.jsx';

'use strict';

export default class OpenStadComponentImageUpload extends OpenStadComponentFormelement {

  constructor(props) {

    super(props);

		// config
		let defaultConfig = {};
		this.config = Object.assign(defaultConfig, this.props.config, this.config || {});

    this.state = {
			value: this.props.value,
    };

  }

	componentDidMount(prevProps, prevState) {
    // filepond
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

  fileUploaderInit() {

    let self = this;

		var fieldsetElement = document.querySelector('.filepondFieldset2');
		if (fieldsetElement) {
			FilePond.registerPlugin(FilePondPluginImagePreview);
			FilePond.registerPlugin(FilePondPluginFileValidateSize);
			FilePond.registerPlugin(FilePondPluginFileValidateType);
			FilePond.registerPlugin(FilePondPluginFilePoster);

			FilePond.setOptions({
				server: '/image'
			});

			var filePondSettings = {
				// set allowed file types with mime types
				acceptedFileTypes: ['image/*'],
				allowFileSizeValidation: true,
				maxFileSize: '8mb',
				name: 'image',
				maxFiles: 3,
				allowBrowse: true,
				files: [],
				server: {
					process: '/image',
					fetch: '/fetch-image?img='
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

      self.imageuploader = FilePond.create(fieldsetElement, filePondSettings);
			var sortableInstance;
			var pondEl = document.querySelector('.filepond--root');

      // tmp
      //self.state.value = ["https://image-server.staging.openstadsdeel.nl/image/85ef5669d9a5db2f0ec2adb6310620be"]
      //self.props.handleFieldChange(self.props.name, self.state.value )

			document.querySelector('.filepond--root').addEventListener('FilePond:processfile', e => {
				if (e.detail) {
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
			images.forEach((image) => {
				try {
					var serverId = JSON.parse(image.serverId)
					self.state.value.push(serverId.url)
				} catch(err) { console.log(err) }
			});
		}
    self.props.handleFieldChange(self.props.name, self.state.value )
	}

  fileUploaderUploaderAddImages(images) {
    let self = this;

		if (this.imageuploader) {
			this.imageuploader.addFiles(images)
		}
	}
  
	render() {

    let self = this;

    let inputElement = (
			<fieldset className="filepondFieldset2">
				<div className="form-warning-container"><span id="form-warning-images" className="form-warning">Het uploaden van images is nog niet afgerond</span></div>
				<input type="file" className="imageUploader-gebiedstool filepond-gebiedstool"/>
			</fieldset>
    );
    //   <input value={self.props.value} onChange={ () => self.props.handleFieldChange(self.props.name, self.formfield.value ) } ref={ el => self.formfield = el }></input>

    return super.render(inputElement);

  }

}
