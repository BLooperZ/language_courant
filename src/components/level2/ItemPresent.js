import React from 'react'

const DisplayItem = ({ item, current }) => {
  const one = {
    m: 'Un',
    f: 'Une'
  }

  let style = current ? { fontWeight: 'bold' } : {}
  return (
    <li style={style}>
      <span className="vocab">
        {one[item.vocab.gender]} {item.vocab.name}
      </span>{' '}
      <span className="extra">{item.extra[item.vocab.gender]}</span>
    </li>
  )
}

const ListItem = ({ word, done, current }) => (
  <DisplayItem item={word.item} done={done} current={current} />
)

const PoolItem = ({ word, extra, onClick }) => (
  <button
    style={{ background: extra.css, margin: 5, border: 0, borderRadius: 2 }}
    onClick={onClick}
  >
    <p>{word.name}</p>
  </button>
)

const WordPool = ({ items, handler, selected }) => (
  <div>
    {items.map((word, idx) => {
      const { vocab, extra } = word

      return (
        <PoolItem
          key={idx}
          word={vocab}
          extra={extra}
          onClick={() => handler(word, selected)}
        />
      )
    })}
  </div>
)

const List = ({ items, selected }) => {
  return (
    <ul>
      {items.map((word, idx) => {
        return (
          <ListItem
            word={word}
            done={idx < selected ? 'done' : 'waiting'}
            current={idx == selected}
            key={idx}
          />
        )
      })}
    </ul>
  )
}

export { WordPool, List }