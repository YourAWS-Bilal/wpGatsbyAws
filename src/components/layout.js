import React from "react"
import Footer from '../components/global-components/footer'
import Navbar from "../components/global-components/navbar"
export default function Layout({ children }) {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}