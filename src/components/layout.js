import React from "react"
import Footer from '../components/global-components/footer/index'
import Navbar from "../components/global-components/navbar/index"
export default function Layout({ children }) {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}