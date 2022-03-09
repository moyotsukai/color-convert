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

const NumberInput: React.FC<Props> = (props) => {
  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select()
  }

  return (
    <input
      type="number"
      min={props.min}
      max={props.max}
      step={props.step}
      value={props.value}
      onChange={props.onChange}
      tabIndex={props.tabIndex}
      onFocus={onFocus}
      css={inputStyle} />
  )
}

const inputStyle = css`
  outline: none;
  border: solid 2px #e6ebff;
  width: 65px;
  height: 30px;
  font-size: 16px;
  border-radius: 3px;

  &:focus {
    border: solid 2px #3363ff;
  }
`

export default NumberInput