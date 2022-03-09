import React from 'react'
import { css } from '@emotion/react'

type Props = {
  min: number,
  max: number,
  step: number,
  value: number,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  tabIndex?: number
}

const RangeInput: React.FC<Props> = (props) => {
  return (
    <input
      type="range"
      min={props.min}
      max={props.max}
      step={props.step}
      value={props.value}
      onChange={props.onChange}
      tabIndex={props.tabIndex}
      css={inputStyle} />
  )
}

const inputStyle = css`
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  outline: none;
  background-color: #aabbf2;
  width: 150px;
  height: 6px;
  border-radius: 3px;
  margin: 14px 10px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: #3363ff;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    box-shadow: 0px 3px 6px 0px rgba(0, 60, 255, 0.1);
    border: none;
  }

  &::-moz-range-thumb {
    background-color: #3363ff;
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
    background-color: #4d76ff;
    box-shadow: 0px 4.5px 9px -2px rgba(0, 60, 255, 0.15);
  }
`

export default RangeInput