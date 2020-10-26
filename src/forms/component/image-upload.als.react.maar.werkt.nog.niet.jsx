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

    this.state = {
      files: props.value || [],
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


  }

  
  fileUploaderUpdateCurrentInput() {
    let self = this;
    let value = []
    console.log('..', this.filePond, this.filePond.getFiles);
		if ( this.filePond && this.filePond.getFiles ) {
			var images = this.filePond.getFiles();
      console.log('...', images);
			images.forEach((image) => {
			try {
				var serverId = JSON.parse(image.serverId)
				value.push(serverId.url)
			} catch(err) { console.log(err) }
		  });
    }
    self.setState({value}, () => {
      self.props.onChange({name: self.config.name, value})
      console.log('updated', value);
    })
	}

	render() {

		let self = this;

    let errorHTML = null;
    if (self.state.error) {
      errorHTML = (<div className="osc-form-error">Je hebt nog geen afbeelding geupload</div>)
    }

    var uploadedFiles = [];
    let value = self.state.files || [];
    value.forEach((image) => {
      uploadedFiles.push({
        source: { url: image },
        options : {
          type: 'local',
          // mock file information
          file: {
            name: image,
            //		 size: 3001025,
            //	 type: 'image/png'
          },
          metadata: {
            poster: image,
          }
        }
      })
    });

    console.log(uploadedFiles);
    
    return (
			<div className="osc-image-upload-container">
        <FilePond
				  acceptedFileTypes = {['image/*']}
				  allowFileSizeValidation = {true}
          allowMultiple = {this.config.allowMultiple}
				  maxFileSize = '8mb'
				  name = 'image'
				  maxFiles = {5}
				  allowBrowse = {true}
				  files = {uploadedFiles}
				  // server = { this.config.imageserver.process }
				  imageResizeTargetWidth = {80}
				  imageResizeTargetHeight = {80}
				  imageCropAspectRatio = '1:1'
				  labelIdle = "Sleep afbeelding(en) naar deze plek of <span class ='filepond--label-action'>KLIK HIER</span>"
				  labelInvalidField = "Field contains invalid files"
				  labelFileWaitingForSize = "Wachtend op grootte"
				  labelFileSizeNotAvailable = "Grootte niet beschikbaar"
				  labelFileCountSingular = "Bestand in lijst"
				  labelFileCountPlural = "Bestanden in lijst"
				  labelFileLoading = "Laden"
				  labelFileAdded = "Toegevoegd"
				  labelFileLoadError = "Fout bij het uploaden"
				  labelFileRemoved = "Verwijderd"
				  labelFileRemoveError = "Fout bij het verwijderen"
				  labelFileProcessing = "Laden"
				  labelFileProcessingComplete = "Afbeelding geladen"
				  labelFileProcessingAborted = "Upload cancelled"
				  labelFileProcessingError = "Error during upload"
				  labelFileProcessingRevertError = "Error during revert"
				  labelTapToCancel = "tap to cancel"
				  labelTapToRetry = "tap to retry"
				  labelTapToUndo = "tap to undo"
				  labelButtonRemoveItem = "Verwijderen"
				  labelButtonAbortItemLoad = "Abort"
				  labelButtonRetryItemLoad = "Retry"
				  labelButtonAbortItemProcessing = "Verwijder"
				  labelButtonUndoItemProcessing = "Undo"
				  labelButtonRetryItemProcessing = "Retry"
				  labelButtonProcessItem = "Upload"
          oninit={() => this.fileUploaderInit() }
          ref={ref => this.filePond = ref}
          server={{
					  process: {
						  url: this.config.imageserver.process,
					  },
					  fetch: {
						  url: this.config.imageserver.fetch,
					  }
				  }}

          // onprocessfile={this.fileUploaderUpdateCurrentInput}
          //onremovefile={this.fileUploaderUpdateCurrentInput}
          
      // onupdatefiles={fileItems => this.fileUploaderUpdateCurrentInput(fileItems)}
          //onupdatefiles={fileItems => {
          //  self.setState({
          //    files: fileItems.map(fileItem => fileItem.file)
          //  })
          //}}
          
        />
        {errorHTML}
		  </div>
    );

  }

}




