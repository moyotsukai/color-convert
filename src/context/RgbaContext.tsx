import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'
import { RGBA } from '../types/Colors.type'

const defaultSharedRgbaValue: RGBA = { r: 255, g: 128, b: 149, a: 1 }

const SharedRgbaValueContext = createContext<RGBA>(defaultSharedRgbaValue)

const SharedRgbaDispatchContext = createContext<Dispatch<SetStateAction<RGBA>>>(() => undefined)

type Props = {
  children: React.ReactNode
}

export const SharedRgbaContextProvider: React.FC<Props> = (props) => {
  const [sharedRgb, setSharedRgb] = useState<RGBA>(defaultSharedRgbaValue)

  return (
    <SharedRgbaValueContext.Provider value={sharedRgb}>
      <SharedRgbaDispatchContext.Provider value={setSharedRgb}>
        {props.children}
      </SharedRgbaDispatchContext.Provider>
    </SharedRgbaValueContext.Provider>
  )
}

export const useSharedRgbaValue = () => {
  return useContext(SharedRgbaValueContext)
}

export const useSetSharedRgba = () => {
  return useContext(SharedRgbaDispatchContext)
}