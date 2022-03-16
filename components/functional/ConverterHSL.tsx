import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import { useRgbaContext } from '../../context/RgbaContext'
import { HSL, RGBA } from '../../types/Colors.type'
import RangeInput from '../ui/RangeInput'
import NumberInput from '../ui/NumberInput'
import SupportingText from '../ui/SupportingText'
import TextInput from '../ui/TextInput'
import CopyButton from './CopyButton'
import { toHslaFromRgb } from '../../converter/toHslFromRgb'
import { toRgbFromHsla } from '../../converter/toRgbFromHsl'

const ConverterHSL: React.FC = () => {
  const { sharedRgba, setSharedRgba } = useRgbaContext()
  const [hsl, setHsl] = useState<HSL>({ h: 0, s: 0, l: 0 })
  const [hslText, setHslText] = useState<string>("0, 0, 0")

  //To hsl from sharedRgba
  useEffect(() => {
    if (sharedRgba.editedFrom === "Hsl") { return }
    const newHsl = toHslaFromRgb(sharedRgba)
    setHsl({ h: newHsl.h, s: newHsl.s, l: newHsl.l })
    setHslText(toHslText(newHsl))
  }, [sharedRgba])

  const onChangeH = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHsl = { h: parseInt(e.target.value), s: hsl.s, l: hsl.l }
    setChanged(newHsl)
  }
  const onChangeS = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHsl = { h: hsl.h, s: parseInt(e.target.value), l: hsl.l }
    setChanged(newHsl)
  }
  const onChangeL = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHsl = { h: hsl.h, s: hsl.s, l: parseInt(e.target.value) }
    setChanged(newHsl)
  }

  const setChanged = (newHsl: HSL) => {
    setHsl(newHsl)
    setHslText(toHslText(newHsl))

    const newRgba: RGBA = toRgbFromHsla({ ...newHsl, a: sharedRgba.a })
    setSharedRgba({ ...newRgba, editedFrom: "Hsl" })
  }

  const toHslText = (hsl: HSL): string => {
    return `${hsl.h}, ${hsl.s}, ${hsl.l}`
  }

  const onHslTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value
    setHslText(text)

    const splitted = text.split(", ")
    const parsed = splitted.map((item: string, index) => {
      const num = parseInt(item)
      if (isNaN(num)) { return null }
      if (index === 0 && num > 360) { return 360 }
      if (index === 0 && num < 0) { return 0 }
      if (index !== 0 && num > 100) { return 100 }
      if (index !== 0 && num < 0) { return 0 }
      return num
    })
    const isNumber = !parsed.includes(null)
    if (isNumber && parsed.length === 3) {
      const newHsl = { h: parsed[0], s: parsed[1], l: parsed[2] }
      setChanged(newHsl)
    }
  }

  const onChangeFocus = () => {
    setHslText(toHslText(hsl))
  }

  return (
    <div css={containerStyle}>
      <div css={groupStyle}>
        <SupportingText size="16px">
          H
        </SupportingText>
        <RangeInput min={0} max={360} step={1} value={hsl.h} onChange={onChangeH} tabIndex={-1} />
        <NumberInput min={0} max={360} step={1} value={hsl.h} onChange={onChangeH} tabIndex={12} />
      </div>
      <div css={groupStyle}>
        <SupportingText size="16px">
          S
        </SupportingText>
        <RangeInput min={0} max={100} step={1} value={hsl.s} onChange={onChangeS} tabIndex={-1} />
        <NumberInput min={0} max={100} step={1} value={hsl.s} onChange={onChangeS} tabIndex={13} />
      </div>
      <div css={groupStyle}>
        <SupportingText size="16px">
          L
        </SupportingText>
        <RangeInput min={0} max={100} step={1} value={hsl.l} onChange={onChangeL} tabIndex={-1} />
        <NumberInput min={0} max={100} step={1} value={hsl.l} onChange={onChangeL} tabIndex={14} />
      </div>
      <div css={groupStyle}>
        <SupportingText size="13px">
          HSL
        </SupportingText>
        <TextInput value={hslText} onChange={onHslTextChange} onEnterKey={onChangeFocus} onBlur={onChangeFocus} tabIndex={15} />
        <CopyButton text={hslText} />
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

export default ConverterHSL