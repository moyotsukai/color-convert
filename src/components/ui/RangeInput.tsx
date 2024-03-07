import React from 'react'
import { css } from '@emotion/react'

type Props = {
  min: number,
  max: number,
  step: number,
  value: number,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  tabIndex?: number,
  colors?: string
}

const RangeInput: React.FC<Props> = ({ min, max, step, value, onChange, tabIndex, colors }) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChange}
      tabIndex={tabIndex}
      css={() => inputStyle(colors)}
    />
  )
}

const inputStyle = (colors: string) => css`
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  outline: none;
  width: 160px;
  height: 18px;
  border-radius: 9px;
  margin: 12px 10px;
  transition: 0.2s ease-in-out;
  background: -moz-linear-gradient(0deg, ${colors});
  background: -webkit-linear-gradient(0deg, ${colors});
  background: linear-gradient(90deg, ${colors});

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    outline: 2px solid #3363ff;
    background-color: #fff;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    box-shadow: 0px 3px 6px 0px rgba(0, 60, 255, 0.1);
    border: none;
  }

  &::-moz-range-thumb {
    outline: 2px solid #3363ff;
    background-color: #fff;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    box-shadow: 0px 3px 6px 0px rgba(0, 60, 255, 0.1);
    border: none;
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &:active::-webkit-slider-thumb {
    outline: 2px solid #3363ff;
    background-color: #fff;
    box-shadow: 0px 4.5px 9px -2px rgba(0, 60, 255, 0.15);
    transform: scale(0.9);
  }
`

export default RangeInput