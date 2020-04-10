module.exports = {
  passage: 'BOOK.1.1-BOOK.1.2',
  text: './studies/BOOK/texts/STUDY_1.txt',
  observe: {
    people: ['array of strings'],
    nouns: ['array of strings'],
    adjectives: ['array of strings'],
    actions: ['array of strings'],
    persons: {
      God: ['array of strings'],
      Author: ['array of strings'],
      Audience: ['array of strings'],
      MainCharacter: ['array of strings']
    },
    definitions: {
      Word: 'definition'
    }
  },
  interpret: {
    mainPoint: `string`,
    keywords: ['array of strings'] || { keyword: 'argument for why it is a keyword' },
    points: ['array of strings'],
    titles: ['array of strings'],
    emotions: { emotion: 'argument for the presence of the emotion' },
    unwisdom: [
      {
        passage: 'REFERENCE.1.1-5',
        saying: 'unwise saying',
        comment: `comment on unwise saying`,
        chapter: 'string'
      }
    ],
    expound: [
      {
        one: `simple statement from text`,
        two: `add emotive value`,
        three: `add intrigue`,
        four: `add complexity`
      }
    ]
  },
  application: {
    convo: [
      { question: `conversation question accessible to any audience` }
    ],
    ACTS: {
      adoration: [`questions derived from the text which inspire adoration`],
      confession: [`questions derived from the text which facilitate confession of sin`],
      thanks: [`questions derived from the text which foster thankfulness`],
      supplication: [`questions derived from the text which inform requests to God`]
    },
    integrity: [{ question: ``, will: 0, intellect: 0, fantasy: 0, comment: `` }]
  }
}

