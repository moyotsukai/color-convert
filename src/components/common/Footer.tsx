import React from 'react'
import { css } from '@emotion/react'
import Link from 'next/link'
import OpenInNewIcon from '../icons/OpenInNewIcon'

const Footer: React.FC = () => {
  return (
    <footer css={footerStyle}>
      <span css={copyStyle}>
        &copy; 2022 Shintaro Aoi
      </span>

      <Link href="/privacy" css={linkStyle}>
        Privacy
      </Link>

      <a href="https://www.moyotsukai.dev/" target="_blank" rel="noopener noreferrer" css={linkStyle}>
        <span>
          Portfolio
        </span>
        <OpenInNewIcon size={14} />
      </a>
    </footer>
  )
}

const footerStyle = css`
  padding: 10px 0;
  background-color: #fff;
  text-align: center;
`
const copyStyle = css`
  padding: 0 12px;
  font-size: 14px;
  color: #999;
`
const linkStyle = css`
  padding: 0 8px;
  font-size: 14px;
  color: #595959;
  text-decoration: underline;

  &:hover {
    color: #3363ff;
  }
`

export default Footer