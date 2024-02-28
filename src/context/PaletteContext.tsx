import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'
import { RGBA } from '../types/Colors.type'

type Palette = RGBA[]

const defaultPaletteValue: Palette = []

const paletteValueContext = createContext<Palette>(defaultPaletteValue)

const paletteDispatchContext = createContext<Dispatch<SetStateAction<Palette>>>(() => undefined)

type Props = {
  children: React.ReactNode
}

export const PaletteContextProvider: React.FC<Props> = (props) => {

  const [palette, setPalette] = useState<Palette>(defaultPaletteValue)

  return (
    <paletteValueContext.Provider value={palette}>
      <paletteDispatchContext.Provider value={setPalette}>
        {props.children}
      </paletteDispatchContext.Provider>
    </paletteValueContext.Provider>
  )
}

export const usePaletteValue = () => {
  return useContext(paletteValueContext)
}

export const useSetPalette = () => {
  return useContext(paletteDispatchContext)
}