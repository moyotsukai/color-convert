import { HSVA, RGBA } from '../types/Colors.type'

export const toRgbFromHsva = (hsv: HSVA): RGBA => {
  const h = hsv.h
  const a = hsv.a

  const maxValue = hsv.v / 100 * 255
  if (maxValue === 0) {
    return { r: 0, g: 0, b: 0, a: a }
  }
  const minValue = maxValue - (hsv.s / 100 * maxValue)

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