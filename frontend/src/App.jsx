import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="navbar">
        <div className="navbar-element">
          PC Distribution package-PKG
        </div>
        <div className="navbar-element">
          Browse all packages
        </div>
    </div>
    </>
  )
}

export default App
