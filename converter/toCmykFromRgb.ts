import { CMYK, RGBA } from '../types/Colors.type'

export const toCmykFromRgb = (rgba: RGBA): CMYK => {
  const r = rgba.r
  const g = rgba.g
  const b = rgba.b

  const k = 1 - Math.max(r / 255, g / 255, b / 255)

  const cyan = () => {
    if (1 - k === 0) { return 0 }
    return (1 - r / 255 - k) / (1 - k) * 100
  }

  const magenta = () => {
    if (1 - k === 0) { return 0 }
    return (1 - g / 255 - k) / (1 - k) * 100
  }

  const yellow = () => {
    if (1 - k === 0) { return 0 }
    return (1 - b / 255 - k) / (1 - k) * 100
  }

  const black = () => {
    return k * 100
  }

  return { c: Math.round(cyan()), m: Math.round(magenta()), y: Math.round(yellow()), k: Math.round(black()) }
}