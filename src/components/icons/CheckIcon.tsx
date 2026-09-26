import React from "react";
import { css } from "@emotion/react";

type Props = {
  size?: number;
};

const CheckIcon: React.FC<Props> = ({ size = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size + "px"}
      height={size + "px"}
      viewBox="0 0 24 24"
      css={iconStyle}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" stroke="currentColor" strokeWidth={1.2} strokeLinejoin="round" />
    </svg>
  );
};

const iconStyle = css`
  fill: currentColor;
  vertical-align: middle;
`;

export default CheckIcon;
