import React, { Component } from 'react'

class MoneyInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      numericValue: 0
    }
  }

  decimalRegex = /^\d*\.?\d*$/

  handleChange = (e) => {
    if (this.decimalRegex.test(e.target.value)) {
      this.setState({
        numericValue: e.target.value
      })
    }
  }

  render = () => (
    <input type="text" value={this.state.numericValue} onInput={this.handleChange} />
  )
}

export default MoneyInput