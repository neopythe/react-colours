import React, { Component } from 'react'

import './styles/Palette.css'

import ColourBox from './ColourBox'

export default class Palette extends Component {
  render() {
    const colourBoxes = this.props.colours.map((colour) => (
      <ColourBox {...colour} />
    ))

    return (
      <div className="Palette">
        {/* Navbar goes here */}
        <div className="Palette-colours">{colourBoxes}</div>
        {/* Footer goes here */}
      </div>
    )
  }
}
