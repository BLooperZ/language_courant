const vocals = [
  {
    name: 'Un pallete rouge',
    vocal: undefined //require('../../public/un_pallete_rouge.mp3')
  },
  {
    name: 'Un pinceau vert',
    vocal: undefined //require('../../public/un_pinceau_vert.mp3')
  },
  {
    name: 'Une toile bleue',
    vocal: undefined //require('../../public/une_toile_bleue.mp3')
  },
  {
    name: 'Un pallete bleu',
    vocal: undefined //require('../../public/un_pallete_bleu.mp3')
  },
  {
    name: 'Une toile verte',
    vocal: undefined //require('../../public/une_toile_verte.mp3')
  },
  {
    name: 'Un pallete vert',
    vocal: undefined //require('../../public/un_pallete_vert.mp3')
  }
]

const getAudio = name => {
  let vocal = vocals.filter(item => item.name === name)
  if (vocal[0] !== undefined) {
    return vocal[0]
  }
  console.log('audio not found')
}
export { getAudio }
