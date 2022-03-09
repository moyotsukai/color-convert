import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import { useRgbaContext } from '../Context/RgbaContext'
import { toHsvaFromRgb } from '../../converter/toHsvFromRgb'
import { toRgbFromHsva } from '../../converter/toRgbFromHsv'
import { HSV, RGBA } from '../../types/Colors.type'
import RangeInput from '../ui/RangeInput'
import NumberInput from '../ui/NumberInput'

const ConverterHSV: React.FC = () => {
  const { sharedRgba, setSharedRgba } = useRgbaContext()
  const [hsv, setHsv] = useState<HSV>({ h: 0, s: 0, v: 0 })

  //toHsvaFromRgb
  useEffect(() => {
    if (sharedRgba.editedFrom === "Hsv") { return }
    const newHsv = toHsvaFromRgb(sharedRgba)
    setHsv({ h: newHsv.h, s: newHsv.s, v: newHsv.v, })
  }, [sharedRgba])

  const onChangeH = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newH = parseInt(e.target.value)
    setHsv({ h: newH, s: hsv.s, v: hsv.v })
    const newRgba: RGBA = toRgbFromHsva({ h: newH, s: hsv.s, v: hsv.v, a: sharedRgba.a })
    setSharedRgba({ ...newRgba, editedFrom: "Hsv" })
  }
  const onChangeS = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newS = parseInt(e.target.value)
    setHsv({ h: hsv.h, s: newS, v: hsv.v })
    const newRgba: RGBA = toRgbFromHsva({ h: hsv.h, s: newS, v: hsv.v, a: sharedRgba.a })
    setSharedRgba({ ...newRgba, editedFrom: "Hsv" })
  }
  const onChangeV = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newV = parseInt(e.target.value)
    setHsv({ h: hsv.h, s: hsv.s, v: newV })
    const newRgba: RGBA = toRgbFromHsva({ h: hsv.h, s: hsv.s, v: newV, a: sharedRgba.a })
    setSharedRgba({ ...newRgba, editedFrom: "Hsv" })
  }

  return (
    <div css={containerStyle}>
      <div css={groupStyle}>
        <span>H</span>
        <RangeInput min={0} max={360} step={1} value={hsv.h} onChange={onChangeH} tabIndex={-1} />
        <NumberInput min={0} max={360} step={1} value={hsv.h} onChange={onChangeH} tabIndex={6} />
      </div>
      <div css={groupStyle}>
        <span>S</span>
        <RangeInput min={0} max={100} step={1} value={hsv.s} onChange={onChangeS} tabIndex={-1} />
        <NumberInput min={0} max={100} step={1} value={hsv.s} onChange={onChangeS} tabIndex={7} />
      </div>
      <div css={groupStyle}>
        <span>V</span>
        <RangeInput min={0} max={100} step={1} value={hsv.v} onChange={onChangeV} tabIndex={-1} />
        <NumberInput min={0} max={100} step={1} value={hsv.v} onChange={onChangeV} tabIndex={8} />
      </div>
    </div>
  )
}

const containerStyle = css`
  margin: 10px;
`
const groupStyle = css`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
`

export default ConverterHSV