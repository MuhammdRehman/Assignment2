import React from 'react'
import Header from './header'
import Hero from './hero'
import About from './about'
import WhyToChooseSection from './whyToChooseSection'
import Stats from './stats'
import Menu from './menu'
import Testinomial from './testinomial'
import Events from './events'
import Chefs from './chef'
import Footer from './footer'

const Home=()=> {
    return (
        <div className='index-page'>
            <Header />
            <div className="main">
                <Hero />
                <About/>
                <WhyToChooseSection/>
                <Stats/>
                <Menu/>
                <Testinomial/>
                <Events/>
                <Chefs/>
                <Footer/>
            </div>
        </div>
    )
}

export default Home;