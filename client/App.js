import React from 'react'
import Routes from './routes'
import { Header, Footer } from './components'

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Routes />
      </div>
      <Footer />
    </div>
  )
}

export default App
