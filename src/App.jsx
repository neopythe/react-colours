import React, { Component } from 'react'

import seedColours from './seedColours'
import { generatePalette } from './colourHelpers'

import Palette from './components/Palette'

export default class App extends Component {
  render() {
    return (
      <div>
        <Palette palette={generatePalette(seedColours[4])} />
      </div>
    )
  }
}
