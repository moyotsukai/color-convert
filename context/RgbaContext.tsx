import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'
import { RGBA } from '../types/Colors.type'

const defaultSharedRgbaState: RGBA = { r: 0, g: 0, b: 0, a: 1 }

const SharedRgbaValueContext = createContext<RGBA>(defaultSharedRgbaState)

const SharedRgbaDispatchContext = createContext<Dispatch<SetStateAction<RGBA>>>(() => undefined)

type Props = {
  children: React.ReactNode
}

export const SharedRgbaContextProvider: React.FC<Props> = (props) => {
  const [sharedRgb, setSharedRgb] = useState<RGBA>(defaultSharedRgbaState)

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