'use strict';

import OpenStadComponentDefaultInput from "./default-input.jsx";
import OpenStadComponentForms from '../../forms/index.jsx';

export default class OpenStadComponentCheckboxes extends OpenStadComponentDefaultInput {
    
    constructor(props, defaultConfig = {}) {
        
        super(props, {
            config: {
                choices:             [],
                showOtherInputField: true,
                id:                  ''
            },
        }, defaultConfig);
        
        let values = [];
        
        this.props.config.choices.forEach((text, index) => {
            values[index] = text;
        });
        
        this.state = {
            checked:         new Array(props.config.choices.length).fill(false),
            values:          values,
            checkedOther:    false,
            otherInputValue: ''
        };
        
        this.onChange = props.onChange;
        
        this.otherText = 'Anders, namelijk: ';
        
    }
    
    componentDidMount() {
        if (this.props.value) {
            let newState     = {};
            newState.checked = this.state.checked;
            // Set correct state based on value
            this.props.value.forEach((value) => {
                if (value.indexOf(this.otherText) === 0) {
                    newState.checkedOther    = true;
                    newState.otherInputValue = value.substr(this.otherText.length)
                } else {
                    const index = this.state.values.findIndex(stateValue => stateValue.text == value);
                    
                    if (index > -1) {
                        newState.checked[index] = true;
                    }
                }
            })
            
            this.setState(newState, () => {
                this.triggerParentOnChange();
            })
        }
    }
    
    triggerParentOnChange() {
        if (typeof this.onChange == 'function') {
            this.onChange({
                isAnswered:      (this.state.checkedOther && this.state.otherInputValue) || this.state.checked.some((isChecked) => isChecked === true),
                name:            this.config.name,
                checked:         this.state.checked,
                values:          this.state.values,
                checkedOther:    this.state.checkedOther,
                otherInputValue: this.state.otherInputValue
            });
        }
    }
    
    handleOnChange(position) {
        const updatedCheckedState = this.state.checked.map((item, index) => index === position ? !item : item);
        
        this.setState({checked: updatedCheckedState}, () => {
            this.validate({});
            this.triggerParentOnChange();
        });
    }
    
    handleOnChangeOtherCheckbox() {
        this.setState({checkedOther: !this.state.checkedOther}, () => {
            this.triggerParentOnChange();
        });
    }
    
    handleOnChangeOtherInput({value}) {
        this.setState({otherInputValue: value}, () => {
            this.triggerParentOnChange();
        });
    }
    
    validate({ showErrors }) {
        let isValid = false;
        if (this.config.validation && this.config.validation.required === 'true') {
            isValid = this.state.checked.some((check) => !!check) || (this.state.checkedOther && this.state.otherInputValue.length > 0);
        } else {
            isValid = true;
        }
        
        let error = '';
        if (!isValid && showErrors) error = true;
        this.setState({ isValid, error })
		return isValid;
	}
    
    render() {
        const choices   = this.props.config.choices || [];
        const showOther = this.props.config.showOtherInputField;
        const id        = this.props.config.id;
        
        let otherHtml = '';
        
        if (showOther) {
            const key     = parseInt(1000000 * Math.random());
            const checked = this.state.checkedOther;
            
            otherHtml = (
                <div>
                    <div key={`div-value-${id}-${key}`} className="osc-checkbox-container">
                        <div className={`osc-checkbox-input${checked ? ' osc-checkbox-input-checked' : ''}`}>
                            <input type="checkbox"
                                   name={`enum-checkbox-${id}-${key}`}
                                   id={`enum-checkbox-${id}-${key}`}
                                   defaultChecked={checked}
                                   onChange={() => this.handleOnChangeOtherCheckbox()} value={this.otherText}
                                   key={`button-value-${id}-${key}`}
                            />
                        </div>
                        <div className="osc-checkbox-text"><label
                            htmlFor={`enum-checkbox-${id}-${key}`}>{this.otherText}</label>
                        </div>
                    </div>
                    {checked && (
                        <OpenStadComponentForms.Text autoFocus placeholder={this.otherText}
                                                     value={this.state.otherInputValue}
                                                     className="osc-other-textinput" required="true"
                                                     onChange={data => this.handleOnChangeOtherInput(data)}/>
                    )}
                </div>
            )
        }
        
        return (
            <div className="osc-question-selector">
                {choices && choices.map(({value, text}, index) => {
                    const key     = parseInt(1000000 * Math.random());
                    const checked = this.state.checked[index] || false;
                    
                    return (
                        <div key={`div-value-${id}-${key}`} className="osc-checkbox-container">
                            <div className={`osc-checkbox-input${checked ? ' osc-checkbox-input-checked' : ''}`}>
                                <input type="checkbox"
                                       name={`enum-checkbox-${id}-${key}`}
                                       id={`enum-checkbox-${id}-${key}`}
                                       defaultChecked={checked}
                                       onChange={() => this.handleOnChange(index)} value={text}
                                       key={`button-value-${id}-${key}`}
                                />
                            </div>
                            <div className="osc-checkbox-text"><label htmlFor={`enum-checkbox-${id}-${key}`}>{text}</label>
                            </div>
                        </div>
                    )
                })}
                {showOther && otherHtml}
            </div>
        )
    }
    
}
