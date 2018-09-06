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
    if (word === next) {
      this.setState({
        selected: this.state.selected + 1
      })
    }
    if (word.vocab === next.vocab) {
      this.setState({ correct: VOCAB })
    }
    if (word.extra === next.extra) {
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
          <WordPool
            items={words.map(word => word.item)}
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
