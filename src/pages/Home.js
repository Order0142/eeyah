import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Logo from "../logo.png";
const Home = () => {
  return (<>
<Header Logo={Logo}/>
    <div>Home</div>
    <button />
    <Footer someText={'Ademola u are trying your best but he his not seeing it'} someWords={'ajakololo'}/>
  </>
  )
}

export default Home