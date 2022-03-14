import React from 'react'
import { css } from '@emotion/react'
import profile from '../../public/profile.jpeg'
import Image from 'next/image'

const Header: React.FC = () => {
  return (
    <header css={headerStyle}>
      <a href="https://moyotsukai.dev" css={linkStyle}>
        <div css={imageStyle}>
          <Image src={profile} />
        </div>
        <span css={spanStyle}>
          Moyotsukai
        </span>
      </a>
    </header>
  )
}

const headerStyle = css`
  background-color: #fff;
  position: relative;
  box-shadow: 0 2px 5px 0 rgba(51, 99, 255, 0.1);
  font-size: 18px;
  padding: 10px 20px;
  display: flex;
`
const linkStyle = css`
  display: inline-block;
  display: flex;
  align-items: center;
  color: #000;
`
const imageStyle = css`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  overflow: hidden;
`
const spanStyle = css`
  margin: 0 5px
`

export default Header