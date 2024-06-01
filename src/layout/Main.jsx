import { Outlet } from "react-router-dom"
import Navbar from "../components/Header/Navbar"
import Footer from "../components/Footer/Footer"
import { ToastContainer } from 'react-toastify';

const Main = () => {
  return (
    <>
        <Navbar></Navbar>
        <ToastContainer></ToastContainer>
        <Outlet></Outlet>
        <Footer></Footer>
    </>
  )
}

export default Main