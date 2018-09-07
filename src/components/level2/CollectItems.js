import React, { Component } from 'react'
import FlexView from 'react-flexview'

import { WordPool, List } from './ItemPresent'

const VOCAB = 'VOCAB'
const EXTRA = 'EXTRA'

class Level2Screen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      correct: []
    }
  }

  clickPool(word, selected) {
    const { words } = this.props
    const next = words[selected].item

    if (word.audio !== undefined) {
      new Audio(word.audio).play()
    }

    if (word.item === next) {
      this.setState({
        selected: this.state.selected + 1
      })
    }
    if (word.item.vocab === next.vocab) {
      this.setState({ correct: VOCAB })
    }
    if (word.item.extra === next.extra) {
      this.setState({ correct: EXTRA })
    }
  }
  render() {
    const { words, selected } = this.props
    if (this.state.selected < selected.length) {
      return (
        <FlexView column grow>
          <List
            items={selected.map(idx => words[idx])}
            selected={this.state.selected}
          />
          <div style={{ height: '80px' }} />
          <WordPool
            items={words}
            selected={selected[this.state.selected]}
            handler={this.clickPool.bind(this)}
          />
        </FlexView>
      )
    } else {
      return <button>Avancer</button>
    }
  }
}

export default Level2Screen
