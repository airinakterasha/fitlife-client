import { Outlet } from "react-router-dom"
import Navbar from "../components/Header/Navbar"
import Footer from "../components/Footer/Footer"

const Main = () => {
  return (
    <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </>
  )
}

export default Main