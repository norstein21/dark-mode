import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'
import ToggleDark from './components/toggleDark'

function App() {
  

  return (
  <main>
    <nav>
      <div className="nav-center">
        <h1>Hafira Blogspot</h1>
        <ToggleDark />
      </div>
    </nav>
    <section className='articles'>
      {data.map((item)=>{
        return <Article key={item.id} {...item}></Article>
      })}
    </section>
  </main>
  )
}

export default App
