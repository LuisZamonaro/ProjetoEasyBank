import { useState } from 'react'
import FooterPage from './Footer'
import HeaderPage from './Header'
import Parte1 from './Parte1'
import Parte2 from './Parte2'
import Parte3 from './Parte3'
import './styles.css'


function App() {
  
  const [openMenu, setOpenMenu] = useState(false)


  return (
    <>
    <HeaderPage openMenu = {openMenu} setOpenMenu = {setOpenMenu} />
    <Parte1 openMenu = {openMenu}/>
    <Parte2/>
    <Parte3/>
    <FooterPage/>
    </>
  )
}

export default App
