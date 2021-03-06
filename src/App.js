import React, { Component } from 'react'

import CollectItems from './components/level2/CollectItems'

import { pool } from './utils/mock'
import logo from './logo.svg'
import './App.css'

const getItems = words => words.map(word => word.item)

const getRandomItems = words => words.slice(0, 3)

let selectedIndices = [0, 7, 4, 2]

class App extends Component {
  render() {
    return (
      <div
        style={{
          background: 'rgb(255, 240, 245)',
          width: '320px',
          height: '480px',
          margin: '0 auto'
        }}
      >
        <CollectItems words={pool} selected={selectedIndices} />
      </div>
    )
  }
}

export default App
