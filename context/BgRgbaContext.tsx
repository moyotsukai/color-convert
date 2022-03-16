import React, { createContext, useContext, useState } from 'react'
import { RGBA } from '../types/Colors.type'

type BgRgbaContext = {
  bgRgba: RGBA,
  setBgRgba: (bgRgba: RGBA) => void
}

const defaultBgRgbaContext: BgRgbaContext = {
  bgRgba: { r: 255, g: 255, b: 255, a: 1 },
  setBgRgba: () => { }
}

const BgRgbaContext = createContext<BgRgbaContext>(defaultBgRgbaContext)

export const useBgRgbaContext = () => {
  return useContext(BgRgbaContext)
}

type Props = {
  children: React.ReactNode
}

export const BgRgbaProvider: React.FC<Props> = (props) => {
  const [bgRgba, setBgRgba] = useState<RGBA>({ r: 255, g: 255, b: 255, a: 1 })

  const value: BgRgbaContext = {
    bgRgba,
    setBgRgba
  }

  return (
    <BgRgbaContext.Provider value={value}>
      {props.children}
    </BgRgbaContext.Provider>
  )
}