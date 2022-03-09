import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import { useRgbaContext } from '../Context/RgbaContext'
import { RGBA } from '../../types/Colors.type'
import RangeInput from '../ui/RangeInput'
import NumberInput from '../ui/NumberInput'
import TextInput from '../ui/TextInput'
import CopyButton from './CopyButton'
import SupportingText from '../ui/SupportingText'

const ConverterRGBA: React.FC = () => {
  const { sharedRgba, setSharedRgba } = useRgbaContext()
  const [rgba, setRgba] = useState<RGBA>({ r: 0, g: 0, b: 0, a: 1 })
  const [rgbText, setRgbText] = useState<string>("0, 0, 0")
  const [rgbaText, setRgbaText] = useState<string>("0, 0, 0, 1")

  //toRgbaFromCommonRgba
  useEffect(() => {
    if (sharedRgba.editedFrom === "Rgba") { return }
    const newRgba = { r: sharedRgba.r, g: sharedRgba.g, b: sharedRgba.b, a: sharedRgba.a }
    setRgba(newRgba)
    setRgbText(toRgbText(newRgba))
    setRgbaText(toRgbaText(newRgba))
  }, [sharedRgba])

  const onChangeR = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRgba = { r: parseInt(e.target.value), g: rgba.g, b: rgba.b, a: rgba.a }
    setChanged(newRgba)
  }
  const onChangeG = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRgba = { r: rgba.r, g: parseInt(e.target.value), b: rgba.b, a: rgba.a }
    setChanged(newRgba)

  }
  const onChangeB = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRgba = { r: rgba.r, g: rgba.g, b: parseInt(e.target.value), a: rgba.a }
    setChanged(newRgba)

  }
  const onChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRgba = { r: rgba.r, g: rgba.g, b: rgba.b, a: parseFloat(e.target.value) }
    setChanged(newRgba)
  }

  const setChanged = (newRgba: RGBA) => {
    setRgba(newRgba)
    setRgbText(toRgbText(newRgba))
    setRgbaText(toRgbaText(newRgba))
    const newSharedRgba: RGBA = { ...newRgba, editedFrom: "Rgba" }
    setSharedRgba(newSharedRgba)
  }

  const toRgbText = (rgba: RGBA): string => {
    return `${rgba.r}, ${rgba.g}, ${rgba.b}`
  }

  const toRgbaText = (rgba: RGBA): string => {
    return `${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a}`
  }

  const onRgbTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value
    setRgbText(text)
    //TODO
    //setRgba
    //setSharedRgba
  }

  const onRgbaTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value
    setRgbaText(text)
    //TODO
    //setRgba
    //setSharedRgba
  }


  return (
    <div css={containerStyle}>
      <div css={groupStyle}>
        <SupportingText size="16px">
          R
        </SupportingText>
        <RangeInput min={0} max={255} step={1} value={rgba.r} onChange={onChangeR} tabIndex={-1} />
        <NumberInput min={0} max={255} step={1} value={rgba.r} onChange={onChangeR} tabIndex={2} />
      </div>
      <div css={groupStyle}>
        <SupportingText size="16px">
          G
        </SupportingText>
        <RangeInput min={0} max={255} step={1} value={rgba.g} onChange={onChangeG} tabIndex={-1} />
        <NumberInput min={0} max={255} step={1} value={rgba.g} onChange={onChangeG} tabIndex={3} />
      </div>
      <div css={groupStyle}>
        <SupportingText size="16px">
          B
        </SupportingText>
        <RangeInput min={0} max={255} step={1} value={rgba.b} onChange={onChangeB} tabIndex={-1} />
        <NumberInput min={0} max={255} step={1} value={rgba.b} onChange={onChangeB} tabIndex={4} />
      </div>
      <div css={groupStyle}>
        <SupportingText size="16px">
          A
        </SupportingText>
        <RangeInput min={0} max={1} step={0.01} value={rgba.a} onChange={onChangeA} tabIndex={-1} />
        <NumberInput min={0} max={1} step={0.01} value={rgba.a} onChange={onChangeA} tabIndex={5} />
      </div>
      <div css={groupStyle}>
        <SupportingText size="13px">
          RGB
        </SupportingText>
        <TextInput value={rgbText} onChange={onRgbTextChange} tabIndex={6} />
        <CopyButton text={rgbText} />
      </div>
      <div css={groupStyle}>
        <SupportingText size="13px">
          RGBA
        </SupportingText>
        <TextInput value={rgbaText} onChange={onRgbaTextChange} tabIndex={7} />
        <CopyButton text={rgbaText} />
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

export default ConverterRGBA