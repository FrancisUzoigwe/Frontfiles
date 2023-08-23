const Footer = () => {
  return (
    <div className="w-full h-auto flex justify-center flex-col bg-black">
     <div className="w-[93%] h-auto flex justify-center items-center font-semibold uppercase ">
       <div className="w-[50%] h-[60px] bg-[#7E22CE] text-white flex justify-center items-center mt-[-25px] border-collapse">
       <div className="text-[20px]">Get your projects started here!</div>
       </div>
     </div>
     <div className="w-full h-[auto] flex  items-center mx-[300px] mt-5  cursor-pointer ">
        <div className="text-white  text-[30px]">CUSTOMER
        <div  className="text-white text-[15px]">admin</div>
        <div className="text-white text-[15px]">user</div>
        </div>
        <div className="w-full h-[auto] flex justify-center items-center text-[white] mt-[5px] font-bold">COMPANY
            <div className="text-white  text-[15px] flex-col">ABOUT US </div>
            <div className="text-white  text-[15px] flex-col" >CARRERS</div>
            <div className="text-white  text-[15px]">CONTACT US</div>
        </div>
     </div>
     <div className="w-full h-[auto] flex justify-start items-center" >
        <div className="text-white  font-bold text-[30px]">Monao</div>
     </div>

    </div>
  );
};

export default Footer;
