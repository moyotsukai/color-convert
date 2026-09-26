import React from "react";
import { css } from "@emotion/react";
import { useSharedRgbaValue } from "../../context/RgbaContext";
import { useBgRgbaValue } from "../../context/BgRgbaContext";
import { blendRgba, toContrastRatio } from "../../utils/contrast";
import SupportingText from "../ui/SupportingText";
import CheckIcon from "../icons/CheckIcon";
import CloseIcon from "../icons/CloseIcon";

type Criterion = {
  label: string;
  subLabel?: string;
  aa: number;
  aaa: number | null;
};

const CRITERIA: Criterion[] = [
  { label: "Text", aa: 4.5, aaa: 7 },
  { label: "Text (24px+)", subLabel: "Text (bold, 18.7px+)", aa: 3, aaa: 4.5 },
  { label: "Graphical Objects", aa: 3, aaa: null },
];

const ContrastChecker: React.FC = () => {
  const sharedRgba = useSharedRgbaValue();
  const bgRgba = useBgRgbaValue();

  const opaqueFg = blendRgba(sharedRgba, bgRgba);
  const ratio = toContrastRatio(opaqueFg, bgRgba);
  const ratioText = (Math.floor(ratio * 100) / 100).toFixed(2);

  return (
    <div css={containerStyle}>
      <div css={ratioGroupStyle}>
        <SupportingText size="13px">Contrast</SupportingText>
        <span css={ratioStyle}>{ratioText} : 1</span>
      </div>
      <div css={headerGroupStyle}>
        <div css={labelCellStyle} />
        <div css={headerCellStyle}>
          <SupportingText size="13px">AA</SupportingText>
        </div>
        <div css={headerCellStyle}>
          <SupportingText size="13px">AAA</SupportingText>
        </div>
      </div>
      {CRITERIA.map((criterion) => (
        <div css={groupStyle} key={criterion.label}>
          <div css={labelCellStyle}>
            <SupportingText size="16px">{criterion.label}</SupportingText>
            {criterion.subLabel && (
              <SupportingText size="16px">{criterion.subLabel}</SupportingText>
            )}
          </div>
          <div css={resultCellStyle}>
            <Result isPass={ratio >= criterion.aa} />
          </div>
          <div css={resultCellStyle}>
            {criterion.aaa === null ? (
              <SupportingText size="16px">―</SupportingText>
            ) : (
              <Result isPass={ratio >= criterion.aaa} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const Result: React.FC<{ isPass: boolean }> = ({ isPass }) => {
  return (
    <span css={resultStyle}>
      <span css={() => resultIconStyle(isPass)}>
        {isPass ? <CheckIcon size={16} /> : <CloseIcon size={16} />}
      </span>
      {isPass ? "Pass" : "Fail"}
    </span>
  );
};

const containerStyle = css`
  margin: 30px 25px;
`;
const groupStyle = css`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  min-height: 42px;
  padding: 1px 0;
  & > :last-child {
    margin-left: 6px;
  }
`;
const headerGroupStyle = css`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  min-height: 24px;
  & > :last-child {
    margin-left: 6px;
  }
`;
const ratioGroupStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 36px;
  margin-bottom: 8px;
`;
const ratioStyle = css`
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;
const labelCellStyle = css`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
const headerCellStyle = css`
  width: 64px;
  text-align: center;
`;
const resultCellStyle = css`
  width: 64px;
  display: flex;
  justify-content: center;
`;
const resultStyle = css`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  font-size: 16px;
  color: #252526;
`;
const resultIconStyle = (isPass: boolean) => css`
  display: inline-flex;
  color: ${isPass ? "#1f9d55" : "#e5484d"};
`;

export default ContrastChecker;
