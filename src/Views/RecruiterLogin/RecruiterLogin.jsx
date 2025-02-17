import { useState } from "react";
import "./RecruiterLogin.css"
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import ul from "../../Assets/Banner/ul.png"
import { NavLink, useNavigate } from "react-router-dom";
import { validEmailFormat } from "../../Utils/Regex/EmailRegex";
import axios from "axios";
import { APIs } from "../../Services/Env/Env";
import { useDispatch } from "react-redux";
import { activeLoader, deactiveLoader } from "../../Redux/Slices/AccessLoader";
import toast from "react-hot-toast";

export const RecruiterLogin = () => {
   const [eyeOpenClose, setEyeOpenClose] = useState(true)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [loginDtls, setLoginDtls] = useState({
      emailId: "",
      password: ""
   })

   const [loginDtlsErr, setLoginDtlsErr] = useState({
      emailIdErr: "",
      passwordErr: ""
   })

   const handleOnChange = (e) => {
      let { name, value } = e.target;
      setLoginDtls((prev) => ({ ...prev, [name]: value }));
   }

   const handleOnBlur = (e) => {

      switch (e.target.id) {

         case "emailId":
            if (loginDtls.emailId.length === 0) {
               loginDtlsErr.emailIdErr = "Email ID Is Required"
            } else {
               if (!validEmailFormat.test(loginDtls.emailId)) {
                  loginDtlsErr.emailIdErr = "Enter Correct Email Id"
               } else {
                  loginDtlsErr.emailIdErr = ""
                  dispatch(activeLoader())
                  const isEmailIdExist = new Promise((resolve, reject) => {
                     axios.get(APIs.recruiterSection.isEmailExist, {
                        params: {
                           emailId: loginDtls.emailId
                        }
                     })
                        .then((response) => response.data)
                        .then((data) => {
                           console.log(data)
                           if (data.message === "Success") {
                              resolve(data)
                           } else if (data.message === "Failed") {
                              reject(data)
                           }
                        })
                  })

                  isEmailIdExist
                     .then((data) => {
                        dispatch(deactiveLoader())
                        loginDtlsErr.emailIdErr = ""
                     })
                     .catch((data) => {
                        dispatch(deactiveLoader())
                        toast.error(data.data.message)
                        loginDtlsErr.emailIdErr = data.data.message
                     })
                  setLoginDtlsErr((prev) => ({ ...prev }));
               }
            }
            break;

         case "password":
            if (loginDtls.password.length === 0) {
               loginDtlsErr.passwordErr = "Password Is Required"
            } else if (loginDtls.password.length !== 6) {
               loginDtlsErr.passwordErr = "Password Length Should Be 6"
            } else if (loginDtls.password.length === 6) {
               loginDtlsErr.passwordErr = ""
            }
            break;

         default:
            break;
      }
      setLoginDtlsErr((prev) => ({ ...prev }));
   }

   const handleLogin = (e) => {
      e.preventDefault();

      if (loginDtls.emailId.length === 0) {
         loginDtlsErr.emailIdErr = "Email ID Is Required"
         setLoginDtlsErr((prev) => ({ ...prev }));
      } else if (!validEmailFormat.test(loginDtls.emailId)) {
         loginDtlsErr.emailIdErr = "Enter Correct Email Id"
         setLoginDtlsErr((prev) => ({ ...prev }));
      } else if (loginDtls.password.length === 0) {
         loginDtlsErr.passwordErr = "Password Is Required"
         setLoginDtlsErr((prev) => ({ ...prev }));
      } else if (loginDtls.password.length !== 6) {
         loginDtlsErr.passwordErr = "Password Length Should Be 6"
         setLoginDtlsErr((prev) => ({ ...prev }));
      } else {
         loginDtlsErr.emailIdErr = ""
         loginDtlsErr.passwordErr = ""
         setLoginDtlsErr((prev) => ({ ...prev }));
         dispatch(activeLoader())
         const login = new Promise((resolve, reject) => {
            axios.get(APIs.recruiterSection.login, {
               params: loginDtls
            })
               .then((response) => response.data)
               .then((data) => {
                  console.log(data)
                  if (data.message === "Success") {
                     resolve(data)
                  } else if (data.message === "Failed") {
                     reject(data)
                  }
               })
         })
         login
            .then((data) => {
               toast.success(data.data.message)
               document.cookie = `technotutor = ${data.data.token}`
               dispatch(deactiveLoader())
               navigate("/dashboard")
            })
            .catch((data, err) => {
               toast.error(data.data.message)
               console.log(err)
               dispatch(deactiveLoader())
            })
      }
   }

   return (
      <>
         <div className="recruiterLoginSection">
            <div className="recruiterLoginContainer">
               <div className="pageHeadingSection">
                  <div className="pageHeading text-center animate__animated animate__bounceInDown">
                     Recruiter Login
                  </div>
               </div>
               <div className="loginForm container my-4">
                  <form onSubmit={handleLogin}>
                     <div className="line">
                        <div className="contentHeading mt-1">
                           Login
                           <img src={ul} alt="UnderLine" />
                        </div>
                     </div>
                     <div className="line mt-3">
                        <label htmlFor="emailId">Email Id</label>
                        <br></br>
                        <input type="text" name="emailId" id="emailId" placeholder="Enter Email Id" onChange={handleOnChange} onBlur={handleOnBlur} value={loginDtls.emailId} />
                        <div className="ErrSection">{loginDtlsErr.emailIdErr}</div>
                     </div>
                     <div className="line">
                        <label htmlFor="password">Password</label>
                        <br></br>
                        <input type={eyeOpenClose ? "text" : "password"} name="password" id="password" placeholder="Enter Password" onChange={handleOnChange} onBlur={handleOnBlur} value={loginDtls.password} />
                        <span className="eyeBtn">{eyeOpenClose ? <IoEyeSharp onClick={() => (setEyeOpenClose(false))} /> : <IoEyeOffSharp onClick={() => (setEyeOpenClose(true))} />}</span>
                        <div className="ErrSection">{loginDtlsErr.passwordErr}</div>
                     </div>
                     <div className="line">
                        <NavLink to="/forgotpassword" className="frgtPass" >Forgot Password</NavLink>
                     </div>
                     <div className="line mt-2 mb-4">
                        <button className="loginBtn" type="submit">Login</button>
                     </div>
                     <hr></hr>
                     <div className="line text-center my-2">
                        Don't have an account? <NavLink to="/recruitersignup">Sign Up</NavLink>   {/*<span className="signupBtn" onClick={handleForgotPassword}>Sign Up</span> */}
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </>
   )
}