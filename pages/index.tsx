import React from 'react'
import { RgbaProvider } from '../context/RgbaContext'
import IndexPage from '../components/templates/IndexPage'

const Index: React.FC = () => {
  return (
    <RgbaProvider>
      <IndexPage />
    </RgbaProvider>
  )
}

export default Index