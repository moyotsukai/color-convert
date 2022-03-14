import { HSLA, RGBA } from '../types/Colors.type'

// export const toHslaFromRgb = (rgba: RGBA): HSLA => {
//   const maxValue = Math.max(rgba.r, rgba.g, rgba.b)
//   const minValue = Math.min(rgba.r, rgba.g, rgba.b)

  // const hue = () => {
  //   if (maxValue - minValue === 0) {
  //     return 0
  //   }

  //   if (maxValue === rgba.r) {
  //     const h = 60 * ((rgba.g - rgba.b) / (maxValue - minValue))
  //     return h < 0 ? h + 360 : h
  //   }
  //   if (maxValue === rgba.g) {
  //     const h = 60 * ((rgba.b - rgba.r) / (maxValue - minValue)) + 120
  //     return h < 0 ? h + 360 : h
  //   }
  //   if (maxValue === rgba.b) {
  //     const h = 60 * ((rgba.r - rgba.g) / (maxValue - minValue)) + 240
  //     return h < 0 ? h + 360 : h
  //   }
  // }

  // const saturation = () => {
  //   if (maxValue === 0) { return 0 }
  //   return (maxValue - minValue) / maxValue * 100
  // }

  // const value = () => {
  //   return maxValue / 255 * 100
  // }

  // const h = Math.round(hue())
  // const s = Math.round(saturation())
  // const v = Math.round(value())

  // return { h: h, s: s, l: v, a: rgba.a }
// }