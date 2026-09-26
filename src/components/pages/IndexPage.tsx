import React from "react";
import { css } from "@emotion/react";
import Spacer from "../ui/Spacer";
import ConverterRGBA from "../features/ConverterRGBA";
import ConverterHSV from "../features/ConverterHSV";
import ConverterHex from "../features/ConverterHex";
import ConverterBgHex from "../features/ConverterBgHex";
import { useBgRgbaValue } from "../../context/BgRgbaContext";
import ConverterHSL from "../features/ConverterHSL";
import ConverterCMYK from "../features/ConverterCMYK";
import Seo from "../common/Seo";
import { useSharedRgbaValue } from "../../context/RgbaContext";
import Palette from "../features/Palette";
import ContrastChecker from "../features/ContrastChecker";
import CircleIcon from "../icons/CircleIcon";
import HeartFilledIcon from "../icons/HeartFilledIcon";
import BellIcon from "../icons/BellIcon";
import PlayIcon from "../icons/PlayIcon";
import StarIcon from "../icons/StarIcon";

const IndexPage: React.FC = () => {
  const sharedRgba = useSharedRgbaValue();
  const bgRgba = useBgRgbaValue();

  return (
    <div css={layoutStyle}>
      <Seo />
      <div
        style={{
          backgroundColor: `rgba(${bgRgba.r}, ${bgRgba.g}, ${bgRgba.b}, ${bgRgba.a}`,
        }}
        css={colorBackgroundStyle}
      >
        <div
          style={{
            backgroundColor: `rgba(${sharedRgba.r}, ${sharedRgba.g}, ${sharedRgba.b}, ${sharedRgba.a})`,
          }}
          css={colorBlockStyle}
        />
        <Spacer x={20} />
        <div
          style={{
            color: `rgba(${sharedRgba.r}, ${sharedRgba.g}, ${sharedRgba.b}, ${sharedRgba.a})`,
          }}
          css={sampleContainerStyle}
        >
          <p css={normalTextStyle}>Normal Text</p>
          <p css={largeTextStyle}>Large Text</p>
          <div css={iconRowStyle}>
            <CircleIcon size={24} />
            <HeartFilledIcon size={24} />
            <StarIcon size={24} />
            <PlayIcon size={24} />
            <BellIcon size={24} />
          </div>
        </div>
        <ConverterBgHex />
      </div>

      <div css={converterContainerStyle}>
        <ConverterHex />
        <ConverterRGBA />
        <ConverterHSL />
        <ConverterHSV />
        <ConverterCMYK />
        <ContrastChecker />
        <Palette />
      </div>
    </div>
  );
};

const layoutStyle = css`
  min-height: 100vh;
  background-color: #f5faff;
  padding: 15px;
`;
const colorBackgroundStyle = css`
  display: block;
  height: 30vh;
  min-width: 160px;
  min-height: 160px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px 40px 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  position: relative;
  @media (max-width: 500px) {
    flex-wrap: wrap;
  }
`;
const colorBlockStyle = css`
  width: 15vh;
  height: 15vh;
  min-width: 120px;
  min-height: 120px;
  border-radius: 6px;
`;
const sampleContainerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;
const largeTextStyle = css`
  margin: 0;
  font-size: 24px;
  color: inherit;
  line-height: 1.3;
`;
const iconRowStyle = css`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;
const normalTextStyle = css`
  margin: 0;
  font-size: 16px;
  color: inherit;
  line-height: 1.5;
`;const converterContainerStyle = css`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(5, 330px);
  justify-content: center;

  @media (max-width: 1650px) {
    grid-template-columns: repeat(4, 330px);
  }

  @media (max-width: 1320px) {
    grid-template-columns: repeat(3, 330px);
  }

  @media (max-width: 990px) {
    grid-template-columns: repeat(2, 330px);
  }

  @media (max-width: 660px) {
    grid-template-columns: repeat(1, 330px);
  }
`;

export default IndexPage;
