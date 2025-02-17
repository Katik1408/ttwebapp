import { Toaster } from "react-hot-toast"
import { Navbar } from "../Navbar/Navbar"
import { Outlet } from "react-router-dom"
import { Footer } from "../Footer/Footer"
import { Loader } from "../Loader/Loader"
import { Enquiry } from "../Enquiry/Enquiry"
import { Links } from "../Links/Links"

export const Layout = () => {
   return (
      <>
         <Toaster></Toaster>
         <Loader></Loader>
         <Enquiry></Enquiry>
         <Navbar></Navbar>
         <Links></Links>
         <Outlet></Outlet>
         <Footer></Footer>
      </>
   )
}