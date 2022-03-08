export type ColorTypes = "Rgba" | "Hsva"

export type RGBA = {
  r: number,
  g: number,
  b: number,
  a: number,
  editedFrom?: ColorTypes
}

export type HSVA = {
  h: number,
  s: number,
  v: number,
  a: number
}