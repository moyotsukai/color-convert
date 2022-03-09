import React, { useState } from 'react'
import { css } from '@emotion/react'
import SupportingText from '../ui/SupportingText'

type Props = {
  text: string
}

const CopyButton: React.FC<Props> = (props) => {
  const [title, setTitle] = useState<"Copy" | "Copied">("Copy")

  const onClick = () => {
    navigator.clipboard?.writeText(props.text)
    setTitle("Copied")
    setTimeout(() => {
      setTitle("Copy")
    }, 1000)
  }

  return (
    <button onClick={onClick} tabIndex={-1} css={buttonStyle}>
      <SupportingText size="13px">
        {title}
      </SupportingText>
    </button>
  )
}

const buttonStyle = css`
  width: 60px;
  height: 30px;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  color: #666;
  background-color: #e6ebff;
`

export default CopyButton