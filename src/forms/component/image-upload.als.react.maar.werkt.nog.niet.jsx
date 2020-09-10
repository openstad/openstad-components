import merge from 'merge';
import React from 'react';
import ReactDOM from 'react-dom';
import { FilePond, File, registerPlugin } from 'react-filepond'

import FilepondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilepondPluginFileValidateSize from 'filepond-plugin-file-validate-size'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilepondPolyfill from 'filepond-polyfill'
import FilepondPluginFilePoster from 'filepond-plugin-file-poster'

// todo: plugin css
// import 'filepond/dist/filepond.min.css';

import OpenStadComponentDefaultInput from './default-input.jsx';

'use strict';

registerPlugin(FilepondPluginFileValidateType, FilepondPluginFileValidateSize, FilePondPluginImagePreview, FilepondPluginFilePoster)

export default class OpenStadComponentSelect extends OpenStadComponentDefaultInput {

  constructor(props) {

    super(props);

		let defaultConfig = {
			imageserver: {
				process: '',
				fetch: ''
			},
    };
		this.config = merge.recursive(defaultConfig, this.props.config, this.config || {});

    this.fileUploaderUpdateCurrentInput = this.fileUploaderUpdateCurrentInput.bind(this);

    console.log('--------------------');
    console.log(this.props.value);

    this.state = {
      files: this.props.value || [],
    };

  }

	componentDidMount(prevProps, prevState) {
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

			// FilePond.setOptions({
			//   server: 'https://image-server2.openstadsdeel.nl/image/?access_token=MHhfb5U0m8vquAR81p',
			// });
      
			var filePondSettings = {
				// set allowed file types with mime types
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
		let value = [];
    console.log('=', self.imageuploader, self.imageuploader && self.imageuploader.getFiles);
		if ( self.imageuploader && self.imageuploader.getFiles ) {
			var images = this.imageuploader.getFiles();
      console.log(images);
			images.forEach((image) => {
				try {
					var serverId = JSON.parse(image.serverId)
					value.push(serverId.url)
				} catch(err) { console.log(err) }
			});
		}

    self.setState({files: value})
    console.log('Update:', value);
    
    self.props.onChange({name: self.config.name, value: value})
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

    let tmp = self.state.files;
    let files = [];
    tmp.map(file => {
      if (typeof file == 'string') files.push({ source: file, options: { type: 'local' } })
    });
    
    return (
			<div className="osc-image-upload-container">
        <FilePond
          files={files}
          onupdatefiles={self.fileUploaderUpdateCurrentInput}
				  acceptedFileTypes={['image/*']}
				  allowFileSizeValidation={true}
          allowMultiple={true}
				  maxFileSize={'100kb'}
				  name={'image'}
				  maxFiles={3}
				  allowBrowse={true}
				  server = {{
					  process: this.config.imageserver.process,
					  fetch: this.config.imageserver.fetch,
				  }}
				  imageResizeTargetWidth={80}
				  imageResizeTargetHeight={80}
				  imageCropAspectRatio={'1:1'}
				  labelIdle={"Sleep afbeelding(en) naar deze plek of <span class='filepond--label-action'>KLIK HIER</span>"}
				  labelInvalidField={"Field contains invalid files"}
				  labelFileWaitingForSize={"Wachtend op grootte"}
				  labelFileSizeNotAvailable={"Grootte niet beschikbaar"}
				  labelFileCountSingular={"Bestand in lijst"}
				  labelFileCountPlural={"Bestanden in lijst"}
				  labelFileLoading={"Laden"}
				  labelFileAdded={"Toegevoegd"}
				  labelFileLoadError={"Fout bij het uploaden"}
				  labelFileRemoved={"Verwijderd"}
				  labelFileRemoveError={"Fout bij het verwijderen"}
				  labelFileProcessing={"Laden"}
				  labelFileProcessingComplete={"Afbeelding geladen"}
				  labelFileProcessingAborted={"Upload cancelled"}
				  labelFileProcessingError={"Error during upload"}
				  labelFileProcessingRevertError={"Error during revert"}
				  labelTapToCancel={"tap to cancel"}
				  labelTapToRetry={"tap to retry"}
				  labelTapToUndo={"tap to undo"}
				  labelButtonRemoveItem={"Verwijderen"}
				  labelButtonAbortItemLoad={"Abort"}
				  labelButtonRetryItemLoad={"Retry"}
				  labelButtonAbortItemProcessing={"Verwijder"}
				  labelButtonUndoItemProcessing={"Undo"}
				  labelButtonRetryItemProcessing={"Retry"}
				  labelButtonProcessItem={"Upload"}
          ref={ref => this.imageuploader = ref}
        />
        {errorHTML}
		  </div>
    );

  }

}

