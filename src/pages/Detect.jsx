
import { useEffect,useState } from "react"
import Camera from "../component/Camera";
import TestInput from "../component/TestInput";
const Detect = () => {
  const accessUser =  JSON.parse(localStorage.getItem("userInfo"))
  const [openWebcam,setOpenWebcam] = useState(false);

  useEffect(() => {
     if(!accessUser){
       window.location.href = "/login"
     }
  }, [])
  return (
    <div className="w-full grid place-items-center h-screen">
      {openWebcam ? <div className="w-[50%]  flex flex-col gap-4 items-center justify-center border-dashed border-2 border-[var(--main-color)] min-h-[50vh] rounded-md mx-auto"><Camera/></div>:
       <div className="w-[50%]  flex flex-col gap-4 items-center justify-center border-dashed border-2 border-[var(--main-color)] min-h-[50vh] rounded-md">
       <h3 className="text-[4rem] font-medium  text-[var(--main-color)] shadow-text capitalize">Detect</h3>
       <p className="text-xl text-black">now you can detect by cliking on the button for open your webcam </p>
       <button className="px-10 mt-5 py-4 rounded-lg bg-[var(--main-color)] text-white text-base font-medium shadow-md hover:shadow-lg hover:scale-95 duration-100" onClick={() =>setOpenWebcam(true)}>Get Started</button>
   </div>}
    </div>
  )
}

export default Detect;


