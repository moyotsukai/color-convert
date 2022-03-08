import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import { useRgbaContext } from '../Context/RgbaContext'
import { RGBA } from '../../types/Colors.type'

const ConverterRGBA: React.FC = () => {
  const { rgba, setRgba } = useRgbaContext()
  const [r, setR] = useState<number>(0)
  const [g, setG] = useState<number>(0)
  const [b, setB] = useState<number>(0)
  const [a, setA] = useState<number>(1)

  //toRgbaFromCommonRgba
  useEffect(() => {
    if (rgba.editedFrom === "Rgba") { return }
    setR(rgba.r)
    setG(rgba.g)
    setB(rgba.b)
    setA(rgba.a)
  }, [rgba])

  const onChangeR = (e: React.ChangeEvent<HTMLInputElement>) => {
    setR(parseInt(e.target.value))
    const newRgba: RGBA = { r: parseInt(e.target.value), g: g, b: b, a: a, editedFrom: "Rgba" }
    setRgba(newRgba)
  }
  const onChangeG = (e: React.ChangeEvent<HTMLInputElement>) => {
    setG(parseInt(e.target.value))
    const newRgba: RGBA = { r: r, g: parseInt(e.target.value), b: b, a: a, editedFrom: "Rgba" }
    setRgba(newRgba)
  }
  const onChangeB = (e: React.ChangeEvent<HTMLInputElement>) => {
    setB(parseInt(e.target.value))
    const newRgba: RGBA = { r: r, g: g, b: parseInt(e.target.value), a: a, editedFrom: "Rgba" }
    setRgba(newRgba)
  }
  const onChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {
    setA(parseFloat(e.target.value))
    const newRgba: RGBA = { r: r, g: g, b: b, a: parseFloat(e.target.value), editedFrom: "Rgba" }
    setRgba(newRgba)
  }

  return (
    <div>
      <div>
        <span>R</span>
        <input type="range" min={0} max={255} step={1} value={r} onChange={onChangeR} />
        <input type="number" min={0} max={255} step={1} value={r} onChange={onChangeR} />
      </div>
      <div>
        <span>G</span>
        <input type="range" min={0} max={255} step={1} value={g} onChange={onChangeG} />
        <input type="number" min={0} max={255} step={1} value={g} onChange={onChangeG} />
      </div>
      <div>
        <span>B</span>
        <input type="range" min={0} max={255} step={1} value={b} onChange={onChangeB} />
        <input type="number" min={0} max={255} step={1} value={b} onChange={onChangeB} />
      </div>
      <div>
        <span>A</span>
        <input type="range" min={0} max={1} step={0.01} value={a} onChange={onChangeA} />
        <input type="number" min={0} max={255} step={0.01} value={a} onChange={onChangeA} />
      </div>
    </div>
  )
}

export default ConverterRGBA