import React, { Component } from 'react'

class NumericInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      numericValue: 0
    }
  }

  handleChange = (e) => {
    if (e.target.validity.valid) {
      this.setState({
        numericValue: e.target.value
      })
    }
  }

  render = () => (
    <input type="number" value={this.state.numericValue} onInput={this.handleChange} />
  )
}

export default NumericInput