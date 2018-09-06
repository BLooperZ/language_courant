import React, { Component } from 'react'

import CollectItems from './components/CollectItems'

import { colors } from './utils/constants'
import logo from './logo.svg'
import './App.css'

let words = [
  {
    name: 'Un pallete rouge',
    item: 'pallete',
    extra: 'rouge'
  },
  {
    name: 'Un pallete rouge',
    item: 'pallete',
    extra: 'rouge'
  },
  {
    name: 'Un pallete rouge',
    item: 'pallete',
    extra: 'rouge'
  }
]

let pool = [
  {
    item: 'pallete',
    extra: colors.ROUGE
  },
  {
    item: 'pinceu',
    extra: colors.ROUGE
  },
  {
    item: 'pinceu',
    extra: colors.VERT
  },
  {
    item: 'toile',
    extra: colors.BLANC
  },
  {
    item: 'pallete',
    extra: colors.ROUGE
  }
]

class App extends Component {
  render() {
    return <CollectItems words={words} pool={pool} />
  }
}

export default App
