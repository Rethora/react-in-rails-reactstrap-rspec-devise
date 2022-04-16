import React, { Component } from 'react'
import reactIcon from '../assets/react-icon.png'

class Home extends Component {
  render() {
    return (
      <div
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <h1
          style={{ textAlign: 'center' }}
        >
          Homepage
        </h1>
        <img
          src={reactIcon}
          alt='react icon'
        />
      </div>
    )
  }
}

export default Home
