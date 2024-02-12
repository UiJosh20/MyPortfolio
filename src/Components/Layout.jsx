import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"


const Layout = () => {
  return (
    <section>
      <Navbar/>
      <Outlet/>
    </section>
  )
}

export default Layout