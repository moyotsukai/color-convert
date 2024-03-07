import React from 'react'
import { css } from '@emotion/react'
import { useSetSharedRgba, useSharedRgbaValue } from '../../context/RgbaContext'
import { RGBA } from '../../types/Colors.type'
import SupportingText from '../ui/SupportingText'
import { usePaletteValue, useSetPalette } from '../../context/PaletteContext'
import Button from '../ui/Button'
import Spacer from '../ui/Spacer'

const Palette: React.FC = () => {

  const [palette, setPalette] = [usePaletteValue(), useSetPalette()]
  const [sharedRgba, setSharedRgba] = [useSharedRgbaValue(), useSetSharedRgba()]
  const SPLIT_NUM = 8
  const paletteSplitted = new Array(Math.ceil(palette.length / SPLIT_NUM)).fill(0).map((_, i) => palette.slice(i * SPLIT_NUM, (i + 1) * SPLIT_NUM))

  const onClickAdd = () => {
    setPalette((prevValue) => {
      return [sharedRgba, ...prevValue]
    })
  }

  const onClickClear = () => {
    setPalette([])
  }

  const onClickColor = (color: RGBA) => {
    color.editedFrom = null
    setSharedRgba(color)
  }

  return (
    <div css={containerStyle}>
      <div css={groupStyle}>
        <SupportingText size="13px">
          Palette
        </SupportingText>
        <div css={spacerStyle} />
        <Button onClick={onClickAdd} style="primary">
          Add
        </Button>
        <Spacer x={6} />
        <Button onClick={onClickClear} style="secondary">
          Clear
        </Button>
      </div>
      <Spacer y={6} />
      {palette.length
        ? (
          <div css={groupStyle}>
            <table css={tableStyle}>
              {paletteSplitted.map((row, index) => (
                <tr css={rowStyle} key={index}>
                  {row.map((color, index) => (
                    <td css={cellStyle} key={index}>
                      <button
                        onClick={() => onClickColor(color)}
                        style={{ backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})` }}
                        css={() => colorButtonStyle(color === sharedRgba)}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </table>
          </div>
        )
        : (
          <p css={noColorTextStyle}>
            <SupportingText size="13px">
              No colors saved
            </SupportingText>
          </p>
        )
      }
    </div>
  )
}

const containerStyle = css`
  margin: 30px 25px;
`
const groupStyle = css`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  padding: 2px;
`
const spacerStyle = css`
  flex-grow: 1;
`
const tableStyle = css`
  border-collapse: collapse;
`
const rowStyle = css`
  border: none;
`
const cellStyle = css`
  margin: 0;
  padding: 0;
`
const colorButtonStyle = (isSelected: boolean) => css`
  cursor: pointer;
  width: 35px;
  height: 35px;
  border: none;
  margin: 0;
  padding: 0;
  border-radius: ${isSelected ? "17.5px" : "0"};
  &:hover {
    transform: scale(1.1);
    z-index: 999;
  }
  transition: 0.2s ease-in-out;
`
const noColorTextStyle = css`
  text-align: center;
`

export default Palette