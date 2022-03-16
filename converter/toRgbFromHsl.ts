import { HSLA, RGBA } from '../types/Colors.type'

export const toRgbFromHsla = (hsla: HSLA): RGBA => {
  const h = hsla.h
  const s = hsla.s
  const l = hsla.l
  const a = hsla.a

  const maximum = () => {
    if (l < 50) {
      return (l + l * (s / 100)) / 100 * 255
    } else {
      return (l + (100 - l) * (s / 100)) / 100 * 255
    }
  }

  const minimum = () => {
    if (l < 50) {
      return (l - l * (s / 100)) / 100 * 255
    } else {
      return (l - (100 - l) * (s / 100)) / 100 * 255
    }
  }

  const maxValue = maximum()
  const minValue = minimum()

  if (h >= 0 && h < 60) {
    const r = maxValue
    const g = (h / 60) * (maxValue - minValue) + minValue
    const b = minValue
    return { r: Math.round(r), g: Math.round(g), b: Math.round(b), a: a }
  }
  if (h >= 60 && h < 120) {
    const r = ((120 - h) / 60) * (maxValue - minValue) + minValue
    const g = maxValue
    const b = minValue
    return { r: Math.round(r), g: Math.round(g), b: Math.round(b), a: a }
  }
  if (h >= 120 && h < 180) {
    const r = minValue
    const g = maxValue
    const b = ((h - 120) / 60) * (maxValue - minValue) + minValue
    return { r: Math.round(r), g: Math.round(g), b: Math.round(b), a: a }
  }
  if (h >= 180 && h < 240) {
    const r = minValue
    const g = ((240 - h) / 60) * (maxValue - minValue) + minValue
    const b = maxValue
    return { r: Math.round(r), g: Math.round(g), b: Math.round(b), a: a }
  }
  if (h >= 240 && h < 300) {
    const r = ((h - 240) / 60) * (maxValue - minValue) + minValue
    const g = minValue
    const b = maxValue
    return { r: Math.round(r), g: Math.round(g), b: Math.round(b), a: a }
  }
  if (h >= 300 && h <= 360) {
    const r = maxValue
    const g = minValue
    const b = ((360 - h) / 60) * (maxValue - minValue) + minValue
    return { r: Math.round(r), g: Math.round(g), b: Math.round(b), a: a }
  }

  return { r: 0, g: 0, b: 0, a: 1 }
}