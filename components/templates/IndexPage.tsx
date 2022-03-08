import React from 'react'
import { css } from '@emotion/react'

const IndexPage: React.FC = () => {
  return (
    <div css={layoutStyle}>
      Hello.
    </div>
  )
}

const layoutStyle = css`
  min-height: 100vh;
`

export default IndexPage