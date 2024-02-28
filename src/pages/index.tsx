import React from 'react'
import IndexPage from '../components/pages/IndexPage'
import { BgRgbaContextProvider } from '../context/BgRgbaContext'
import { SharedRgbaContextProvider } from '../context/RgbaContext'
import { PaletteContextProvider } from '../context/PaletteContext'

const Index: React.FC = () => {
  return (
    <SharedRgbaContextProvider>
      <BgRgbaContextProvider>
        <PaletteContextProvider>
          <IndexPage />
        </PaletteContextProvider>
      </BgRgbaContextProvider>
    </SharedRgbaContextProvider>
  )
}

export default Index