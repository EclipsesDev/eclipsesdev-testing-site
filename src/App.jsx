import { useState } from 'react'
import reactLogo from '/eclipsesdev.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://eclipsesdev.my.id" target="_blank">
          <img src={reactLogo} className="logo eclipsesdev" alt="Eclipses Development Logo" />
        </a>
      </div>
      <h1>Eclipses Development</h1>
      <div className="card">
        <div id="counter">Counter: {count}</div>

        <button onClick={() => setCount((count) => count + 1)}>
          add
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          subtract
        </button>
        <p>
          This is a simple React website made by @EclipsesDev. For testing only.
        </p>
      </div>
      <p className="read-the-docs">
        Click on the logo to visit main website.
      </p>
    </>
  )
}

export default App
