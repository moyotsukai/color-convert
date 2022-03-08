import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import { useRgbaContext } from '../Context/RgbaContext'
import { toHsvaFromRgb } from '../../converter/toHsvFromRgb'
import { toRgbFromHsva } from '../../converter/toRgbFromHsv'
import { RGBA } from '../../types/Colors.type'

const ConverterHSV: React.FC = () => {
  const { rgba, setRgba } = useRgbaContext()
  const [h, setH] = useState<number>(0)
  const [s, setS] = useState<number>(0)
  const [v, setV] = useState<number>(0)

  //toHsvaFromRgb
  useEffect(() => {
    if (rgba.editedFrom === "Hsva") { return }
    const hsv = toHsvaFromRgb(rgba)
    setH(hsv.h)
    setS(hsv.s)
    setV(hsv.v)
  }, [rgba])

  const onChangeH = (e: React.ChangeEvent<HTMLInputElement>) => {
    setH(parseInt(e.target.value))
    const newRgba: RGBA = toRgbFromHsva({ h: parseInt(e.target.value), s: s, v: v, a: rgba.a })
    setRgba({ ...newRgba, editedFrom: "Hsva" })
  }
  const onChangeS = (e: React.ChangeEvent<HTMLInputElement>) => {
    setS(parseInt(e.target.value))
    const newRgba: RGBA = toRgbFromHsva({ h: h, s: parseInt(e.target.value), v: v, a: rgba.a })
    setRgba({ ...newRgba, editedFrom: "Hsva" })
  }
  const onChangeV = (e: React.ChangeEvent<HTMLInputElement>) => {
    setV(parseInt(e.target.value))
    const newRgba: RGBA = toRgbFromHsva({ h: h, s: s, v: parseInt(e.target.value), a: rgba.a })
    setRgba({ ...newRgba, editedFrom: "Hsva" })
  }

  return (
    <div>
      <div>
        <span>H</span>
        <input type="range" min={0} max={360} step={1} value={h} onChange={onChangeH} />
        <input type="number" min={0} max={360} step={1} value={h} onChange={onChangeH} />
      </div>
      <div>
        <span>S</span>
        <input type="range" min={0} max={100} step={1} value={s} onChange={onChangeS} />
        <input type="number" min={0} max={100} step={1} value={s} onChange={onChangeS} />
      </div>
      <div>
        <span>V</span>
        <input type="range" min={0} max={100} step={1} value={v} onChange={onChangeV} />
        <input type="number" min={0} max={100} step={1} value={v} onChange={onChangeV} />
      </div>
    </div>
  )
}

export default ConverterHSV