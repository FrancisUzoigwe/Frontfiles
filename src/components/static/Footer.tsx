import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-auto flex justify-center flex-col items-center bg-black">
        <div className="text-white flex items-center justify-center w-[45%] h-[65px] bg-purple-700 mt-[-30px]">
          <div className="uppercase">Want to see your team's progress? <Link to="/admin/signup" className="underline  ml-[10px]">Sign Up as an admin</Link></div>
        </div>
    </div>
  );
};

export default Footer;
