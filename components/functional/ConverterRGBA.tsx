import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import { useRgbaContext } from '../Context/RgbaContext'
import { RGBA } from '../../types/Colors.type'
import RangeInput from '../ui/RangeInput'
import NumberInput from '../ui/NumberInput'

const ConverterRGBA: React.FC = () => {
  const { sharedRgba, setSharedRgba } = useRgbaContext()
  const [rgba, setRgba] = useState<RGBA>({ r: 0, g: 0, b: 0, a: 1 })

  //toRgbaFromCommonRgba
  useEffect(() => {
    if (sharedRgba.editedFrom === "Rgba") { return }
    setRgba({ r: sharedRgba.r, g: sharedRgba.g, b: sharedRgba.b, a: sharedRgba.a })
  }, [sharedRgba])

  const onChangeR = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newR = parseInt(e.target.value)
    setRgba({ r: newR, g: rgba.g, b: rgba.b, a: rgba.a })
    const newSharedRgba: RGBA = { r: newR, g: rgba.g, b: rgba.b, a: rgba.a, editedFrom: "Rgba" }
    setSharedRgba(newSharedRgba)
  }
  const onChangeG = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newG = parseInt(e.target.value)
    setRgba({ r: rgba.r, g: newG, b: rgba.b, a: rgba.a })
    const newSharedRgba: RGBA = { r: rgba.r, g: newG, b: rgba.b, a: rgba.a, editedFrom: "Rgba" }
    setSharedRgba(newSharedRgba)
  }
  const onChangeB = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newB = parseInt(e.target.value)
    setRgba({ r: rgba.r, g: rgba.g, b: newB, a: rgba.a })
    const newSharedRgba: RGBA = { r: rgba.r, g: rgba.g, b: newB, a: rgba.a, editedFrom: "Rgba" }
    setSharedRgba(newSharedRgba)
  }
  const onChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newA = parseFloat(e.target.value)
    setRgba({ r: rgba.r, g: rgba.g, b: rgba.b, a: newA })
    const newSharedRgba: RGBA = { r: rgba.r, g: rgba.g, b: rgba.b, a: newA, editedFrom: "Rgba" }
    setSharedRgba(newSharedRgba)
  }

  return (
    <div css={containerStyle}>
      <div css={groupStyle}>
        <span>R</span>
        <RangeInput min={0} max={255} step={1} value={rgba.r} onChange={onChangeR} tabIndex={-1} />
        <NumberInput min={0} max={255} step={1} value={rgba.r} onChange={onChangeR} tabIndex={2} />
      </div>
      <div css={groupStyle}>
        <span>G</span>
        <RangeInput min={0} max={255} step={1} value={rgba.g} onChange={onChangeG} tabIndex={-1} />
        <NumberInput min={0} max={255} step={1} value={rgba.g} onChange={onChangeG} tabIndex={3} />
      </div>
      <div css={groupStyle}>
        <span>B</span>
        <RangeInput min={0} max={255} step={1} value={rgba.b} onChange={onChangeB} tabIndex={-1} />
        <NumberInput min={0} max={255} step={1} value={rgba.b} onChange={onChangeB} tabIndex={4} />
      </div>
      <div css={groupStyle}>
        <span>A</span>
        <RangeInput min={0} max={1} step={0.01} value={rgba.a} onChange={onChangeA} tabIndex={-1} />
        <NumberInput min={0} max={1} step={0.01} value={rgba.a} onChange={onChangeA} tabIndex={5} />
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

export default ConverterRGBA