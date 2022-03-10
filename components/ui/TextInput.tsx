import React from 'react'
import { css } from '@emotion/react'

type Props = {
  value: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onEnterKey?: () => void
  onBlur?: () => void,
  tabIndex?: number
}

const TextInput: React.FC<Props> = (props) => {
  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select()
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      props.onEnterKey()
    }
  }

  return (
    <input
      type="text"
      value={props.value}
      onChange={props.onChange}
      tabIndex={props.tabIndex}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      onBlur={props.onBlur}
      css={inputStyle}
    />
  )
}

const inputStyle = css`
  outline: none;
  border: solid 2px #e6ebff;
  width: 170px;
  height: 30px;
  font-size: 16px;
  border-radius: 3px;
  margin: 2px 3px;

  &:focus {
    border: solid 2px #3363ff;
  }
`

export default TextInput