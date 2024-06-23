import CustomTable from "../../component/CustomTable"
import InputField from "../../component/InputField"
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
const UserList = () => {
    const [search, setSearch] = useState("")
    const [date, setDate] = useState("")
    console.log('serach>>>:',search)
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
            <CustomTable header={userData?.header}>
            {userData?.users?.map((user, index) => (
              <tr
                key={index}
              >
                <td>{index + 1}</td>
                <td>{user.member_Id}</td>
                <td>{user.staff_name}</td>
                <td>{user.membership_plan}</td>
                <td>{user.membership_plan}</td>
                <td>{user.membership_plan}</td>
                <td>{user.membership_status}</td>
              </tr>
            ))}
          </CustomTable>
        </div>

    </div>
  )
}

export default UserList


const userData = {
    header: [
      "NO",
      "Member ID",
      "Staff Name",
      "Membership Plan",
      "Membership Rank",
      "Level",
      "Membership Status",
    ],
    users: [
      {
        id: 1,
        member_Id: "5951754567844",
        staff_name: "Yuki Nakayama",
        membership_plan: "Coporate Member",
        membership_rank: "platinum",
        membership_level: "PA",
        membership_status: "Temporairy Member",
      },
      {
        id: 1,
        member_Id: "5951754567844",
        staff_name: "Yuki Nakayama",
        membership_plan: "Coporate Member",
        membership_rank: "platinum",
        membership_level: "PA",
        membership_status: "Temporairy Member",
      },
      {
        id: 1,
        member_Id: "5951754567844",
        staff_name: "Yuki Nakayama",
        membership_plan: "Coporate Member",
        membership_rank: "platinum",
        membership_level: "PA",
        membership_status: "Temporairy Member",
      },
      {
        id: 1,
        member_Id: "5951754567844",
        staff_name: "Yuki Nakayama",
        membership_plan: "Coporate Member",
        membership_rank: "platinum",
        membership_level: "PA",
        membership_status: "Temporairy Member",
      },
      {
        id: 1,
        member_Id: "5951754567844",
        staff_name: "Yuki Nakayama",
        membership_plan: "Coporate Member",
        membership_rank: "platinum",
        membership_level: "PA",
        membership_status: "Temporairy Member",
      },
      {
        id: 1,
        member_Id: "5951754567844",
        staff_name: "Yuki Nakayama",
        membership_plan: "Coporate Member",
        membership_rank: "platinum",
        membership_level: "PA",
        membership_status: "Temporairy Member",
      },
    ],
  };
  