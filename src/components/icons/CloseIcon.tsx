import React from "react";
import { css } from "@emotion/react";

type Props = {
  size?: number;
};

const CloseIcon: React.FC<Props> = ({ size = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size + "px"}
      height={size + "px"}
      viewBox="0 0 24 24"
      css={iconStyle}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" stroke="currentColor" strokeWidth={1.2} strokeLinejoin="round" />
    </svg>
  );
};

const iconStyle = css`
  fill: currentColor;
  vertical-align: middle;
`;

export default CloseIcon;
