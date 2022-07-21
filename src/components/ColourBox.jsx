import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import './styles/ColourBox.css'

export default class ColourBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      copied: false,
    }
    this.changeCopyState = this.changeCopyState.bind(this)
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500)
    })
  }

  render() {
    const { name, colour: background } = this.props
    const { copied } = this.state

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className="ColourBox">
          <div
            style={{ background }}
            className={`copy-overlay ${copied && 'show'}`}
          ></div>
          <div className={`copy-message ${copied && 'show'}`}>
            <h2>Copied!</h2>
            <p>{background}</p>
          </div>
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
