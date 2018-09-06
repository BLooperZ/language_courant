import React, { Component } from 'react'

const ListItem = ({ word, selected }) => (
  <p>
    {word} {selected ? ' - V' : ''}
  </p>
)

const PoolItem = ({ word, color }) => <p style={{ color: color }}>{word}</p>

class WordPool extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: [],
      currentIdx: 0
    }
  }
  renderList(words) {
    return words.map((word, idx) => (
      <ListItem
        word={word.name}
        selected={word in this.state.selected}
        key={idx}
      />
    ))
  }

  renderPool(pool) {
    return pool.map((word, idx) => (
      <PoolItem word={word.item} extra={word.color} />
    ))
  }

  render() {
    const { words, pool } = this.props
    return (
      <div>
        <ul>{this.renderList(words)}</ul>
        {this.renderPool(pool)}
      </div>
    )
  }
}

export default WordPool
