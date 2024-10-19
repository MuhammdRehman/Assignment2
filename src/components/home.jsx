import React from 'react'
import Header from './header'
import Hero from './hero'
import About from './about'
import WhyToChooseSection from './whyToChooseSection'
import Stats from './stats'
import Menu from './menu'

function Home() {
    return (
        <body className='index-page'>
            <Header />
            <div className="main">
                <Hero />
                <About/>
                <WhyToChooseSection/>
                <Stats/>
                <Menu/>
            </div>
        </body>
    )
}

export default Home