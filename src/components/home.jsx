import React from 'react'
import Header from './header'
import Hero from './hero'

function Home() {
    return (
        <body className='index-page'>
            <Header />
            <div className="main">
                <Hero />
            </div>
        </body>
    )
}

export default Home