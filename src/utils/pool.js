import { colors, vocabs } from './constants'
import { getAudio } from './vocals'

const pool = [
  {
    item: {
      vocab: vocabs.PALETTE,
      extra: colors.ROUGE
    },
    audio: require('../assets/Une Palette Rouge.m4a')
  },
  {
    item: {
      vocab: vocabs.PINCEAU,
      extra: colors.VERT
    },
    audio: require('../assets/Un Pinceau Vert.m4a')
  },
  {
    item: {
      vocab: vocabs.TOILE,
      extra: colors.BLANC
    }
    //audio: require('../assets/Une Toile Blanche.m4a')
  },
  {
    item: {
      vocab: vocabs.TOILE,
      extra: colors.ROUGE
    }
    //audio: require('../assets/Une Toile Rouge.m4a')
  },
  {
    item: {
      vocab: vocabs.PINCEAU,
      extra: colors.ROUGE
    }
    //audio: require('../assets/Un Pinceau Rouge.m4a')
  },
  {
    item: {
      vocab: vocabs.PALETTE,
      extra: colors.ORANGE
    }
    //audio: require('../assets/Une Palette Orange.m4a')
  },

  {
    item: {
      vocab: vocabs.TOILE,
      extra: colors.BLEU
    },
    audio: require('../assets/Une Toile Bleue.m4a')
  },
  {
    item: {
      vocab: vocabs.PALETTE,
      extra: colors.BLANC
    }
    //audio: require('../assets/Une Palette Blanche.m4a')
  },
  {
    item: {
      vocab: vocabs.PALETTE,
      extra: colors.VERT
    },
    audio: require('../assets/Une Palette Verte.m4a')
  },
  {
    item: {
      vocab: vocabs.PINCEAU,
      extra: colors.ORANGE
    }
    //audio: require('../assets/Un Pinceau Orange.m4a')
  }
]

const pool_with_vocals = pool.map(item => {
  //const vocal = getAudio(item.name)
  // { vocal, ...item }
  return item
})

export { pool_with_vocals as pool }
