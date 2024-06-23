import { useState } from 'react';
import { Link,useLocation ,useNavigate} from 'react-router-dom'
import { FaRegCircleUser } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
const Header = () => {
    const navigate = useNavigate()
    const accessUser = true;
    const [openProfile, setOpenProfile] = useState(false)
    const location = useLocation();
    const active= location.pathname
    const handleToAdmin = () => {
        navigate('/admin');
    }
  return (
    <div className='flex  items-center justify-between bg-[var(--main-color)] px-[8%] py-6 z-20'>
        <div>
            <h2 className='text-3xl font-bold text-white'>Driver Detection</h2>
        </div>
        <div className='flex items-center gap-10 '>
            <nav className=' flex gap-8 w-[20rem]'>
                {navData.map((item) => (
                    <Link to={item.link} key={item.id} className={`text-white text-base font-normal capitalize ${active === item.link ? 'border-b-2 font-bold' : ''}`}>{item.name}</Link>
                ))}
            </nav>
            {accessUser ? 
            ( <div className='flex flex-row gap-3 items-end text-white relative cursor-pointer' onClick={() => setOpenProfile(!openProfile)}>
                <FaRegCircleUser  size={30} color='white'/>
                <h4>User Name</h4>
               {openProfile && (
                   <div className='absolute w-[10rem] top-12 right-0 bg-white text-black flex flex-col shadow-md rounded-md'>
                      <div className='w-full flex gap-2 hover:bg-[var(--main-color)] hover:text-white p-4' onClick={handleToAdmin}>
                          <FaRegUser size={18}/> <p>to Admin</p>
                      </div>
                      <div className='w-full flex gap-2 hover:bg-[var(--main-color)] hover:text-white p-4'>
                      <MdLogout  size={18}/> <p>Logout</p>
                      </div>
                   </div>
               )}

             </div>):
             (<div>
                <Link to='/login' className='text-[var(--main-color)] bg-white text-base font-normal capitalize px-6  py-2 rounded-md shadow-md '>Login</Link>
             </div>)}
        </div>
    </div>
  )
}

export default Header

const navData = [
    {
        id:1,
        name:'Home',
        link:'/'
    },
    {
        id:2,
        name:'detect',
        link:'/detect'
    },
    {
        id:3,
        name:'My logs',
        link:'/mylogs'
    },
    {
        id:3,
        name:'Log in',
        link:'/login'
    }
]
