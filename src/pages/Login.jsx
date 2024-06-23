import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import InputField from "../component/InputField";
import { successSwal ,errorSwal} from "../helper";
import axios from "axios";
import { APILINK } from "../constant";

const Login = () => {
  const accessUser =  JSON.parse(localStorage.getItem("userInfo"))
  const [isLoading,setIsLoading] = useState(false)
  const navigate = useNavigate();

useEffect(() => {
  if(accessUser){
    navigate("/")
  }
}, [])


  const handleLogin = async (values) => {
    const newdata = {
      phonenumber: values.phoneNumber,
      password: values.password
    }
    setIsLoading(true)
    try{
      const response = await axios.post(`${APILINK}/user/login`, newdata);
    if(response.status === 200) {
      console.log("response:::", response.data.data);
      localStorage.setItem("userInfo", JSON.stringify(response.data.data));
      successSwal("Login Success");
      navigate("/");
    }
    }
    catch(err){
      errorSwal("Login Failed");
    }finally{
      setIsLoading(false)
    }
    
  }
  return (
    <>
      <div className="grid place-items-center w-full min-h-screen bg-[#F6F6F6]">
        <Formik
          initialValues={{
            phoneNumber: "",
            password: "",
          }}
          validate={(values) => {
            const errors = {};
            if(!values.phoneNumber){
              errors.phoneNumber = "Required phoneNumber"
            }
            if (!values.password) {
              errors.password = "Required password";
            }
            return errors;
          }}
          onSubmit={(values) => {
            console.log("send Data:::", values);
           handleLogin(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form
              onSubmit={handleSubmit}
              className="w-[520px] min-h-[450px] bg-white flex flex-col gap-y-6 items-center rounded-[16px] py-12 px-10  shadow-md"
            >
              <h3 className="text-[#393939] font-bold text-[24px] capitalize">
                Welcome to our platform
              </h3>
              <p className=" text-sm font-medium text-[#393939]">
                Enter your Email address and Password
              </p>
              <div className="w-full">
              <InputField
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                placeholder="99655454"
                value={values.phoneNumber}
                errors={errors.phoneNumber}
                touched={touched.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              </div>
             <div className="w-full">
             <InputField
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                value={values.password}
                errors={errors.password}
                touched={touched.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
             </div>
              <button className="px-10 mt-5 py-4 w-full rounded-lg bg-[var(--main-color)] text-white text-base font-medium shadow-md hover:shadow-lg hover:scale-95 duration-100">{isLoading ? "Loading..." : "Login"}</button>
              <div className="flex items-center">
                 <p>Not Account ?</p> <Link className=" ml-3 text-[var(--main-color)] underline text-base" to={"/register"}>Register here</Link>
              </div>
            </form>
          )}
        </Formik>
      </div>
      {/* <SuccessPopUp  /> */}
    </>
  );
};

export default Login;

