
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import InputField from "../component/InputField";
import { successSwal } from "../helper";

const Register = () => {
  const navigate = useNavigate();
  const handleLogin = (values) => {
    console.log("values:::", values);
    successSwal("Register Success");
    navigate("/");
  }
  return (
    <>
      <div className="grid place-items-center w-full min-h-screen bg-[#F6F6F6]">
        <Formik
          initialValues={{
            userName: "",
            email: "",
            password: "",
          }}
          validate={(values) => {
            const errors = {};
            if(!values.userName){
              errors.userName = "Required Name"
            }
            if (!values.email) {
              errors.email = "Required email";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Required password";
            }
            return errors;
          }}
          onSubmit={(values) => {
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
                Register Account
              </h3>
              <p className=" text-sm font-medium text-[#393939]">
                Enter your Name Email address and Password
              </p>
              <div className="w-full">
              <InputField
                id="userName"
                name="userName"
                type="text"
                placeholder="Your Name"
                value={values.userName}
                errors={errors.userName}
                touched={touched.userName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              </div>
              <div className="w-full">
              <InputField
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                value={values.email}
                errors={errors.email}
                touched={touched.email}
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
              <button className="px-10 mt-5 py-4 w-full rounded-lg bg-[var(--main-color)] text-white text-base font-medium shadow-md hover:shadow-lg hover:scale-95 duration-100">Register</button>
              <div className="flex items-center">
                 <p>Already have Account ?</p> <Link className=" ml-3 text-[var(--main-color)] underline text-base" to={"/login"}>login here</Link>
              </div>
            </form>
          )}
        </Formik>
      </div>
      {/* <SuccessPopUp  /> */}
    </>
  );
};

export default Register

