import React from 'react'
import { RgbaProvider } from '../components/Context/RgbaContext'
import IndexPage from '../components/templates/IndexPage'

const Index: React.FC = () => {
  return (
    <RgbaProvider>
      <IndexPage />
    </RgbaProvider>
  )
}

export default Index