import React, { useRef } from 'react'
import { getCSS, downloadPDF } from './utils'

import { ExampleComponent } from 'pdf-components'
import 'pdf-components/dist/index.css'

const App = () => {
  const componentRef = useRef()

  const handleExport = async () => {
    const css = getCSS()
    const html = componentRef.current.innerHTML

    const req = await fetch('http://localhost:3000/dev/pdf', { 
      method: 'POST',
      body: JSON.stringify({ css, html })
    })


    const data = await req.blob()

    downloadPDF(data)

    console.log("KEATON", data)

  }

  return (
  <>
    <button onClick={handleExport}>Export</button>
    <div ref={componentRef}>
      <ExampleComponent text="Create React Library Example 😄" />
    </div>
  </>)
}

export default App
