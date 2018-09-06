import { colors, vocabs } from './constants'
import { getAudio } from './vocals'

const pool = [
  {
    item: {
      vocab: vocabs.PALETTE,
      extra: colors.ROUGE
    }
  },
  {
    item: {
      vocab: vocabs.PINCEAU,
      extra: colors.VERT
    }
  },
  {
    item: {
      vocab: vocabs.TOILE,
      extra: colors.BLANC
    }
  },
  {
    item: {
      vocab: vocabs.PALETTE,
      extra: colors.BLEU
    }
  },
  {
    item: {
      vocab: vocabs.TOILE,
      extra: colors.VERT
    }
  },
  {
    item: {
      vocab: vocabs.PALETTE,
      extra: colors.VERT
    }
  }
]

const pool_with_vocals = pool.map(item => {
  //const vocal = getAudio(item.name)
  // { vocal, ...item }
  return item
})

export { pool_with_vocals as pool }
