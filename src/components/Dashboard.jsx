import React from 'react'
import Sidebar from './sidebar'
import Header from './header'
import Analytics from './analytics'
import BrowserAnalytics from './browser'
import Projects from './projects'
import Footer from './footer'

const Dashboard=()=> {
  return (
    <div className="wrapper">
            <Sidebar/>
            <div className="main">
                <Header/>
                <main className="content">
				<div className="container-fluid p-0">
					<h1 className="h3 mb-3"><strong>Analytics</strong> Dashboard</h1>
                    <Analytics/>
                    <BrowserAnalytics/>
                    <Projects/>
                    </div>
                </main>
                <Footer/>
            </div>

    </div>
  )
}

export default Dashboard;