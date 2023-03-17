import React, { useEffect, useState } from 'react'
import './App.css'
import useLocalstorage from './useLocalstorage'

function App() {
  const [html, sethtml] = useLocalstorage("html","")
  const [css, setcss] = useLocalstorage("css","")
  const [js, setjs] = useLocalstorage("js","")
  const [doc, setdoc] = useState("")

  useEffect(() => {
    setdoc(`<html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>`)
  }, [html, css, js])


  return (
    <div className='app'>
      <div className="editors">
        <div className="inputcon">
          <label htmlFor="input">HTML</label>
          <textarea className='input' value={html} onChange={(e) => { sethtml(e.target.value) }} />
        </div>
        <div className="inputcon">
          <label htmlFor="input">CSS</label>
          <textarea className='input' value={css} onChange={(e) => { setcss(e.target.value) }} />
        </div>
        <div className="inputcon">
          <label htmlFor="input">Javascript</label>
          <textarea className='input' value={js} onChange={(e) => { setjs(e.target.value) }} />
        </div>
      </div>
      <div className="output">
        <iframe srcDoc={doc} title="output" frameborder="0"></iframe>
      </div>
    </div>
  )
}

export default App
