import React, { Component } from 'react'
import loadingGif from './assets/loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <img src={loadingGif} alt="Loading..." style={{width: '50px', height: '50px'}} />
      </div>
    )
  }
}

export default Spinner
