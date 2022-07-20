import React, { Component } from 'react'

import './styles/ColourBox.css'

export default class ColourBox extends Component {
  render() {
    return (
      <div style={{ backgroundColor: this.props.colour }} className="ColourBox">
        <span>{this.props.name}</span>
        <span>more</span>
      </div>
    )
  }
}
