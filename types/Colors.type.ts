export type ColorTypes = "Hex" | "Rgba" | "Hsv" | "Hsl" | "Cmyk"

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

export type HSL = {
  h: number,
  s: number,
  l: number
}

export type HSLA = {
  h: number,
  s: number,
  l: number,
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
