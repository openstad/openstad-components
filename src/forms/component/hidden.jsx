'use strict';

import OpenStadComponentDefaultInput from './default-input.jsx';

export default class OpenStadComponentSelect extends OpenStadComponentDefaultInput {

	render() {

		let self = this;
    
    return (
			<input type="hidden" value={this.state.value} disabled={this.props.disabled} placeholder={this.config.placeholder} onChange={e => self.handleOnChange({ value: self.input.value })} ref={el => (self.input = el)}/>
    );

  }

}
