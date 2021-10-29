import { FilePond, registerPlugin } from "react-filepond";
// TODO: dit gaat mis omdat webpack in die css iets invalids vindt
// import "filepond/dist/filepond.min.css";
import 'filepond-polyfill';
import FilepondPluginImagePreview from 'filepond-plugin-image-preview';
import FilepondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilepondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilepondPluginFilePoster from 'filepond-plugin-file-poster';

import OpenStadComponentDefaultInput from './default-input.jsx';

// Register the plugins
registerPlugin(FilepondPluginImagePreview, FilepondPluginFileValidateType, FilepondPluginFileValidateSize, FilepondPluginFilePoster);

export default class OpenStadComponentImageUpload extends OpenStadComponentDefaultInput {

  constructor(props) {

    super(props, {
      name: 'image',
      allowMultiple: false,
			image: {
        server: {
				  process: '/image',
				  fetch: '/image'
			  },
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

  init() {
  }

  updateUploadedFiles({ addFile, removeFile, next }) {
		if ( this.imageuploader && this.imageuploader.getFiles ) {
      let current = this.imageuploader.getFiles();
      if (removeFile) {
        current = current.filter(file => file.serverId != removeFile.serverId);
      }
      this.setState({ uploadedFiles: current.map(fileItem => fileItem.file) }, () => {
        if (next) next(current);
      })
    }
  }

  updateValue(files) {
    let self = this;
    let value = [];
    var asJson = self.config.as && self.config.as == 'json';
		files.forEach((image) => {
			try {
				var serverId = typeof image.serverId == 'string' ? JSON.parse(image.serverId) : image.serverId;
				value.push( asJson ? { "src": serverId.url } : serverId.url  )
			} catch(err) { console.log(err) }
		});
    self.handleOnChange({name: self.config.name, value})
  }

  render() {
    let self = this;

    return (
    <FilePond

      ref={ref => (this.imageuploader = ref)}
      files={this.state.uploadedFiles}

      oninit={self.init}
      onprocessfile={( err, file ) => self.updateUploadedFiles({ addFile: file, next: files => self.updateValue(files) })}
      onremovefile={( err, file ) => self.updateUploadedFiles({ removeFile: file, next: files => self.updateValue(files) })}
        
      name="image"
      server={this.config.image.server.process}
      allowMultiple={this.config.allowMultiple}
      
      // todo: maak dit allemaal configurabel
			acceptedFileTypes={['image/*']}
			allowFileSizeValidation="true"
      allowReorder={true}
      styleItemPanelAspectRatio="1"
			maxFileSize="8mb"
			maxFiles="5"
			allowBrowse="true"
			imageResizeTargetWidth="80"
			imageResizeTargetHeight="80"
			imageCropAspectRatio="16:9"
			labelIdle="Sleep afbeelding(en) naar deze plek of <span class='filepond--label-action'>KLIK HIER</span>"
			labelInvalidField="Field contains invalid files"
			labelFileWaitingForSize="Wachtend op grootte"
			labelFileSizeNotAvailable="Grootte niet beschikbaar"
			labelFileCountSingular="Bestand in lijst"
			labelFileCountPlural="Bestanden in lijst"
			labelFileLoading="Laden"
			labelFileAdded="Toegevoegd"
			labelFileLoadError="Fout bij het uploaden"
			labelFileRemoved="Verwijderd"
			labelFileRemoveError="Fout bij het verwijderen"
			labelFileProcessing="Laden"
			labelFileProcessingComplete="Afbeelding geladen"
			labelFileProcessingAborted="Upload cancelled"
			labelFileProcessingError="Error during upload"
			labelFileProcessingRevertError="Error during revert"
			labelTapToCancel="tap to cancel"
			labelTapToRetry="tap to retry"
			labelTapToUndo="tap to undo"
			labelButtonRemoveItem="Verwijderen"
			labelButtonAbortItemLoad="Abort"
			labelButtonRetryItemLoad="Retry"
			labelButtonAbortItemProcessing="Verwijder"
			labelButtonUndoItemProcessing="Undo"
			labelButtonRetryItemProcessing="Retry"
			labelButtonProcessItem="Upload"

    />);

  }
}


