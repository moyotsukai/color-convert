import React from 'react'
import { RgbaProvider } from '../context/RgbaContext'
import IndexPage from '../components/templates/IndexPage'
import { BgRgbaProvider } from '../context/BgRgbaContext'

const Index: React.FC = () => {
  return (
    <RgbaProvider>
      <BgRgbaProvider>
        <IndexPage />
      </BgRgbaProvider>
    </RgbaProvider>
  )
}

export default Index