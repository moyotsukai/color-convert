import React, { useState } from 'react'
import { css } from '@emotion/react'
import { RGBA } from '../../types/Colors.type'
import SupportingText from '../ui/SupportingText'
import TextInput from '../ui/TextInput'
import { useBgRgbaContext } from '../../context/BgRgbaContext'

const ConverterBgHex: React.FC = () => {
  const { bgRgba, setBgRgba } = useBgRgbaContext()
  const [bgHexText, setBgHexText] = useState<string>("ffffff")

  const setChanged = (newRgba: RGBA) => {
    setBgRgba(newRgba)
    setBgHexText(toHexText(newRgba))
  }

  const toHexText = (rgba: RGBA): string => {
    const rgbArray = [rgba.r, rgba.g, rgba.b]
    const converted = rgbArray.map((item) => {
      const stringified = item.toString(16)
      return stringified.length === 1 ? "0" + stringified : stringified
    })

    return converted.join("")
  }

  const onBgHexTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value
    setBgHexText(text)

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
        const newRgba = { r: parsed[0], g: parsed[1], b: parsed[2], a: bgRgba.a }
        setChanged(newRgba)
      }
    }
  }

  const onChangeFocus = () => {
    if (bgHexText.length === 3) {
      //Three letters long
      const hexArray = bgHexText.match(/.{1}/g)
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
        const newRgba = { r: parsed[0], g: parsed[1], b: parsed[2], a: bgRgba.a }
        setChanged(newRgba)
      }
    } else {
      //Not correct format
      setBgHexText(toHexText(bgRgba))
    }
  }

  return (
    <div css={groupStyle}>
      <SupportingText size="13px">
        <span css={() => textStyle(bgRgba)}>
          Background #
        </span>
      </SupportingText>
      <TextInput
        value={bgHexText}
        onChange={onBgHexTextChange}
        onEnterKey={onChangeFocus}
        onBlur={onChangeFocus}
        width="90px"
        tabIndex={100} />
    </div>
  )
}

const groupStyle = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: nowrap;
  position: absolute;
  bottom: 10px;
  right: 10px;
`
const textStyle = (rgba: RGBA) => css`
  color: ${rgba.r + rgba.g + rgba.b > 384 ? "#4c4f59" : "#8d93a6"}
`

export default ConverterBgHex