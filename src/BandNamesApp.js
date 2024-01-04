import React from 'react'
import { SocketProdiver } from './context/SocketContext'
import App from './Pages/HomePage'
import HomePage from './Pages/HomePage'

const BandNamesApp = () => {
  return (
    <SocketProdiver>
        <HomePage/>
    </SocketProdiver>
  )
}

export default BandNamesApp
