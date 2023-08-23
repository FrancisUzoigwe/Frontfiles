import MainHeader from "../static/MainHeader"
import {Outlet} from "react-router-dom"
import Footer from "../static/Footer"
const MainLayout = () => {
  return (
    <div>
        <MainHeader/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout