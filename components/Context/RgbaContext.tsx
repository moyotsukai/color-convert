import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'
import { RGBA } from '../../types/Colors.type'

type RgbaContext = {
  rgba: RGBA,
  setRgba: Dispatch<SetStateAction<RGBA>>
}

const defaultRgbaContext: RgbaContext = {
  rgba: { r: 0, g: 0, b: 0, a: 1 },
  setRgba: () => { }
}

const RgbaContext = createContext<RgbaContext>(defaultRgbaContext)

export const useRgbaContext = () => {
  return useContext(RgbaContext)
}

type Props = {
  children: React.ReactNode
}

export const RgbaProvider: React.FC<Props> = (props) => {
  const [rgba, setRgba] = useState<RGBA>({ r: 0, g: 0, b: 0, a: 1 })

  const value: RgbaContext = {
    rgba,
    setRgba
  }

  return (
    <RgbaContext.Provider value={value}>
      {props.children}
    </RgbaContext.Provider>
  )
}