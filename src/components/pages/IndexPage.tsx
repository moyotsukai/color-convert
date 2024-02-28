import React from 'react'
import { css } from '@emotion/react'
import { RGBA } from '../../types/Colors.type'
import Spacer from '../ui/Spacer'
import ConverterRGBA from '../features/ConverterRGBA'
import ConverterHSV from '../features/ConverterHSV'
import ConverterHex from '../features/ConverterHex'
import ConverterBgHex from '../features/ConverterBgHex'
import { useBgRgbaValue } from '../../context/BgRgbaContext'
import ConverterHSL from '../features/ConverterHSL'
import ConverterCMYK from '../features/ConverterCMYK'
import Seo from '../common/Seo'
import { useSharedRgbaValue } from '../../context/RgbaContext'

const IndexPage: React.FC = () => {
  const sharedRgba = useSharedRgbaValue()
  const bgRgba = useBgRgbaValue()

  return (
    <div css={layoutStyle}>
      <Seo />
      <div css={() => colorBackgroundStyle(bgRgba)} >
        <div css={() => colorBlockStyle(sharedRgba)} />
        <Spacer x={20} />
        <p css={() => colorTextStyle(sharedRgba)} >
          Color Converter
        </p>
        <ConverterBgHex />
      </div>

      <div css={converterContainerStyle}>
        <ConverterHex />
        <ConverterRGBA />
        <ConverterHSL />
        <ConverterHSV />
        <ConverterCMYK />
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px 40px 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  position: relative;

  @media(max-width: 500px) {
    flex-wrap: wrap;
  }
`
const colorBlockStyle = (rgba: RGBA) => css`
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
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(5, 330px);
  justify-content: center;

  @media(max-width: 1650px) {
    grid-template-columns: repeat(4, 330px);
  }

  @media(max-width: 1320px) {
    grid-template-columns: repeat(3, 330px);
  }

  @media(max-width: 990px) {
    grid-template-columns: repeat(2, 330px);
  }

  @media(max-width: 660px) {
    grid-template-columns: repeat(1, 330px);
  }
`

export default IndexPage