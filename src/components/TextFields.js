import React, { useState, useEffect } from 'react'
import { TextField } from '@material-ui/core'

export const Plain = ({ onChange, value, shift }) => {
  const changeValue = (e) => {
    const value = e.target.value
    onChange(value)
  }

  return (
    <TextField
      multiline
      style={{ width: '80%' }}
      rows={5}
      value={value}
      onChange={changeValue}
      placeholder={'o sitelen lon ni!'}
    />
  )
}

export const SitelenPona = ({ onChange, value, shift }) => {
  const changeValue = (e) => {
    const value = e.target.value
    onChange(value)
  }

  return (
    <TextField
      multiline
      style={{ width: '80%' }}
      rows={5}
      value={value}
      onChange={changeValue}
      placeholder={''}
      inputProps={{ style: { fontFamily: 'toki-ponaregular' } }}
    />
  )
}

export const Emoji = ({ onChange, value, shift }) => {
  const changeValue = (e) => {
    const value = e.target.value
    onChange(value)
  }

  return (
    <TextField
      multiline
      style={{ width: '80%' }}
      rows={5}
      value={value}
      onChange={changeValue}
      placeholder={'👋⛲️🙇🙌'}
    />
  )
}

export const Japanese = ({ onChange, value, shift }) => {
  const changeValue = (e) => {
    const value = e.target.value
    onChange(value)
  }

  return (
    <TextField
      multiline
      style={{ width: '80%' }}
      rows={5}
      value={value}
      onChange={changeValue}
      placeholder={'お画在此'}
    />
  )
}

export const English = ({ onChange, value, shift }) => {
  const changeValue = (e) => {
    const value = e.target.value
    onChange(value)
  }

  return (
    <TextField
      multiline
      style={{ width: '80%' }}
      rows={5}
      value={value}
      onChange={changeValue}
      placeholder={'[imperative] draw in/on/at this'}
    />
  )
}

export const A = ({ onChange, value, shift }) => {
  const changeValue = (e) => {
    const value = e.target.value
    onChange(value)
  }

  return (
    <TextField
      multiline
      style={{ width: '80%' }}
      rows={5}
      value={value}
      onChange={changeValue}
      placeholder={'Enter Kanji text'}
    />
  )
}
