import React from 'react'
import { css } from '@emotion/react'
import { RGBA } from '../../types/Colors.type'
import Spacer from '../ui/Spacer'
import ConverterRGBA from '../functional/ConverterRGBA'
import { useRgbaContext } from '../Context/RgbaContext'
import ConverterHSV from '../functional/ConverterHSV'

const IndexPage: React.FC = () => {
  const { rgba } = useRgbaContext()

  return (
    <div css={layoutStyle}>
      <div css={() => colorBackgroundStyle({ r: 255, g: 255, b: 255, a: 1 })} >
        <div css={() => colorObjectStyle(rgba)} />
        <Spacer x={20} />
        <p css={() => colorTextStyle(rgba)} >
          Color Converter
        </p>
      </div>

      <div css={converterContainerStyle}>
        <ConverterRGBA />
        <ConverterHSV />
      </div>
    </div>
  )
}

const layoutStyle = css`
  min-height: 100vh;
  background-color: #f2f5ff;
  padding: 15px;
`
const colorBackgroundStyle = (rgba: RGBA) => css`
  background-color: rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a});
  display: block;
  height: 30vh;
  min-width: 160px;
  min-height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  border-radius: 12px;
`
const colorObjectStyle = (rgba: RGBA) => css`
  background-color: rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a});
  width: 15vh;
  height: 15vh;
  min-width: 120px;
  min-height: 120px;
  border-radius: 6px;
`
const colorTextStyle = (rgba: RGBA) => css`
  color: rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a});
  font-size: 28px;
`
const converterContainerStyle = css`
  display: flex;
`
export default IndexPage