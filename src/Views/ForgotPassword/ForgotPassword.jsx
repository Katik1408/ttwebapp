import "./ForgotPassword.css"
import ul from "../../Assets/Banner/ul.png"
import { useState } from "react"
import { validEmailFormat } from "../../Utils/Regex/EmailRegex";
import axios from "axios";
import { APIs } from "../../Services/Env/Env";
import { useDispatch } from "react-redux";
import { activeLoader, deactiveLoader } from "../../Redux/Slices/AccessLoader";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const ForgotPassword = () => {

   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [disableNextSec, setDisableNextSec] = useState(true);
   const [passwordResetSec, setPasswordResetSec] = useState(false)
   const [activeSendOTPBtn, setActiveSendOTPBtn] = useState(true)
   const [forgotPassDtls, setForgotPassDtls] = useState({
      emailId: "",
      otp: "",
      password: "",
      confirmPassword: ""
   })

   const [forgotPassDtlsErr, setForgotPassDtlsErr] = useState({
      emailIdErr: "",
      otpErr: "",
      newPasswordErr: "",
      confirmPasswordErr: ""
   })


   const handleOnChange = (e) => {
      let { name, value } = e.target;
      setForgotPassDtls((prev) => ({ ...prev, [name]: value }));
   }

   const handleOnBlur = (e) => {
      switch (e.target.id) {
         case "emailId":
            if (forgotPassDtls.emailId.length === 0) {
               forgotPassDtlsErr.emailIdErr = "Email ID Is Required"
            } else {
               if (!validEmailFormat.test(forgotPassDtls.emailId)) {
                  forgotPassDtlsErr.emailIdErr = "Enter Correct Email Id"
               } else {
                  forgotPassDtlsErr.emailIdErr = ""
                  const isEmailIdExist = new Promise((resolve, reject) => {
                     axios.get(APIs.recruiterSection.isEmailExist, {
                        params: {
                           emailId: forgotPassDtls.emailId
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
                        forgotPassDtlsErr.emailIdErr = ""
                        setForgotPassDtls((prev) => ({ ...prev }));
                        setActiveSendOTPBtn(false)
                     })
                     .catch((data) => {
                        dispatch(deactiveLoader())
                        toast.error(data.data.message)
                        forgotPassDtlsErr.emailIdErr = data.data.message
                        setForgotPassDtls((prev) => ({ ...prev }));
                     })

               }
            }
            break;

         case "password":
            if (forgotPassDtls.password.length === 0) {
               forgotPassDtlsErr.newPasswordErr = "New Password Required"
            } else if (forgotPassDtls.password.length !== 6) {
               forgotPassDtlsErr.newPasswordErr = "Password Length should be 6"
            } else {
               forgotPassDtlsErr.newPasswordErr = ""
            }
            setForgotPassDtlsErr((prev) => ({ ...prev }));
            break;

         case "confirmPassword":
            if (forgotPassDtls.confirmPassword.length === 0) {
               forgotPassDtlsErr.confirmPasswordErr = "Confirm Password Required"
            } else if (forgotPassDtls.confirmPassword.length !== 6) {
               forgotPassDtlsErr.confirmPasswordErr = "Confirm Password Length should be 6"
            } else if (forgotPassDtls.password !== forgotPassDtls.confirmPassword) {
               forgotPassDtlsErr.confirmPasswordErr = "Confirm Password doesn't match With New Password"
            } else {
               forgotPassDtlsErr.confirmPasswordErr = ""
            }
            setForgotPassDtlsErr((prev) => ({ ...prev }));
            break;

         default:
            break;
      }
   }

   const handleSendOTP = (e) => {
      dispatch(activeLoader())
      const sendOTP = new Promise((resolve, reject) => {
         axios.get(APIs.recruiterSection.forgotOTP, {
            params: {
               emailId: forgotPassDtls.emailId
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
      sendOTP
         .then((data) => {
            toast.success(data.data.message)
            setDisableNextSec(false)
            dispatch(deactiveLoader())
         })
         .catch((data, err) => {
            console.log(err)
            toast.error(data.data.message)
            dispatch(deactiveLoader())
         })
   }

   const handleResendPassword = () => {
      alert(1)
   }

   const handleForgotPassword = (e) => {
      e.preventDefault();

      if (forgotPassDtls.emailId.length === 0) {
         forgotPassDtlsErr.emailIdErr = "Email ID Is Required"
      } else if (!validEmailFormat.test(forgotPassDtls.emailId)) {
         forgotPassDtlsErr.emailIdErr = "Enter Correct Email Id"
      } else if (forgotPassDtls.otp.length === 0) {
         forgotPassDtlsErr.otpErr = "OTP Is Required"
      } else if (forgotPassDtls.otp.length !== 4) {
         forgotPassDtlsErr.otpErr = "OTP length should be 4"
      } else if (validEmailFormat.test(forgotPassDtls.emailId) && forgotPassDtls.otp.length === 4) {
         forgotPassDtlsErr.emailIdErr = ""
         forgotPassDtlsErr.otpErr = ""
         setForgotPassDtlsErr((prev) => ({ ...prev }));

         dispatch(activeLoader())
         const verifyForgotPassOTP = new Promise((resolve, reject) => {
            axios.get(APIs.recruiterSection.forgotPassOTPVerify, {
               params: {
                  emailId: forgotPassDtls.emailId,
                  otp: forgotPassDtls.otp
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

         verifyForgotPassOTP
            .then((data) => {
               toast.success(data.data.message)
               setPasswordResetSec(true)
               dispatch(deactiveLoader())
            })
            .catch(() => {
               dispatch(deactiveLoader())
            })

      }
   }

   const handleResetForgotPassword = (e) => {
      e.preventDefault()

      if (forgotPassDtls.password.length === 0) {
         forgotPassDtlsErr.newPasswordErr = "New Password Required"
         setForgotPassDtlsErr((prev) => ({ ...prev }));
      } else if (forgotPassDtls.password.length !== 6) {
         forgotPassDtlsErr.newPasswordErr = "New Password Length Should Be 6"
         setForgotPassDtlsErr((prev) => ({ ...prev }));
      } else if (forgotPassDtls.confirmPassword.length === 0) {
         forgotPassDtlsErr.confirmPasswordErr = "New Password Required"
         setForgotPassDtlsErr((prev) => ({ ...prev }));
      } else if (forgotPassDtls.confirmPassword.length !== 6) {
         forgotPassDtlsErr.confirmPasswordErr = "Confirm Password Length Should Be 6"
         setForgotPassDtlsErr((prev) => ({ ...prev }));
      } else {
         forgotPassDtlsErr.newPasswordErr = ""
         forgotPassDtlsErr.confirmPasswordErr = ""
         setForgotPassDtlsErr((prev) => ({ ...prev }));

         dispatch(activeLoader())

         const resetPass = new Promise((resolve, reject) => {
            axios.post(APIs.recruiterSection.resetPassword, {
               params: {
                  emailId: forgotPassDtls.emailId,
                  otp: forgotPassDtls.otp,
                  newPassword: forgotPassDtls.password,
                  confirmPassword: forgotPassDtls.confirmPassword
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

         resetPass
            .then((data) => {
               toast.success(data.data.message)
               dispatch(deactiveLoader())
               navigate("/")
            })
            .catch((data) => {
               toast.error(data.data.message)
               dispatch(deactiveLoader())
            })

      }

   }

   return (
      <>
         <div className="fotgotPasswordSection">
            <div className="fotgotPasswordContainer">
               <div className="pageHeadingSection">
                  <div className="pageHeading text-center animate__animated animate__bounceInDown">
                     Forgot Password
                  </div>
               </div>

               {
                  !passwordResetSec ?
                     <div className="forgotPasswordForm container my-4">
                        <form onSubmit={handleForgotPassword}>
                           <div className="line">
                              <div className="contentHeading mt-1">
                                 Forgot Password
                                 <img src={ul} alt="UnderLine" />
                              </div>
                           </div>

                           <div className="line">
                              <p>
                                 Please enter your registered email id to send OTP.
                              </p>
                           </div>

                           <div className="line mt-3">
                              <label htmlFor="emailId">Email Id</label>
                              <br></br>
                              <input type="text" name="emailId" id="emailId" placeholder="Enter Email Id" onChange={handleOnChange} onBlur={handleOnBlur} value={forgotPassDtls.emailId} />
                              <div className="ErrSection">{forgotPassDtlsErr.emailIdErr}</div>
                           </div>
                           <div className="line mt-1 my-2">
                              <button type="button" className={activeSendOTPBtn ? "disable sendOTPBtn" : "sendOTPBtn"} disabled={activeSendOTPBtn} onClick={handleSendOTP}>Send OTP</button>
                           </div>
                           <hr></hr>
                           <div className="line">
                              <label htmlFor="emailId">OTP</label>
                              <br></br>
                              <input type="text" name="otp" id="otp" placeholder="Enter OTP" className={disableNextSec ? "disable" : ""} onChange={handleOnChange} onBlur={handleOnBlur} value={forgotPassDtls.otp} disabled={disableNextSec} />
                              <div className="ErrSection">{forgotPassDtlsErr.otpErr}</div>
                           </div>
                           <div className="line">
                              <button onClick={handleResendPassword} className={disableNextSec ? "disable frgtPass" : "frgtPass"} disabled={disableNextSec} >Resend OTP</button>
                           </div>
                           <div className="line mt-2 mb-2">
                              <button type="submit" className={disableNextSec ? "disable loginBtn" : "loginBtn"} disabled={disableNextSec}>Submit</button>
                           </div>
                        </form>
                     </div>
                     :
                     <div className="forgotPasswordForm container my-4">
                        <form onSubmit={handleResetForgotPassword}>
                           <div className="line">
                              <div className="contentHeading mt-1">
                                 Forgot Password
                                 <img src={ul} alt="UnderLine" />
                              </div>
                           </div>
                           <div className="line mt-3">
                              <label htmlFor="password">New Password</label>
                              <br></br>
                              <input type="password" name="password" id="password" placeholder="Enter New Password" value={forgotPassDtls.password} onChange={handleOnChange} onBlur={handleOnBlur} />
                              <div className="ErrSection">{forgotPassDtlsErr.newPasswordErr}</div>
                           </div>
                           <div className="line">
                              <label htmlFor="password">Confirm Password</label>
                              <br></br>
                              <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" value={forgotPassDtls.confirmPassword} onChange={handleOnChange} onBlur={handleOnBlur} />
                              <div className="ErrSection">{forgotPassDtlsErr.confirmPasswordErr}</div>
                           </div>
                           <div className="line my-2">
                              <button type="submit" className="loginBtn" >Reset Password</button>
                           </div>
                        </form>
                     </div>
               }

            </div>
         </div>
      </>
   )
}