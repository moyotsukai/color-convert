import { HSVA, RGBA } from '../types/Colors.type'

export const toHsvaFromRgb = (rgba: RGBA): HSVA => {
  const maxValue = Math.max(rgba.r, rgba.g, rgba.b)
  const minValue = Math.min(rgba.r, rgba.g, rgba.b)

  const hue = () => {
    if (maxValue - minValue === 0) {
      return 0
    }
    if (maxValue === rgba.r) {
      return 60 * ((rgba.g - rgba.b) / (maxValue - minValue))
    }
    if (maxValue === rgba.g) {
      return 60 * ((rgba.b - rgba.r) / (maxValue - minValue)) + 120
    }
    if (maxValue === rgba.b) {
      return 60 * ((rgba.r - rgba.g) / (maxValue - minValue)) + 240
    }
  }

  const saturation = () => {
    if (maxValue === 0) { return 0 }
    return (maxValue - minValue) / maxValue * 100
  }

  const value = () => {
    return maxValue / 255 * 100
  }

  const h = Math.round(hue())
  const s = Math.round(saturation())
  const v = Math.round(value())

  return { h: h, s: s, v: v, a: rgba.a }
}