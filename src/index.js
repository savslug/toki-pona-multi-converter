import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Grid, Paper } from '@material-ui/core'

import { Emoji, Plain, SitelenPona, Japanese, English } from './components/TextFields'
import { translate } from './utils/translate'

import './styles.css'

function App() {
  const [plainText, setPlainText] = useState('')
  const [sitelenText, setSitelenText] = useState('')
  const [EmojiText, setEmojiText] = useState('')
  const [JapanText, setJapanText] = useState('')
  const [EnglishText, setEnglishText] = useState('')

  const onChangePlainText = plainText => {
    setPlainText(plainText)
    setSitelenText(translate(plainText, 'Plain', 'SP'))
    setEmojiText(translate(plainText, 'Plain', 'U6'))
    setJapanText(translate(plainText, 'Plain', 'Japanese'))
    setEnglishText(translate(plainText, 'Plain', 'Mean_EN'))
  }

  const onChangeSitelenText = SitelenText => {
    setSitelenText(SitelenText)
    setPlainText(translate(plainText, 'SP', 'Plain'))
    setEmojiText(translate(plainText, 'SP', 'U6'))
    setJapanText(translate(plainText, 'SP', 'Japanese'))
    setEnglishText(translate(SitelenText, 'SP', 'Mean_EN'))
  }

  const onChangeEmojiText = EmojiText => {
    setEmojiText(EmojiText)
    setPlainText(translate(EmojiText, 'U6', 'Plain'))
    setSitelenText(translate(EmojiText, 'U6', 'SP'))
    setJapanText(translate(EmojiText, 'U6', 'Japanese'))
    setEnglishText(translate(EmojiText, 'U6', 'Mean_EN'))
  }

  const onChangeJapanText = JapanText => {
    setJapanText(JapanText)
    setPlainText(translate(JapanText, 'Japanese', 'Plain'))
    setSitelenText(translate(JapanText, 'Japanese', 'SP'))
    setEmojiText(translate(JapanText, 'Japanese', 'U6'))
    setEnglishText(translate(JapanText, 'Japanese', 'Mean_EN'))
  }

  const onChangeEnglishText = EnglishText => {
    setEnglishText(EnglishText)
    setPlainText(translate(EnglishText, 'Mean_EN', 'Plain'))
    setSitelenText(translate(EnglishText, 'Mean_EN', 'SP'))
    setEmojiText(translate(EnglishText, 'Mean_EN', 'U6'))
    setJapanText(translate(EnglishText, 'Mean_EN', 'Japanese'))
  }

  return (
    <div className="App">
      <Grid container justify="center" spacing={20} display="inline-block">
        <Grid item xs={10}>
          <h1>toki pona multi converter</h1>
        </Grid>
        <Grid item xs={10}>
          <Paper>
            <Grid container justify="center" spacing={40} direction="column">
              <Grid item>
                <h2>
                  <a href="https://tokipona.org/">toki pona</a>
                </h2>
                <Plain value={plainText} onChange={onChangePlainText} />
              </Grid>
              <Grid item>
                <h2>
                  <a href="https://jan-ne.github.io/tp/sp">sitelen pona</a>
                </h2>
                <SitelenPona value={sitelenText} onChange={onChangeSitelenText} className="sitelen pona" />
              </Grid>
              <Grid item>
                <h2>
                  <a href="https://github.com/holtzermann17/toki-pona-emoji/blob/master/word_list.md">
                    toki-pona-emoji
                  </a>
                </h2>
                <Emoji value={EmojiText} onChange={onChangeEmojiText} />
              </Grid>
              <Grid item>
                <h2>Japanese Kanji</h2>
                <Japanese value={JapanText} onChange={onChangeJapanText} />
              </Grid>
              <Grid item>
                <h2>English Word</h2>
                <English value={EnglishText} onChange={onChangeEnglishText} />
              </Grid>
            </Grid>
            <Grid item xs={0}>
              <a href="https://ilapaj.com/">jan Japali</a>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
