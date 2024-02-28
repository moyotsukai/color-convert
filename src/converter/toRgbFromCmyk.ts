import { CMYKA, RGBA } from '../types/Colors.type'

export const toRgbFromCmyka = (cmyka: CMYKA): RGBA => {
  const c = cmyka.c
  const m = cmyka.m
  const y = cmyka.y
  const k = cmyka.k

  const r = 255 * (1 - c / 100) * (1 - k / 100)
  const g = 255 * (1 - m / 100) * (1 - k / 100)
  const b = 255 * (1 - y / 100) * (1 - k / 100)

  return { r: Math.round(r), g: Math.round(g), b: Math.round(b), a: cmyka.a }
}