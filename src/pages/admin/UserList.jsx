import CustomTable from "../../component/CustomTable"
import InputField from "../../component/InputField"
import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { APILINK } from "../../constant";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const UserList = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState("")
    const [date, setDate] = useState("")
    const [userData, setUserData] = useState([])
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    console.log('serach>>>:',search)
    useEffect(() => {
        getAllUsers();
    }, [])
    const getAllUsers = async () => {
      const config =  {
        headers: {
          Authorization: `Bearer ${userInfo?.token}`,
        },
      }
      try {
        const response = await axios.get(`${APILINK}/user/users`,config );
        setUserData(response.data.data);
      } catch (error) {
        console.log(error)
      }
    }
    console.log({userData})
  return (
    <div className="w-full px-[8%] py-10">
        <div>
            <h1 className="text-xl font-bold">All User In Your System</h1>
            <div className="mt-4 flex gap-3 items-center">
               <div className="w-1/3">
               <InputField
               label={"Search by username"}
                 id="name"
                value={search}
                type={"text"}
                name={"name"}
                placeholder={"Search ...."}
                icon={<IoSearchOutline />}                
                onChange={(e) => setSearch(e.target.value)}
                />
               </div>
               <div className="w-1/3">
               <InputField
                label={"filter register Date"}
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
            <CustomTable header={header}>
            {userData?.map((user, index) => (
              <tr onClick={() => navigate(`/admin/users/${user.id}`)}
                key={index}
              >
                <td>{index + 1}</td>
                <td>{user.fullname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.phonenumber}</td>
              </tr>
            ))}
          </CustomTable>
        </div>

    </div>
  )
}

export default UserList



const  header = [
    "NO",
    "userName",
    "LastName",
    "email",
    "phoneNumber",
  ]
  