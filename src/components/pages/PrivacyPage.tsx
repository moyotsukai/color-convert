import React from 'react'
import { css } from '@emotion/react'

const PrivacyPage: React.FC = () => {
  return (
    <div css={layoutStyle}>
      <div css={containerStyle}>
        <h1 css={titleStyle}>
          プライバシーポリシー
        </h1>

        <p css={textStyle}>
          運営者は、
          <a href="https://color.moyotsukai.dev" css={linkStyle}>https://color.moyotsukai.dev</a>
          で提供するサービス（以下、「本サービス」）のにおける、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」）を定めます。
        </p>

        <h2 css={subtitleStyle}>
          第１条（アクセス解析ツール）
        </h2>
        <ul>
          <p css={listStyle}>
            本サービスでは、アクセス解析のためGoogle アナリティクスを使用しています。
            Google アナリティクスはCookieを使用することでデータを収集しますが、トラフィックデータから個人が特定されることはありません。
            Google アナリティクスによるトラフィックデータの収集はブラウザの設定でCookieを無効にすることで拒否できます。
            詳しくは
            <a href="https://policies.google.com/" target="_blank" rel="noopener noreferrer" css={linkStyle}>Google ポリシーと規約</a>
            をご覧ください。
          </p>
        </ul>

        <h2 css={subtitleStyle}>
          第２条（プライバシーポリシーの変更）
        </h2>
        <ul>
          <li css={listStyle}>
            本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。
          </li>
          <li css={listStyle}>
            本サービスの運営者が別途定める場合を除いて、変更後のプライバシーポリシーは、本サイトに掲載したときから効力を生じるものとします。
          </li>
        </ul>
      </div>
    </div>
  )
}

const layoutStyle = css`
  min-height: 100vh;
  background-color: #f2f5ff;
  padding: 15px;
`
const containerStyle = css`
  max-width: 700px;
  margin: 0 auto;
`
const titleStyle = css`
  text-align: center;
  font-size: 22px;
`
const textStyle = css`
  font-size: 16px;
  color: #000;
  line-height: 1.7;
`
const linkStyle = css`
  padding: 0 8px;
  font-size: 16px;
  color: #000;
  text-decoration: underline;

  &:hover {
    color: #3363ff;
  }
`
const subtitleStyle = css`
  font-size: 20px;
`
const listStyle = css`
  list-style: decimal;
  margin-left: 25px;
  line-height: 1.7;
`

export default PrivacyPage