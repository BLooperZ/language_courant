const colors = {
  BLEU: {
    css: 'blue',
    m: 'bleu',
    f: 'bleue'
  },
  VERT: {
    css: 'green',
    m: 'vert',
    f: 'verte'
  },
  ROUGE: {
    css: 'red',
    m: 'rouge',
    f: 'rouge'
  },
  BLANC: {
    css: 'white',
    m: 'blanc',
    f: 'blanche'
  },
  NOIR: {
    css: 'black',
    m: 'noir',
    f: 'noire'
  },
  JAUNE: {
    css: 'yellow',
    m: 'jaune',
    f: 'jaune'
  },
  ORANGE: {
    css: 'orange',
    m: 'orange',
    f: 'orange'
  },
  VIOLET: {
    css: 'purple',
    m: 'violet',
    f: 'violette'
  }
}

const vocabs = {
  PALETTE: {
    name: 'palette',
    gender: 'f',
    image: require('../assets/palette.jpg')
  },
  TOILE: {
    name: 'toile',
    gender: 'f',
    image: require('../assets/toile.jpg')
  },
  PINCEAU: {
    name: 'pinceau',
    gender: 'm',
    image: require('../assets/pinceau.jpg')
  }
}

export { colors, vocabs }
