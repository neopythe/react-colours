import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import './styles/ColourBox.css'

export default class ColourBox extends Component {
  render() {
    const { name, colour: background } = this.props
    return (
      <CopyToClipboard text={background}>
        <div style={{ background }} className="ColourBox">
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          <span className="see-more">More</span>
        </div>
      </CopyToClipboard>
    )
  }
}
