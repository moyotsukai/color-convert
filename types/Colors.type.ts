export type ColorTypes = "Hex" | "Rgba" | "Hsv"

export type RGBA = {
  r: number,
  g: number,
  b: number,
  a: number,
  editedFrom?: ColorTypes
}

export type HSV = {
  h: number,
  s: number,
  v: number
}

export type HSVA = {
  h: number,
  s: number,
  v: number,
  a: number
}