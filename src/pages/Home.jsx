import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()


 const  handleStarted = () => {
  navigate("/detect")
  }
  return (
    <div className='w-full home min-h-screen flex justify-center items-center'>
        <div className=" flex flex-col gap-4 w-[50%]">
            <h2 className="text-[4rem] font-medium  text-[var(--main-color)] shadow-text capitalize">Artificial intelligence</h2>
            <div className="text-xl text-white">Driver Drowsiness Detection Alert System with Open-CV & Keras Using IP-webCam For Camera Connection</div>
            <div>
              <button onClick={handleStarted}
              className="px-10 mt-5 py-4 rounded-lg bg-[var(--main-color)] text-white text-base font-medium shadow-md hover:scale-95 duration-150"
            >Get Started</button></div>
        </div>
    </div>
  )
}

export default Home
