import axios from "axios";
import CustomTable from "../component/CustomTable"
import InputField from "../component/InputField"
import { useEffect, useState } from "react";
import { APILINK } from "../constant";
const Mylogs = () => {

   const [date, setDate] = useState("")
   const [myLogs, setMylogs] = useState([])
   const [isLoading, setIsLoading] = useState(false)
   const accessUser =  JSON.parse(localStorage.getItem("userInfo"))
   
   useEffect(() => {
      if(!accessUser){
         window.location.href = "/login"
      }
      getMylogs();
   },[])

   const getMylogs = async () => {
    setIsLoading(true)
    try{
      const response = await axios.get(`${APILINK}/user/log/${accessUser?.user?.id}`,{headers: {Authorization: `Bearer ${accessUser?.token}`}})
      if(response.status === 200) {
        setMylogs(response.data.data)
        console.log(response.data.data)
      }
    }catch(err){
      console.log(err)
    }finally{
      setIsLoading(false)
    }
   }
  


  return (
    <div className="w-full px-[8%] py-10">
        <div>
            <h1 className="text-xl font-bold">My Logs</h1>
            <div className="mt-4 flex gap-3 items-center">
               <div className="w-1/3">
               <InputField
                label={"filter detect Date"}
                id="name"
                value={date}
                type={"date"}
                name={"name"}
                placeholder={"Search ...."}               
                onChange={(e) => setDate(e.target.value)}
                />
               </div>
            </div>
        </div>
        <div className="mt-6">
           {isLoading? <div className="text-center grid place-items-center h-[30rem] w-full">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[var(--main-color)]"></div>
           </div>: 
            <CustomTable header={userData?.header}>
            {myLogs?.map((user, index) => (
              <tr
                key={index}
              >
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.phonenumber}</td>
                <td>{user.score}</td>
                <td>{user.dateTime}</td>
              </tr>
            ))}
          </CustomTable>
          }
        </div>

    </div>
  )
}

export default Mylogs


const userData = {
    header: [
      "NO",
      "userName",
      "LastName",
      "email",
      "phoneNumber",
      "score",
      "dateTime",
    ],
    
  };
  