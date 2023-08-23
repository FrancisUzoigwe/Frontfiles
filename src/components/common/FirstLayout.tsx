import SecondPart from "../props/SecondPart"
import FirstHeader from "../static/FirstHeader"
import {Outlet} from "react-router-dom"

const FirstLayout = () => {
  return (
    <div>
        <FirstHeader/>
        <Outlet/>
        <SecondPart/>
    </div>
  )
}

export default FirstLayout