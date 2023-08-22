import MainHeader from "../static/MainHeader"
import {Outlet} from "react-router-dom"

const MainLayout = () => {
  return (
    <div>
        <MainHeader/>
        <Outlet/>
    </div>
  )
}

export default MainLayout