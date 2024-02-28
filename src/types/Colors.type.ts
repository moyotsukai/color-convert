export type ColorTypes = "Hex" | "Rgba" | "Hsla" | "Hsv" | "Cmyk"

export type RGBA = {
  r: number,
  g: number,
  b: number,
  a: number,
  editedFrom?: ColorTypes
}

export type HSLA = {
  h: number,
  s: number,
  l: number,
  a: number
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

export type CMYK = {
  c: number,
  m: number,
  y: number,
  k: number
}

export type CMYKA = {
  c: number,
  m: number,
  y: number,
  k: number,
  a: number
}
