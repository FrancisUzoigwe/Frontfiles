import {Link} from "react-router-dom"
import {GiSpikyExplosion} from "react-icons/gi"
import {BsAlarm, BsFlagFill} from "react-icons/bs"

const LandingPage = () => {
  return (
    <div className="w-[auto] h-[auto] flex flex-col ">
        <div className="mt-[60px] w-full h-[auto] flex justify-center ">
            <div className="w-[93%] h-[600px] flex items-center justify-between">
                <div className="w-[50%] h-[570px]   flex-col items-center">
                    <div className="w-[620px] h-[250px] rounded-[40px] flex justify-between">
                        <div className="w-[250px] h-[250px] rounded-[40px] bg-gray-100 flex flex-col items-center">
                        <div className="px-4 py-2 rounded-[20px] text-[gray] text-[14px] bg-white mt-2 font-semibold">Product Design</div>
                        <div className="mt-[10px] text-[25px] font-semibold">Mobile <br />
                        Application</div>
                        <div className="flex items-center mt-[10px] px-4 py-2 rounded-[20px]  bg-white text-[gray] text-[14px] font-semibold"><div><BsFlagFill className="mr-2"/></div>Set priority</div>
                       <div className="w-[70%] mt-[10px] bg-red-700">
                       <hr className=" bg-gray-400 h-[2px] "/>
                       </div>
                        </div>
                        <div className="w-[340px] h-[250px] rounded-[40px] bg-red-400 ">
                            Frontend
                        </div>
                    </div>
                    <div className="w-[620px] h-[300px] rounded-[40px] mt-7 flex items-center justify-between">
                        <div className="h-[300px] w-[400px] rounded-[40px] bg-purple-500">Div</div>
                        <div className="w-[200px] h-[300px] rounded-[40px]  flex flex-col items-center justify-center">
                            <div className = "w-[180px] h-[100px] rounded-[25px] border border-dotted mb-[15px] flex items-center justify-center">
                                <div className=" flex items-center flex-col justify-center">
                                    <div><BsAlarm/></div>
                                    <div className="mt-[5px] text-[14px] text-[gray]">Create Tasks</div>
                                </div>
                            </div>
                            <div className = "w-[180px] h-[150px] rounded-[40px] bg-gray-300"></div>
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
                 <br />
                 <hr className="border border-[#3b3b3b]"/>
                 <div className="flex justify-between">
                    <div className="uppercase mt-[5px]">Tasks <br /> and projects</div>
                    <div className="flex w-[450px] h-[auto] flex-wrap">
                    <div className=" px-6 py-2 border border-[gray] m-1 cursor-pointer font-Poppins rounded-[20px] mt-[17px] text-[14px]">Photo Design</div>
                    <div className=" px-6 py-2 border border-[gray] m-1 cursor-pointer font-Poppins rounded-[20px] mt-[17px] text-[14px]">Design Mockup</div>
                    <div className=" px-6 py-2 border border-[gray] m-1 cursor-pointer font-Poppins rounded-[20px] mt-[17px] text-[14px]">UI/UX</div>
                    <div className=" px-6 py-2 border border-[gray] m-1 cursor-pointer font-Poppins rounded-[20px] mt-[17px] text-[14px]">Development</div>
                    <div className=" px-6 py-2 border border-[gray] m-1 cursor-pointer font-Poppins rounded-[20px] mt-[17px] text-[14px]">Branding</div>
                    <div className=" px-6 py-2 border border-[gray] m-1 cursor-pointer font-Poppins rounded-[20px] mt-[17px] text-[14px]">Illustrations</div>
                    </div>
                 </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage