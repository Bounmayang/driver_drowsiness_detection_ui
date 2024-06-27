
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Layout from "../component/Layout"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import NotFound from "../pages/NotFound"
import Detect from "../pages/Detect"
import Mylogs from "../pages/Mylogs"
import UserList from "../pages/admin/UserList"
import UserDetail from "../pages/admin/UerLogs"

 const AllRoute = () => {
  return (
    <Router>
       <Routes>
         <Route path="/" element={<Layout><Home /></Layout>}></Route>
         <Route path="/login" element={<Layout><Login /></Layout>}></Route>
         <Route path="/Register" element={<Layout><Register /></Layout>}></Route>
         <Route path="/detect" element={<Layout><Detect/></Layout>}></Route>
         <Route path="/mylogs" element={<Layout><Mylogs/></Layout>}></Route>
         <Route path="/*" element={<Layout><NotFound/></Layout>}></Route>
         <Route path="/admin" element={<Layout><UserList/></Layout>}></Route>
         <Route path="/admin/users/:id" element={<Layout><UserDetail/></Layout>}></Route>
       </Routes>
    </Router>
  )
}

export default AllRoute

