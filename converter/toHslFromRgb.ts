import { HSLA, RGBA } from '../types/Colors.type'

export const toHslaFromRgb = (rgba: RGBA): HSLA => {
  const maxValue = Math.max(rgba.r, rgba.g, rgba.b)
  const minValue = Math.min(rgba.r, rgba.g, rgba.b)

  const hue = () => {
    if (maxValue - minValue === 0) {
      return 0
    }

    if (maxValue === rgba.r) {
      const h = 60 * ((rgba.g - rgba.b) / (maxValue - minValue))
      return h < 0 ? h + 360 : h
    }
    if (maxValue === rgba.g) {
      const h = 60 * ((rgba.b - rgba.r) / (maxValue - minValue)) + 120
      return h < 0 ? h + 360 : h
    }
    if (maxValue === rgba.b) {
      const h = 60 * ((rgba.r - rgba.g) / (maxValue - minValue)) + 240
      return h < 0 ? h + 360 : h
    }
  }

  const saturation = () => {
    const cnt = (maxValue + minValue) / 2
    if (cnt < 128) {
      if (maxValue + minValue === 0) { return 0 }
      return (maxValue - minValue) / (maxValue + minValue) * 100
    } else {
      if (510 - maxValue - minValue === 0) { return 0 }
      return (maxValue - minValue) / (510 - maxValue - minValue) * 100
    }
  }

  const lightness = () => {
    return (maxValue + minValue) / 2 / 255 * 100
  }

  const h = Math.round(hue())
  const s = Math.round(saturation())
  const l = Math.round(lightness())

  return { h: h, s: s, l: l, a: rgba.a }
}