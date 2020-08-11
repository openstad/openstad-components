import merge from 'merge';
import React from 'react';
import ReactDOM from 'react-dom';

// TODO: it is probably not ok to write your own html editor, but after intergrating ckeditor or react-rte the build was (more than) twice as large; a bettter solution must be possible

'use strict';

export default class OpenStadComponentHTMLArea extends React.Component  {

  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
	  };

    this.onKeyUpx = this.onKeyUpx.bind(this);

  }

	componentDidMount(prevProps, prevState) {
    let value = this.props.value;
    value = this.filterHTML(value);
    this.input.innerHTML = value;
  }

  filterHTML(value) {
    value = value.replace(/<(\/?\s*(?:a [^>]+|a|b|i|strong|em|p|div|br|ul|li)\s*\/?)>/g, "[[[$1]]]");
    value = value.replace(/<[^>]+>/g, "");
    value = value.replace(/\[\[\[([^\]]+)\]\]\]/g, "<$1>");
    return value;
  }

  executeAction(e, command, args) {
    e.preventDefault()
    e.stopPropagation();
    document.execCommand(command,false,args);
    this.onKeyUp();
  }
  
  onFocus(e) {
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  }

  onBlur(e) {
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
    if (this.props.onChange) {
      this.props.onChange({ value: this.state.value });
    }
  }

  onKeyUpx() {
    let value = this.input.innerHTML;
    value = this.filterHTML(value);
    this.setState({ value })
    if (this.props.onKeyUp) {
      this.props.onKeyUp(value);
    }
  }
  
  render () {
    return (
      <div className="osc-html-editor">
        <div className="osc-html-editor-buttons">
          <div className="osc-html-editor-button osc-html-editor-button-bold" onMouseDown={e => this.executeAction(e, 'bold')}>&nbsp;</div>
          <div className="osc-html-editor-button osc-html-editor-button-italic" onMouseDown={e => this.executeAction(e, 'italic')}>&nbsp;</div>
          <div className="osc-html-editor-button osc-html-editor-button-insertunorderedlist" onMouseDown={e => this.executeAction(e, 'insertunorderedlist')}>&nbsp;</div>
          <div className="osc-html-editor-button osc-html-editor-button-createlink" onMouseDown={e => this.executeAction(e, 'createlink', prompt('Lank naar','http://'))}>&nbsp;</div>
        </div>
        <div className="osc-html-editor-content" contentEditable={true}
             onFocus={ e => this.onFocus(e)}
             onBlur={ e => this.onBlur(e)}
             onKeyUp={ e => this.onKeyUpx()}
             // dangerouslySetInnerHTML={{ __html: this.state.value }}
             ref={el => (this.input = el)}
        />
      </div>
    );
  }

}

function EditButton(props) {
  return (
    <button
      key={props.cmd}
      onMouseDown={evt => {
        evt.preventDefault(); // Avoids loosing focus from the editable area
        document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
      }}
    >
      {props.name || props.cmd}
    </button>
  );
}
