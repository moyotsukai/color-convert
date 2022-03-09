import React from 'react'
import { css } from '@emotion/react'

type Props = {
  size: "13px" | "16px"
  children: React.ReactNode
}

const SupportingText: React.FC<Props> = (props) => {
  return (
    <span css={textStyle}>
      {props.children}
    </span>
  )
}

const textStyle = (size: string) => css`
  font-size: ${size};
  color: #4c4f59;
`

export default SupportingText