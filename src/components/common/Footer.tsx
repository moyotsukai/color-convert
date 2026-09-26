import React from "react";
import { css } from "@emotion/react";

const Footer: React.FC = () => {
  return (
    <footer css={footerStyle}>
      <span css={copyStyle}>&copy; 2022 Shintaro Aoi</span>
    </footer>
  );
};

const footerStyle = css`
  padding: 10px 0;
  background-color: #fff;
  text-align: center;
`;
const copyStyle = css`
  padding: 0 12px;
  font-size: 14px;
  color: #666;
`;
const linkStyle = css`
  padding: 0 8px;
  font-size: 14px;
  color: #595959;
  text-decoration: underline;
  &:hover {
    color: #3363ff;
  }
  transition: all 0.2s ease-out;
`;

export default Footer;
