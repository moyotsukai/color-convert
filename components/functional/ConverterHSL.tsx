import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import { HSLA, RGBA } from '../../types/Colors.type'
import RangeInput from '../ui/RangeInput'
import NumberInput from '../ui/NumberInput'
import SupportingText from '../ui/SupportingText'
import TextInput from '../ui/TextInput'
import CopyButton from './CopyButton'
import { toHslaFromRgb } from '../../converter/toHslFromRgb'
import { toRgbFromHsla } from '../../converter/toRgbFromHsl'
import { useSetSharedRgba, useSharedRgbaValue } from '../../context/RgbaContext'
import { log } from '../../utils/log'

const ConverterHSLA: React.FC = () => {
  const [sharedRgba, setSharedRgba] = [useSharedRgbaValue(), useSetSharedRgba()]
  const [hsla, setHsla] = useState<HSLA>({ h: 0, s: 0, l: 0, a: 1 })
  const [hslText, setHslText] = useState<string>("0, 0%, 0%")
  const [hslaText, setHslaText] = useState<string>("0, 0%, 0%, 1")

  //To hsl from sharedRgba
  useEffect(() => {
    if (sharedRgba.editedFrom === "Hsla") { return }
    const newHsla = toHslaFromRgb(sharedRgba)
    setHsla({ h: newHsla.h, s: newHsla.s, l: newHsla.l, a: newHsla.a })
    setHslText(toHslText(newHsla))
    setHslaText(toHslaText(newHsla))
  }, [sharedRgba])

  const onChangeH = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHsla = { h: parseInt(e.target.value), s: hsla.s, l: hsla.l, a: hsla.a }
    setChanged(newHsla)
  }
  const onChangeS = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHsla = { h: hsla.h, s: parseInt(e.target.value), l: hsla.l, a: hsla.a }
    setChanged(newHsla)
  }
  const onChangeL = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHsla = { h: hsla.h, s: hsla.s, l: parseInt(e.target.value), a: hsla.a }
    setChanged(newHsla)
  }

  const onChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHsla = { h: hsla.h, s: hsla.s, l: hsla.l, a: parseFloat(e.target.value) }
    setChanged(newHsla)
  }

  const setChanged = (newHsla: HSLA) => {
    setHsla(newHsla)
    setHslText(toHslText(newHsla))
    setHslaText(toHslaText(newHsla))

    const newRgba: RGBA = toRgbFromHsla(newHsla)
    setSharedRgba({ ...newRgba, editedFrom: "Hsla" })
  }

  const toHslText = (hsla: HSLA): string => {
    return `${hsla.h}, ${hsla.s}%, ${hsla.l}%`
  }

  const toHslaText = (hsla: HSLA): string => {
    return `${hsla.h}, ${hsla.s}%, ${hsla.l}%, ${hsla.a}`
  }

  const onHslTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value
    setHslText(text)

    const splitted = text.split(", ")
    const parsed = splitted.map((item: string, index: number) => {
      if ([1, 2].includes(index) && item.slice(-1) !== "%") { return null }
      const isPercentText = [1, 2].includes(index) && item.slice(-1) === "%"
      const numString = isPercentText ? item.slice(0, -1) : item
      const num = parseInt(numString)
      if (isNaN(num)) { return null }
      if (index === 0 && num > 360) { return 360 }
      if (index === 0 && num < 0) { return 0 }
      if (num > 100) { return 100 }
      if (num < 0) { return 0 }
      return num
    })
    const isNumber = !parsed.includes(null)
    if (isNumber && parsed.length === 3) {
      const newHsla = { h: parsed[0], s: parsed[1], l: parsed[2], a: hsla.a }
      setChanged(newHsla)
    }
  }

  const onHslaTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value
    setHslaText(text)

    const splitted = text.split(", ")
    const parsed = splitted.map((item: string, index: number) => {
      if ([1, 2].includes(index) && item.slice(-1) !== "%") { return null }
      if (index === 3 && item === "0.") { return null }
      const isPercentText = [1, 2].includes(index) && item.slice(-1) === "%"
      const numString = isPercentText ? item.slice(0, -1) : item
      const num = index === 3 ? parseFloat(numString) : parseInt(numString)
      if (isNaN(num)) { return null }
      if (index === 0 && num > 360) { return 360 }
      if (index === 0 && num < 0) { return 0 }
      if (index === 3 && num > 1) { return 1 }
      if (index === 3 && num < 0) { return 0 }
      if (num > 100) { return 100 }
      if (num < 0) { return 0 }
      return num
    })
    const isNumber = !parsed.includes(null)
    if (isNumber && parsed.length === 4) {
      const newHsla = { h: parsed[0], s: parsed[1], l: parsed[2], a: parsed[3] }
      setChanged(newHsla)
    }
  }

  const onChangeFocus = (colorMode: "Hsl" | "Hsla") => {
    const text = colorMode === "Hsl" ? hslText : hslaText
    const splitted = text.split(", ")
    const parsed = splitted.map((item: string, index: number) => {
      const isPercentText = [1, 2].includes(index) && item.slice(-1) === "%"
      const numString = isPercentText ? item.slice(0, -1) : item
      const num = index === 3 ? parseFloat(numString) : parseInt(numString)
      if (isNaN(num)) { return null }
      if (index === 0 && num > 360) { return 360 }
      if (index === 0 && num < 0) { return 0 }
      if (index === 3 && num > 1) { return 1 }
      if (index === 3 && num < 0) { return 0 }
      if (num > 100) { return 100 }
      if (num < 0) { return 0 }
      return num
    })
    const isNumber = !parsed.includes(null)
    if (colorMode === "Hsl") {
      if (isNumber && parsed.length === 3) {
        const newHsla = { h: parsed[0], s: parsed[1], l: parsed[2], a: hsla.a }
        setChanged(newHsla)
        log("1")
      } else {
        setHslText(toHslText(hsla))
        log("2")
      }
    }
    if (colorMode === "Hsla") {
      if (isNumber && parsed.length === 4) {
        const newHsla = { h: parsed[0], s: parsed[1], l: parsed[2], a: parsed[3] }
        setChanged(newHsla)
        log("3")
      } else {
        setHslaText(toHslaText(hsla))
        log("4")
      }
    }
  }

  return (
    <div css={containerStyle}>
      <div css={groupStyle}>
        <SupportingText size="16px">
          H
        </SupportingText>
        <RangeInput min={0} max={360} step={1} value={hsla.h} onChange={onChangeH} tabIndex={-1} />
        <NumberInput min={0} max={360} step={1} value={hsla.h} onChange={onChangeH} tabIndex={8} />
      </div>
      <div css={groupStyle}>
        <SupportingText size="16px">
          S
        </SupportingText>
        <RangeInput min={0} max={100} step={1} value={hsla.s} onChange={onChangeS} tabIndex={-1} />
        <NumberInput min={0} max={100} step={1} value={hsla.s} onChange={onChangeS} tabIndex={9} />
      </div>
      <div css={groupStyle}>
        <SupportingText size="16px">
          L
        </SupportingText>
        <RangeInput min={0} max={100} step={1} value={hsla.l} onChange={onChangeL} tabIndex={-1} />
        <NumberInput min={0} max={100} step={1} value={hsla.l} onChange={onChangeL} tabIndex={10} />
      </div>
      <div css={groupStyle}>
        <SupportingText size="16px">
          A
        </SupportingText>
        <RangeInput min={0} max={1} step={0.01} value={hsla.a} onChange={onChangeA} tabIndex={-1} />
        <NumberInput min={0} max={1} step={0.01} value={hsla.a} onChange={onChangeA} tabIndex={11} />
      </div>
      <div css={groupStyle}>
        <SupportingText size="13px">
          HSL
        </SupportingText>
        <TextInput value={hslText} onChange={onHslTextChange} onEnterKey={() => onChangeFocus("Hsl")} onBlur={() => onChangeFocus("Hsl")} tabIndex={12} />
        <CopyButton text={hslText} />
      </div>
      <div css={groupStyle}>
        <SupportingText size="13px">
          HSLA
        </SupportingText>
        <TextInput value={hslaText} onChange={onHslaTextChange} onEnterKey={() => onChangeFocus("Hsla")} onBlur={() => onChangeFocus("Hsla")} tabIndex={13} />
        <CopyButton text={hslaText} />
      </div>
    </div>
  )
}

const containerStyle = css`
  margin: 30px 25px;
`
const groupStyle = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: nowrap;
`

export default ConverterHSLA