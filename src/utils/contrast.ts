import { RGBA } from "../types/Colors.type";

export const blendRgba = (fg: RGBA, bg: RGBA): RGBA => {
  const a = fg.a;
  return {
    r: fg.r * a + bg.r * (1 - a),
    g: fg.g * a + bg.g * (1 - a),
    b: fg.b * a + bg.b * (1 - a),
    a: 1,
  };
};

const toRelativeLuminance = (rgba: RGBA): number => {
  const [r, g, b] = [rgba.r, rgba.g, rgba.b].map((value) => {
    const sRgb = value / 255;
    return sRgb <= 0.03928 ? sRgb / 12.92 : Math.pow((sRgb + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

export const toContrastRatio = (color1: RGBA, color2: RGBA): number => {
  const l1 = toRelativeLuminance(color1);
  const l2 = toRelativeLuminance(color2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
};
