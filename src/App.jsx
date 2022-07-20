import React, { Component } from 'react'

import seedColours from './seedColours'

import Palette from './components/Palette'

export default class App extends Component {
  render() {
    return (
      <div>
        <Palette {...seedColours[4]} />
      </div>
    )
  }
}
