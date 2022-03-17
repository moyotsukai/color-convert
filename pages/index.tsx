import React from 'react'
import IndexPage from '../components/templates/IndexPage'
import { BgRgbaContextProvider } from '../context/BgRgbaContext'
import { SharedRgbaContextProvider } from '../context/RgbaContext'

const Index: React.FC = () => {
  return (
    <SharedRgbaContextProvider>
      <BgRgbaContextProvider>
        <IndexPage />
      </BgRgbaContextProvider>
    </SharedRgbaContextProvider>
  )
}

export default Index