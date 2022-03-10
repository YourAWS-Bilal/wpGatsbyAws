import React from "react"
import "../components/homepage.css"
import HomeCard from "../components/home/HomeCard"
// import Navbar from '../components/global-components/navbar/'
import Footer from '../components/global-components/footer/'
import {NavBar} from '../components/global-components/navbar/index'
import Layout from '../components/layout' 

export default function Home() {
  return (
    <Layout>
      <NavBar/>
      <div className="home-content">
        {/* <Card className="card-scroll-content " variant="outlined">
          <BackToTop />
        </Card> */}
        <HomeCard />
      </div>
      <Footer/>
    </Layout>
  )
}