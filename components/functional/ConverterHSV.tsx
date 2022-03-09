import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import { useRgbaContext } from '../Context/RgbaContext'
import { toHsvaFromRgb } from '../../converter/toHsvFromRgb'
import { toRgbFromHsva } from '../../converter/toRgbFromHsv'
import { HSV, RGBA } from '../../types/Colors.type'
import RangeInput from '../ui/RangeInput'
import NumberInput from '../ui/NumberInput'
import SupportingText from '../ui/SupportingText'
import TextInput from '../ui/TextInput'
import CopyButton from './CopyButton'

const ConverterHSV: React.FC = () => {
  const { sharedRgba, setSharedRgba } = useRgbaContext()
  const [hsv, setHsv] = useState<HSV>({ h: 0, s: 0, v: 0 })
  const [hsvText, setHsvText] = useState<string>("0, 0, 0")

  //toHsvaFromRgb
  useEffect(() => {
    if (sharedRgba.editedFrom === "Hsv") { return }
    const newHsv = toHsvaFromRgb(sharedRgba)
    setHsv({ h: newHsv.h, s: newHsv.s, v: newHsv.v, })
    setHsvText(toHsvText(newHsv))
  }, [sharedRgba])

  const onChangeH = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHsv = { h: parseInt(e.target.value), s: hsv.s, v: hsv.v }
    setChanged(newHsv)
  }
  const onChangeS = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHsv = { h: hsv.h, s: parseInt(e.target.value), v: hsv.v }
    setChanged(newHsv)
  }
  const onChangeV = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHsv = { h: hsv.h, s: hsv.s, v: parseInt(e.target.value) }
    setChanged(newHsv)
  }

  const setChanged = (newHsv: HSV) => {
    setHsv(newHsv)
    setHsvText(toHsvText(newHsv))
    const newRgba: RGBA = toRgbFromHsva({ ...newHsv, a: sharedRgba.a })
    setSharedRgba({ ...newRgba, editedFrom: "Hsv" })
  }

  const toHsvText = (hsv: HSV): string => {
    return `${hsv.h}, ${hsv.s}, ${hsv.v}`
  }

  const onHsvTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value
    setHsvText(text)
    //TODO
    //setHsv
    //setSharedRgba
  }

  return (
    <div css={containerStyle}>
      <div css={groupStyle}>
        <SupportingText size="16px">
          H
        </SupportingText>
        <RangeInput min={0} max={360} step={1} value={hsv.h} onChange={onChangeH} tabIndex={-1} />
        <NumberInput min={0} max={360} step={1} value={hsv.h} onChange={onChangeH} tabIndex={8} />
      </div>
      <div css={groupStyle}>
        <SupportingText size="16px">
          S
        </SupportingText>
        <RangeInput min={0} max={100} step={1} value={hsv.s} onChange={onChangeS} tabIndex={-1} />
        <NumberInput min={0} max={100} step={1} value={hsv.s} onChange={onChangeS} tabIndex={9} />
      </div>
      <div css={groupStyle}>
        <SupportingText size="16px">
          V
        </SupportingText>
        <RangeInput min={0} max={100} step={1} value={hsv.v} onChange={onChangeV} tabIndex={-1} />
        <NumberInput min={0} max={100} step={1} value={hsv.v} onChange={onChangeV} tabIndex={10} />
      </div>
      <div css={groupStyle}>
        <SupportingText size="13px">
          HSV
        </SupportingText>
        <TextInput value={hsvText} onChange={onHsvTextChange} tabIndex={11} />
        <CopyButton text={hsvText} />
      </div>
    </div>
  )
}

const containerStyle = css`
  margin: 10px;
`
const groupStyle = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: nowrap;
`

export default ConverterHSV