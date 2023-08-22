import {Link} from "react-router-dom"
import {GiSpikyExplosion} from "react-icons/gi"

const LandingPage = () => {
  return (
    <div className="w-[auto] h-[auto] flex flex-col ">
        <div className="mt-[60px] w-full h-[auto] flex justify-center ">
            <div className="w-[93%] h-[600px] flex items-center justify-between">
                <div className="w-[50%] h-[570px]   flex-col items-center">
                    <div className="w-[620px] h-[250px] rounded-[40px] bg-gray-400 flex justify-between">
                        <div className="w-[250px] h-[250px] rounded-[40px] bg-yellow-400 ">
                            Franklyn
                        </div>
                        <div className="w-[340px] h-[250px] rounded-[40px] bg-red-400 ">
                            Frontend
                        </div>
                    </div>
                    <div className="w-[620px] h-[300px] rounded-[40px] bg-gray-400 mt-7 flex items-center justify-between">
                        <div className="h-[300px] w-[400px] rounded-[40px] bg-purple-500">Div</div>
                        <div className="w-[200px] h-[300px] rounded-[40px]  flex flex-col items-center justify-center">
                            <div className = "w-[180px] h-[100px] rounded-[25px] border border-dotted mb-[15px] flex items-center justify-center">
                                <div>
                                    <div>Clock</div>
                                    <div>Add</div>
                                </div>
                            </div>
                            <div className = "w-[180px] h-[150px] rounded-[40px] bg-white"></div>
                        </div>
                    </div>
                </div>
                <div className="w-[47%] h-[570px] flex flex-col ">
                    <div className="font-Poppins text-[35px] w-[550px] font-medium mt-[120px]">Manage All Of Your Work In One Place Efficiently <span className="absolute mt-[6px] ml-1"><GiSpikyExplosion className="w-[40px] h-[40px] "/></span></div>
                    <div className="w-[300px] font-Poppins font-semibold text-[13px] mt-5 text-[#444444]">
                        Manage your work, timelines and team mates all at once.. Set and follow timelines, assign tasks and  keep your projects in check.
                    </div>
                 <div className="w-full h-[auto] flex items-center mt-[20px]">
                  <div className="w-[270px] h-[80px] flex items-center justify-between">
                  <Link to="/signin" className=" px-6 py-2 bg-black text-white rounded-[20px] font-Poppins mt-[17px]">Signin</Link>
                  <Link to="/signup" className=" px-6 py-2 bg-purple-700 text-white font-Poppins rounded-[20px] mt-[17px]">Get Started</Link>
                  </div>
                 </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage