import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'
import { RGBA } from '../types/Colors.type'

const defaultBgRgbaState: RGBA = { r: 255, g: 255, b: 255, a: 1 }

const BgRgbaValueContext = createContext<RGBA>(defaultBgRgbaState)

const BgRgbaDispatchContext = createContext<Dispatch<SetStateAction<RGBA>>>(() => undefined)

type Props = {
  children: React.ReactNode
}

export const BgRgbaContextProvider: React.FC<Props> = (props) => {
  const [bgRgb, setBgRgb] = useState<RGBA>(defaultBgRgbaState)

  return (
    <BgRgbaValueContext.Provider value={bgRgb}>
      <BgRgbaDispatchContext.Provider value={setBgRgb}>
        {props.children}
      </BgRgbaDispatchContext.Provider>
    </BgRgbaValueContext.Provider>
  )
}

export const useBgRgbaValue = () => {
  return useContext(BgRgbaValueContext)
}

export const useSetBgRgba = () => {
  return useContext(BgRgbaDispatchContext)
}