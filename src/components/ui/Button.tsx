import React from 'react'
import { css } from '@emotion/react'

type Props = React.ComponentProps<"button"> & {
  children: React.ReactNode,
  style: "primary" | "secondary"
}

const Button: React.FC<Props> = ({ children, style, ...props }) => {

  return (
    <button {...props} tabIndex={-1} css={() => buttonStyle(style)}>
      {children}
    </button>
  )
}

const buttonStyle = (style: "primary" | "secondary") => css`
  min-width: 60px;
  min-height: 30px;
  padding: 0;
  text-align: center;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  color: ${style === "primary" ? "#fff" : "#666"};
  background-color: ${style === "primary" ? "#335cff" : "#e6ebff"};
`

export default Button