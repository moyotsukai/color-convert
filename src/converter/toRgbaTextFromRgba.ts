import { RGBA } from "../types/Colors.type"

export const toRgbText = (rgba: RGBA): string => {
  return `${rgba.r}, ${rgba.g}, ${rgba.b}`
}

export const toRgbaText = (rgba: RGBA): string => {
  return `${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a}`
}