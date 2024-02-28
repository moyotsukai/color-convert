import { RGBA } from "../types/Colors.type"

export const toHexText = (rgba: RGBA): string => {
  const rgbArray = [rgba.r, rgba.g, rgba.b]
  const converted = rgbArray.map((item) => {
    const stringified = item.toString(16)
    return stringified.length === 1 ? "0" + stringified : stringified
  })

  return converted.join("")
}