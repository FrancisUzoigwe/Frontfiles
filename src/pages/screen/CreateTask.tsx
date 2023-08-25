import Inputemoji from "react-input-emoji"
const CreateTask = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-[40%] h-[40px] rounded-[20px] bg-white">
        <div><Inputemoji/></div>
      </div>
    </div>
  )
}

export default CreateTask