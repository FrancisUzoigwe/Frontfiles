import img from "../../assets/look.webp"
import img1 from "../../assets/convo.webp"
import img2 from "../../assets/map.webp"
const HomeScreen = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex h-[100px]">
        <div className="w-[600px] h-[450px] mr-5 bg-red-500  flex justify-center items-center rounded-md">
          <div className="w-[200px] h-[150px] bg-[white] m-3">
           <img src={img}  className="object-cover h-full w-full"/>
          </div>
          <div className="w-[180px] h-[150px] bg-[blue] m-3">
            <img src={img1}/>
          </div>
          <div className="w-[180px] h-[150px] bg-[white] m-3">
            <img src={img2}/>
          </div>

          box
        </div>
        <div className="w-[600px] h-[450px] bg-blue-500 flex justify-center items-center rounded-md">
          box
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
