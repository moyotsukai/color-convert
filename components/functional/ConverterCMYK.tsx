import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import { useRgbaContext } from '../../context/RgbaContext'
import { CMYK, RGBA } from '../../types/Colors.type'
import RangeInput from '../ui/RangeInput'
import NumberInput from '../ui/NumberInput'
import SupportingText from '../ui/SupportingText'
import TextInput from '../ui/TextInput'
import CopyButton from './CopyButton'
import { toRgbFromCmyka } from '../../converter/toRgbFromCmyk'
import { toCmykFromRgb } from '../../converter/toCmykFromRgb'

const ConverterCMYK: React.FC = () => {
  const { sharedRgba, setSharedRgba } = useRgbaContext()
  const [cmyk, setCmyk] = useState<CMYK>({ c: 0, m: 0, y: 0, k: 100 })
  const [cmykText, setCmykText] = useState<string>("0, 0, 0, 100")

  //To cmyk from sharedRgba
  useEffect(() => {
    if (sharedRgba.editedFrom === "Cmyk") { return }
    const newCmyk = toCmykFromRgb(sharedRgba)
    setCmyk({ c: newCmyk.c, m: newCmyk.m, y: newCmyk.y, k: newCmyk.k })
    setCmykText(toCmykText(newCmyk))
  }, [sharedRgba])

  const onChangeC = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCmyk: CMYK = { c: parseInt(e.target.value), m: cmyk.m, y: cmyk.y, k: cmyk.k }
    setChanged(newCmyk)
  }
  const onChangeM = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCmyk: CMYK = { c: cmyk.c, m: parseInt(e.target.value), y: cmyk.y, k: cmyk.k }
    setChanged(newCmyk)
  }
  const onChangeY = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCmyk: CMYK = { c: cmyk.c, m: cmyk.m, y: parseInt(e.target.value), k: cmyk.k }
    setChanged(newCmyk)
  }
  const onChangeK = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCmyk: CMYK = { c: cmyk.c, m: cmyk.m, y: cmyk.y, k: parseInt(e.target.value) }
    setChanged(newCmyk)
  }

  const setChanged = (newCmyk: CMYK) => {
    setCmyk(newCmyk)
    setCmykText(toCmykText(newCmyk))

    const newRgba: RGBA = toRgbFromCmyka({ ...newCmyk, a: sharedRgba.a })
    setSharedRgba({ ...newRgba, editedFrom: "Cmyk" })
  }

  const toCmykText = (cmyk: CMYK): string => {
    return `${cmyk.c}, ${cmyk.m}, ${cmyk.y}, ${cmyk.k}`
  }

  const onCmykTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value
    setCmykText(text)

    const splitted = text.split(", ")
    const parsed = splitted.map((item: string) => {
      const num = parseInt(item)
      if (isNaN(num)) { return null }
      if (num > 100) { return 100 }
      if (num < 0) { return 0 }
      return num
    })
    const isNumber = !parsed.includes(null)
    if (isNumber && parsed.length === 4) {
      const newCmyk: CMYK = { c: parsed[0], m: parsed[1], y: parsed[2], k: parsed[3] }
      setChanged(newCmyk)
    }
  }

  const onChangeFocus = () => {
    setCmykText(toCmykText(cmyk))
  }

  return (
    <div css={containerStyle}>
      <div css={groupStyle}>
        <SupportingText size="16px">
          C
        </SupportingText>
        <RangeInput min={0} max={100} step={1} value={cmyk.c} onChange={onChangeC} tabIndex={-1} />
        <NumberInput min={0} max={100} step={1} value={cmyk.c} onChange={onChangeC} tabIndex={16} />
      </div>
      <div css={groupStyle}>
        <SupportingText size="16px">
          M
        </SupportingText>
        <RangeInput min={0} max={100} step={1} value={cmyk.m} onChange={onChangeM} tabIndex={-1} />
        <NumberInput min={0} max={100} step={1} value={cmyk.m} onChange={onChangeM} tabIndex={17} />
      </div>
      <div css={groupStyle}>
        <SupportingText size="16px">
          Y
        </SupportingText>
        <RangeInput min={0} max={100} step={1} value={cmyk.y} onChange={onChangeY} tabIndex={-1} />
        <NumberInput min={0} max={100} step={1} value={cmyk.y} onChange={onChangeY} tabIndex={18} />
      </div>
      <div css={groupStyle}>
        <SupportingText size="16px">
          K
        </SupportingText>
        <RangeInput min={0} max={100} step={1} value={cmyk.k} onChange={onChangeK} tabIndex={-1} />
        <NumberInput min={0} max={100} step={1} value={cmyk.k} onChange={onChangeK} tabIndex={19} />
      </div>
      <div css={groupStyle}>
        <SupportingText size="13px">
          CMYK
        </SupportingText>
        <TextInput value={cmykText} onChange={onCmykTextChange} onEnterKey={onChangeFocus} onBlur={onChangeFocus} tabIndex={20} />
        <CopyButton text={cmykText} />
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

export default ConverterCMYK