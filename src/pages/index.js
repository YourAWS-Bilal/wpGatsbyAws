import React from "react"
import "../components/homepage.css"
import HomeCard from "../components/home/HomeCard"
// import Navbar from '../components/global-components/navbar/'
import Layout from '../components/layout' 

export default function Home() {
  return (
    <Layout>
      <div className="home-content">
        <HomeCard />
      </div>
    </Layout>
  )
}