import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

function App() {
  const [theme,setTheme] = useState('light')

  const btnToggle = () =>{
    if(theme === ('light')){
      setTheme('dark')
    }
    else(
      setTheme('light')
    )
  }

  useEffect(()=>{
    document.documentElement.className = theme
  },[theme])

  return (
  <main>
    <nav>
      <div className="nav-center">
        <h1>Hafira Blogspot</h1>
        <div className="btn" onClick={btnToggle}>toggle</div>
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
