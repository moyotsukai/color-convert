export type ColorTypes = "Hex" | "Rgba" | "Hsv" | "Hsl"

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

export type HSLA = {
  h: number,
  s: number,
  l: number,
  a: number
}