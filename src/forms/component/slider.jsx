import React from "react"

class Slider extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: this.props.value,
      touched: this.props.touched || false,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const { value } = event.target

    if(typeof this.props.onChange === 'function'){
      this.props.onChange(value)
    }
    
    this.setState({value, touched: true})
  }

  doTouch() {

    if(typeof this.props.onChange === 'function'){
      this.props.onChange(50)
    }

    this.setState({touched: true})

  }

  calcProgress(min, max, value) {
    const range = max - min
    const progInRange = value - min
    return ((progInRange*2)/range)-1
  }

  render(){
    let self = this;
    const { value, touched } = self.state
    const { min, max, step } = self.props
    return(
      <div className={`${self.props.className} osc-slider`}>
        <div className="osc-slider-track-container">
          <div className="osc-slider-track"></div>
          <div className="osc-slider-track-progress-container">
            <div className="osc-slider-track-progress" style={{ transform: 'scaleX(' + self.calcProgress(min, max, value) + ')' }}></div>
          </div>
          <div className="osc-slider-track-dot-end osc-slider-track-dot-left"></div>
          <div className="osc-slider-track-dot-start osc-slider-track-dot-center"></div>
          <div className="osc-slider-track-dot-end osc-slider-track-dot-right"></div>
        </div>
        <input type='range' min={min} max={max} step={step} value={value} onClick={() => { if (!touched) self.doTouch(); } } onChange={self.handleChange} className={touched ? 'osc-slider-input-range' : 'osc-slider-input-range osc-slider-untouched'} ref={el => (self.input = el)}/>
      </div>
    )
  }
}

export default Slider;
