import { dictionary } from './dictionary'

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value)
}

export const translate = (text, from, to, strictCheck = false) => {
  const textSplited = ['Plain', 'Mean_JA', 'Mean_EN'].includes(from) ? text.match(/\w+|\n|[^\s]+/g) : Array.from(text)

  if (!textSplited) {
    return ''
  }
  if (['Plain', 'Mean_JA', 'Mean_EN'].includes(to)) {
    return textSplited
      .map((word) => {
        const resp = getKeyByValue(dictionary[from], word)
        if (resp === undefined) {
          // if failed to find word in dictionary, return as is.
          if (!strictCheck) {
            if (resp === undefined) {
              return word
            }
          }
          if (word.match(/\n|[^\w]+/g)) {
            return word
          }
          return '_'
        }
        return dictionary[to][resp]
      })
      .join(' ')
  }

  return textSplited
    .map((word) => {
      const resp = getKeyByValue(dictionary[from], word)
      if (resp === undefined) {
        // remove just space
        if (word.match(/[^\S\r\n]+/g)) {
          return ''
        }
        // if failed to find word in dictionary, return as is.
        if (!strictCheck) {
          if (resp === undefined) {
            return word
          }
        }
        if (word.match(/\n|[^\w]+/g)) {
          return word
        }
        return '_'
      }
      return dictionary[to][resp]
    })
    .join('')
}

export const textToSitelen = (text) => {
  const textSplited = text.split(' ')

  return textSplited
    .map((word) => {
      if (dictionary[word] === undefined) {
        return '...'
      }
      const emoji = dictionary[word]['SP']
      return emoji
    })
    .join('')
}

export const EmojiToText = (text) => {
  const textSplited = text.split(' ')

  return textSplited
    .map((word) => {
      if (dictionary[word] === undefined) {
        return '...'
      }
      const emoji = dictionary[word]['U6']
      return emoji
    })
    .join('')
}
