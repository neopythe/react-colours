import React, { Component } from 'react'
import Slider from 'rc-slider'

import 'rc-slider/assets/index.css'
import './styles/Palette.css'

import ColourBox from './ColourBox'

export default class Palette extends Component {
  constructor(props) {
    super(props)
    this.state = { level: 500 }
    this.changeLevel = this.changeLevel.bind(this)
  }

  changeLevel(level) {
    level === 0 ? this.setState({ level: 50 }) : this.setState({ level })
  }

  render() {
    const { colours } = this.props.palette
    const { level } = this.state

    const colourBoxes = colours[level].map((colour) => (
      <ColourBox {...colour} />
    ))

    return (
      <div className="Palette">
        <Slider
          defaultValue={level}
          min={0}
          max={900}
          step={100}
          onAfterChange={this.changeLevel}
        />
        {/* Navbar goes here */}
        <div className="Palette-colours">{colourBoxes}</div>
        {/* Footer goes here */}
      </div>
    )
  }
}
