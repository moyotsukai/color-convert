import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import { useRgbaContext } from '../../context/RgbaContext'
import { RGBA } from '../../types/Colors.type'
import TextInput from '../ui/TextInput'
import CopyButton from './CopyButton'
import SupportingText from '../ui/SupportingText'

const ConverterHex: React.FC = () => {
  const { sharedRgba, setSharedRgba } = useRgbaContext()
  const [rgba, setRgba] = useState<RGBA>({ r: 0, g: 0, b: 0, a: 1 })
  const [hexText, setHexText] = useState<string>("000000")

  //To hex from sharedRgba
  useEffect(() => {
    if (sharedRgba.editedFrom === "Hex") { return }
    const newRgba = { r: sharedRgba.r, g: sharedRgba.g, b: sharedRgba.b, a: sharedRgba.a }
    setRgba(newRgba)
    setHexText(toHexText(newRgba))
  }, [sharedRgba])

  const setChanged = (newRgba: RGBA) => {
    setRgba(newRgba)
    setHexText(toHexText(newRgba))

    const newSharedRgba: RGBA = { ...newRgba, editedFrom: "Hex" }
    setSharedRgba(newSharedRgba)
  }

  const toHexText = (rgba: RGBA): string => {
    const rgbArray = [rgba.r, rgba.g, rgba.b]
    const converted = rgbArray.map((item) => {
      const stringified = item.toString(16)
      return stringified.length === 1 ? "0" + stringified : stringified
    })

    return converted.join("")
  }

  const onHexTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value
    setHexText(text)

    if (text.length === 6) {
      const hexArray = text.match(/.{2}/g)
      const parsed = hexArray.map((item) => {
        const num = parseInt(item, 16)
        if (isNaN(num)) { return null }
        if (num < 0) { return 0 }
        return num
      })
      const isNumber = !parsed.includes(null)
      if (isNumber) {
        const newRgba = { r: parsed[0], g: parsed[1], b: parsed[2], a: rgba.a }
        setChanged(newRgba)
      }
    }
  }

  const onChangeFocus = () => {
    if (hexText.length === 3) {
      //Three letters long
      const hexArray = hexText.match(/.{1}/g)
      const repeated = hexArray.map((item) => (
        item + item
      ))
      const parsed = repeated.map((item) => {
        const num = parseInt(item, 16)
        if (isNaN(num)) { return null }
        if (num < 0) { return 0 }
        return num
      })
      const isNumber = !parsed.includes(null)
      if (isNumber) {
        const newRgba = { r: parsed[0], g: parsed[1], b: parsed[2], a: rgba.a }
        setChanged(newRgba)
      }
    } else {
      //Not correct format
      setHexText(toHexText(rgba))
    }
  }

  return (
    <div css={containerStyle}>
      <div css={groupStyle}>
        <SupportingText size="13px">
          Hex #
        </SupportingText>
        <TextInput value={hexText} onChange={onHexTextChange} onEnterKey={onChangeFocus} onBlur={onChangeFocus} tabIndex={1} />
        <CopyButton text={hexText} />
      </div>
    </div>
  )
}

const containerStyle = css`
  margin: 20px;
`
const groupStyle = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: nowrap;
`

export default ConverterHex