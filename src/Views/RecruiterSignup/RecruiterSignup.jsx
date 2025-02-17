import { NavLink, useNavigate } from "react-router-dom"
import { useState } from "react"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ul from "../../Assets/Banner/ul.png"
import "./RecruiterSignup.css"
import { validEmailFormat } from "../../Utils/Regex/EmailRegex";
import axios from "axios";
import { APIs } from "../../Services/Env/Env";
import { useDispatch } from "react-redux";
import { activeLoader, deactiveLoader } from "../../Redux/Slices/AccessLoader";
import toast from "react-hot-toast";

export const RecruiterSignup = () => {

   const dispatch = useDispatch()
   const [consultencyOrCompany, setConsultencyOrCompany] = useState(0)
   const navigate = useNavigate()
   const [passwordType, setPasswordType] = useState("text")
   const [verifyEmail, setVerifyEmail] = useState(true)
   const [recruiterDtl, setRecruiterDtl] = useState({
      fullName: "",
      contactNumber: "",
      emailId: "",
      password: "",
      organizationType: "",
      OrganizationName: "",
      noOfEmp: "",
      designation: "",
      city: "",
      state: "",
      otp: ""
   })

   const [recruiterDtlErr, setRecruiterDtlErr] = useState({
      fullNameErr: "",
      contactNumberErr: "",
      emailIdErr: "",
      passwordErr: "",
      organizationTypeErr: "",
      OrganizationNameErr: "",
      noOfEmpErr: "",
      designationErr: "",
      cityErr: "",
      stateErr: "",
      otpErr: ""
   })

   const handlePasswordOnClick = (e) => {
      if (e.target.id === "password") {
         if (e.target.value.length !== 0) {
            setPasswordType("password")
         } else {
            setPasswordType("text")
         }
      }
   }

   const selectNoOfEmp = (e) => {
      if (e === "1") {
         recruiterDtl.noOfEmp = "0 - 50";
      } else if (e === "2") {
         recruiterDtl.noOfEmp = "51 - 200"
      } else if (e === "3") {
         recruiterDtl.noOfEmp = "201 - 1000"
      } else if (e === "4") {
         recruiterDtl.noOfEmp = "1001 & Above"
      }
      setRecruiterDtl((prev) => ({ ...prev }));
   }

   const changeConsultencyOrCompany = (a) => {
      setConsultencyOrCompany(a)
      let orgType = a === 0 ? "Consultancy" : "Company"
      recruiterDtl.organizationType = orgType;
      setRecruiterDtl((prev) => ({ ...prev }));
   }

   const handleOnChange = (e) => {
      if (e.target.id === "password") {
         if (e.target.value.length === 0) {
            setPasswordType("text")
         }
      }

      let { name, value } = e.target;
      setRecruiterDtl((prev) => ({ ...prev, [name]: value }));
   }

   const handleOnBlur = (e) => {
      switch (e.target.id) {
         case "fullName":
            if (recruiterDtl.fullName.length === 0) {
               recruiterDtlErr.fullNameErr = "Full Name Is Required"
            } else {
               recruiterDtlErr.fullNameErr = ""
            }
            break;
         case "contactNumber":
            if (recruiterDtl.contactNumber.length === 0) {
               recruiterDtlErr.contactNumberErr = "Contact Number Is Required"
            } else if (recruiterDtl.contactNumber.length !== 10) {
               recruiterDtlErr.contactNumberErr = "Contact Number Is Length Should Be 10"
            } else {
               recruiterDtlErr.contactNumberErr = ""
            }
            break;
         case "emailId":
            if (recruiterDtl.emailId.length === 0) {
               recruiterDtlErr.emailIdErr = "Email ID Is Required"
            } else {
               if (!validEmailFormat.test(recruiterDtl.emailId)) {
                  recruiterDtlErr.emailIdErr = "Enter Correct Email Id"
               } else {
                  recruiterDtlErr.emailIdErr = ""
               }
            }
            break;
         case "password":
            if (recruiterDtl.password.length === 0) {
               setPasswordType("text")
               recruiterDtlErr.passwordErr = "Password Is Required"
            } else if (recruiterDtl.password.length !== 6) {
               setPasswordType("password")
               recruiterDtlErr.passwordErr = "Password Length Should Be 6"
            } else if (recruiterDtl.password.length === 6) {
               setPasswordType("password")
               recruiterDtlErr.passwordErr = ""
            }
            break;
         case "OrganizationName":
            if (recruiterDtl.OrganizationName.length === 0) {
               recruiterDtlErr.OrganizationNameErr = consultencyOrCompany === 0 ? "Consultancy Name Is Required" : "Company Name Is Required"
            } else {
               recruiterDtlErr.OrganizationNameErr = ""
            }
            break;
         case "designation":
            if (recruiterDtl.designation.length === 0) {
               recruiterDtlErr.designationErr = "Designation Is Required"
            } else {
               recruiterDtlErr.designationErr = ""
            }
            break;

         case "noOfEmp":
            if (recruiterDtl.noOfEmp === "") {
               recruiterDtlErr.noOfEmpErr = "Please select Number Of Employees"
            } else {
               recruiterDtlErr.noOfEmpErr = ""
            }
            break;
         case "city":
            if (recruiterDtl.city.length === 0) {
               recruiterDtlErr.cityErr = "city Is Required"
            } else {
               recruiterDtlErr.cityErr = ""
            }
            break;
         case "state":
            if (recruiterDtl.state.length === 0) {
               recruiterDtlErr.stateErr = "State Is Required"
            } else {
               recruiterDtlErr.stateErr = ""
            }
            break;

         case "otp":
            if (recruiterDtl.otp.length === 0) {
               recruiterDtlErr.stateErr = "OTP Is Required"
            } else if (recruiterDtl.otp.length !== 6) {
               recruiterDtlErr.stateErr = "Enter Correct OTP"
            } else {
               recruiterDtlErr.stateErr = ""
            }
            break;
         default:
            break;
      }
      setRecruiterDtlErr((prev) => ({ ...prev }));
   }

   const sendToBack = (e) => {
      setVerifyEmail(true)
   }

   const handleSignup = (e) => {
      e.preventDefault();

      if (recruiterDtl.fullName.length === 0) {
         recruiterDtlErr.fullNameErr = "Full Name Required"
         setRecruiterDtlErr((prev) => ({ ...prev }));
      } else if (recruiterDtl.contactNumber.length !== 10) {
         recruiterDtlErr.contactNumberErr = "Contact Number Is Required"
         setRecruiterDtlErr((prev) => ({ ...prev }));
      } else if (recruiterDtl.emailId.length === 0) {
         recruiterDtlErr.emailIdErr = "Email Id Is Required"
         setRecruiterDtlErr((prev) => ({ ...prev }));
      } else if (!validEmailFormat.test(recruiterDtl.emailId)) {
         recruiterDtlErr.emailIdErr = "Email Id Should Be Correct"
         setRecruiterDtlErr((prev) => ({ ...prev }));
      } else if (recruiterDtl.password.length === 0) {
         recruiterDtlErr.passwordErr = "Password Is Required"
         setRecruiterDtlErr((prev) => ({ ...prev }));
      } else if (recruiterDtl.password.length !== 6) {
         recruiterDtlErr.passwordErr = "Password Length Should Be 6"
         setRecruiterDtlErr((prev) => ({ ...prev }));
      } else if (recruiterDtl.OrganizationName.length === 0) {
         recruiterDtlErr.OrganizationNameErr = consultencyOrCompany === 0 ? "Consultancy Name Is Required" : "Company Name Is Required"
         setRecruiterDtlErr((prev) => ({ ...prev }));
      } else if (recruiterDtl.designation.length === "") {
         recruiterDtlErr.designationErr = "Designation Is Required"
         setRecruiterDtlErr((prev) => ({ ...prev }));
      } else if (recruiterDtl.noOfEmp === "") {
         recruiterDtlErr.noOfEmpErr = "Number of Employees Is Required"
         setRecruiterDtlErr((prev) => ({ ...prev }));
      } else if (recruiterDtl.city.length === 0) {
         recruiterDtlErr.passwordErr = "City Is Required"
         setRecruiterDtlErr((prev) => ({ ...prev }));
      } else if (recruiterDtl.state.length === 0) {
         recruiterDtlErr.passwordErr = "State Is Required"
         setRecruiterDtlErr((prev) => ({ ...prev }));
      } else {

         dispatch(activeLoader())
         const sendOTP = new Promise((resolve, reject) => {
            axios.post(APIs.recruiterSection.sendOTP, {
               params: {
                  emailId: recruiterDtl.emailId,
                  name: recruiterDtl.fullName
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
               setVerifyEmail(false)
               dispatch(deactiveLoader())
            })
            .catch((data) => {
               toast.success(data.data.message)
               dispatch(deactiveLoader())
            })
      }
   }

   const handleVerifyEmailId = (e) => {
      e.preventDefault()

      if (recruiterDtl.otp.length === 0) {
         recruiterDtlErr.otpErr = "Please Enter the OTP"
         setRecruiterDtlErr((prev) => ({ ...prev }));
      } else if (recruiterDtl.otp.length !== 4) {
         recruiterDtlErr.otpErr = "OTP Length Should Be 4"
         setRecruiterDtlErr((prev) => ({ ...prev }));
      } else if (recruiterDtl.otp.length === 4) {
         dispatch(activeLoader())
         const verifyOTP = new Promise((resolve, reject) => {
            axios.post(APIs.recruiterSection.verifyOTP, {
               params: recruiterDtl
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
         verifyOTP
            .then((data) => {
               toast.success(data.data.message)
               dispatch(deactiveLoader())
               navigate("/thankyou")
            })
            .catch((data, err) => {
               console.log(err)
               toast.error(data.data.message)
               dispatch(deactiveLoader())
            })

      }
   }

   return (
      <>
         <div className="signupSection">
            <div className="singupContainer">
               <div className="pageHeadingSection">
                  <div className="pageHeading text-center animate__animated animate__bounceInDown">
                     Recruiter Signup
                  </div>
               </div>
               {
                  verifyEmail ?
                     <div className="signupForm container my-4">
                        <form onSubmit={handleSignup}>
                           <div className="line">
                              <div className="contentHeading mt-1">
                                 Signup
                                 <img src={ul} alt="UnderLine" />
                              </div>
                           </div>

                           <div className="line ">
                              <div className="row">
                                 <div className="col-md-6">
                                    <label htmlFor="fullname">Full Name</label>
                                    <br></br>
                                    <input type="text" name="fullName" id="fullName" placeholder="Enter Full Name" value={recruiterDtl.fullName} onChange={handleOnChange} onBlur={handleOnBlur} />
                                    <div className="ErrSection">{recruiterDtlErr.fullNameErr}</div>
                                 </div>
                                 <div className="col-md-6">
                                    <label htmlFor="contactNumber">Contact Number</label>
                                    <br></br>
                                    <input type="number" name="contactNumber" id="contactNumber" placeholder="Enter Contact Number" value={recruiterDtl.contactNumber} onChange={handleOnChange} onBlur={handleOnBlur} />
                                    <div className="ErrSection">{recruiterDtlErr.contactNumberErr}</div>
                                 </div>
                              </div>
                           </div>

                           <div className="line">
                              <div className="row">
                                 <div className="col-md-6">
                                    <label htmlFor="emailId">Email Id</label>
                                    <br></br>
                                    <input type="text" name="emailId" id="emailId" placeholder="Enter Email Id" value={recruiterDtl.emailId} onChange={handleOnChange} onBlur={handleOnBlur} />
                                    <div className="ErrSection">{recruiterDtlErr.emailIdErr}</div>
                                 </div>
                                 <div className="col-md-6">
                                    <label htmlFor="password">Password</label>
                                    <br></br>
                                    <input type={passwordType} name="password" id="password" onClick={handlePasswordOnClick} placeholder="Enter Password" value={recruiterDtl.password} onChange={handleOnChange} onBlur={handleOnBlur} />
                                    <div className="ErrSection">{recruiterDtlErr.passwordErr}</div>
                                 </div>
                              </div>
                           </div>

                           <div className="line">
                              <div className="row">
                                 <div className="col-md-6 radioBtnSection">
                                    <label htmlFor="companyType">Organization Type</label>
                                    <br></br>
                                    <div className="radioBtnRow">
                                       <span>
                                          <input type="radio" name="companyType" id="consultancy" onChange={handleOnChange} value={recruiterDtl.organizationType} onClick={() => changeConsultencyOrCompany(0)} checked={consultencyOrCompany === 0 ? true : false} /> Consultancy
                                       </span>
                                       <span>
                                          <input type="radio" name="companyType" id="company" onChange={handleOnChange} value={recruiterDtl.organizationType} onClick={() => changeConsultencyOrCompany(1)} checked={consultencyOrCompany === 1 ? true : false} /> Company
                                       </span>
                                       <div className="ErrSection">{recruiterDtlErr.organizationTypeErr}</div>
                                    </div>
                                 </div>
                                 <div className="col-md-6">
                                    <label htmlFor="OrganizationName">{consultencyOrCompany === 0 ? "Consultancy" : "Company"}&nbsp;Name</label>
                                    <br></br>
                                    <input type="text" name="OrganizationName" id="OrganizationName" placeholder={consultencyOrCompany === 0 ? "Enter Consultancy Name" : "Enter Company Name"} value={recruiterDtl.OrganizationName} onChange={handleOnChange} onBlur={handleOnBlur} />
                                    <div className="ErrSection">{recruiterDtlErr.OrganizationNameErr}</div>
                                 </div>
                              </div>
                           </div>

                           <div className="line">
                              <div className="row">
                                 <div className="col-md-6">
                                    <label htmlFor="designation">Designation</label>
                                    <br></br>
                                    <input type="text" name="designation" id="designation" placeholder="Enter Your Designation" value={recruiterDtl.designation} onChange={handleOnChange} onBlur={handleOnBlur} />
                                    <div className="ErrSection">{recruiterDtlErr.designationErr}</div>
                                 </div>
                                 <div className="col-md-6">
                                    <label htmlFor="noOfEmp">No Of Employees</label>
                                    <br></br>
                                    <DropdownButton id="noOfEmp" title={recruiterDtl.noOfEmp === "" ? "Select" : recruiterDtl.noOfEmp} onSelect={selectNoOfEmp} onBlur={handleOnBlur}>
                                       <Dropdown.Item eventKey={1}>0 - 50</Dropdown.Item>
                                       <Dropdown.Item eventKey={2}>51 - 200</Dropdown.Item>
                                       <Dropdown.Item eventKey={3}>201 - 1000</Dropdown.Item>
                                       <Dropdown.Item eventKey={4}>1001 & Above</Dropdown.Item>
                                    </DropdownButton>
                                    <div className="ErrSection">{recruiterDtlErr.noOfEmpErr}</div>
                                 </div>
                              </div>
                           </div>

                           <div className="line">
                              <div className="row">
                                 <div className="col-md-6">
                                    <label htmlFor="city">City</label>
                                    <br></br>
                                    <input type="text" name="city" id="city" placeholder="Enter City" value={recruiterDtl.city} onChange={handleOnChange} onBlur={handleOnBlur} />
                                    <div className="ErrSection">{recruiterDtlErr.cityErr}</div>
                                 </div>
                                 <div className="col-md-6">
                                    <label htmlFor="state">State</label>
                                    <br></br>
                                    <input type="text" name="state" id="state" placeholder="Enter State" value={recruiterDtl.state} onChange={handleOnChange} onBlur={handleOnBlur} />
                                    <div className="ErrSection">{recruiterDtlErr.stateErr}</div>
                                 </div>
                              </div>
                           </div>

                           <div className="line mt-2">
                              <div className="row">
                                 <div className="col-md-6">
                                    <button type="button" className="cancelBtn">Cancel</button>
                                 </div>
                                 <div className="col-md-6">
                                    <button type="submit" className="signupBtn">SignUp</button>
                                 </div>
                              </div>
                           </div>

                           <hr></hr>

                           <div className="line text-center my-2">
                              Already have an account? <NavLink to="/recruiterlogin">Login</NavLink>   {/*<span className="signupBtn" onClick={handleForgotPassword}>Sign Up</span> */}
                           </div>
                        </form>
                     </div>
                     :
                     <div className="verifyEmailId my-4">
                        <form onSubmit={handleVerifyEmailId}>
                           <div className="line">
                              <div className="contentHeading mt-1">
                                 Verify Email ID
                                 <img src={ul} alt="UnderLine" />
                              </div>
                           </div>

                           <div className="line">
                              OTP is shared with below mention email id
                              <br></br>
                              <span className="EmailId">{recruiterDtl.emailId}</span>
                           </div>

                           <div className="line">
                              <label htmlFor="otp">Enter OTP</label>
                              <br></br>
                              <input type="number" name="otp" id="otp" placeholder="Enter OTP" value={recruiterDtl.otp} onChange={handleOnChange} onBlur={handleOnBlur} />
                              <div className="ErrSection">{recruiterDtlErr.otpErr}</div>
                           </div>

                           <div className="line my-3">
                              <div className="row">
                                 <div className="col-md-6">
                                    <button type="button" className="backBtn" onClick={sendToBack}>Back</button>
                                 </div>
                                 <div className="col-md-6">
                                    <button type="submit" className="verifyBtn">Verify</button>
                                 </div>
                              </div>
                           </div>

                           <hr></hr>

                           <div className="line text-center my-2">
                              Already have an account? <NavLink to="/recruiterlogin">Login</NavLink>
                           </div>

                        </form>
                     </div>
               }
            </div>
         </div>
      </>
   )
}