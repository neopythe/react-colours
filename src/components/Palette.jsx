import React, { Component } from 'react'

import './styles/Palette.css'

import ColourBox from './ColourBox'
import { generatePalette } from '../colourHelpers'
import seedColours from '../seedColours'

export default class Palette extends Component {
  render() {
    console.log(generatePalette(seedColours[4]))
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
