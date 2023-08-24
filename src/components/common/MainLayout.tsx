import MainHeader from "../static/MainHeader"
import {Outlet} from "react-router-dom"
import Footer from "../static/Footer"
import FootProps from "../props/FootProps"
const MainLayout = () => {
  return (
    <div>
        <MainHeader/>
        <Outlet/>
        <FootProps/>
    </div>
  )
}

export default MainLayout