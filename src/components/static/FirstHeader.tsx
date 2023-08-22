import { Link } from "react-router-dom"
import {GiLaurelCrown} from "react-icons/gi"

const FirstHeader = () => {
  return (
    <div className="w-full h-[60px] flex items-center justify-center  fixed">
        <div className="w-[93%] h-[50px] flex justify-between items-center screen-">
            <div className="flex items-center justify-center">
                <div className="w-[35px] h-[35px] rounded-[50%] overflow-hidden flex items-center justify-center"><GiLaurelCrown className ="w-[35px] h-[35px] "/></div>
                <div className="ml-[7px] font-Poppins mt-[3px]">Monao</div>
            </div>
            <div className="cursor-pointe">About Us</div>
            <div>
                <Link to="/signin" className="px-8 py-2 rounded-[30px] border border-[grey]  font-Poppins">Signin</Link>
            </div>
        </div>
    </div>
  )
}

export default FirstHeader