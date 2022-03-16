import React, { createContext, useContext, useState } from 'react'
import { RGBA } from '../types/Colors.type'

type RgbaContext = {
  sharedRgba: RGBA,
  setSharedRgba: (sharedRgba: RGBA) => void
}

const defaultRgbaContext: RgbaContext = {
  sharedRgba: { r: 0, g: 0, b: 0, a: 1 },
  setSharedRgba: () => { }
}

const RgbaContext = createContext<RgbaContext>(defaultRgbaContext)

export const useRgbaContext = () => {
  return useContext(RgbaContext)
}

type Props = {
  children: React.ReactNode
}

export const RgbaProvider: React.FC<Props> = (props) => {
  const [sharedRgba, setSharedRgba] = useState<RGBA>({ r: 0, g: 0, b: 0, a: 1 })

  const value: RgbaContext = {
    sharedRgba,
    setSharedRgba
  }

  return (
    <RgbaContext.Provider value={value}>
      {props.children}
    </RgbaContext.Provider>
  )
}