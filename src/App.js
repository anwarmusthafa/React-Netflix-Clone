import React from 'react'
import "./App.css"
import Banner from './Components/Banner/Banner'
import NavBar from './Components/Navbar/NavBar'
import RowPost from './Components/RowPost/RowPost'
import { action, comedy, originlas } from './urls'



function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={originlas} title="Netflix Originlas"/>
      <RowPost url={action} title = "Action" isSmall/>
      <RowPost url={comedy} title = "Comedy" isSmall/>
    </div>
  )
}

export default App
