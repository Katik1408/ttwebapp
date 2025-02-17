import { useEffect, useRef, useState } from "react"
import { Dropdown, DropdownButton } from "react-bootstrap"
import { validEmailFormat } from "../../Utils/Regex/EmailRegex"
import { activeLoader, deactiveLoader } from "../../Redux/Slices/AccessLoader"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { APIs } from "../../Services/Env/Env"
import axios from "axios"
import toast from "react-hot-toast"
import ul from "../../Assets/Banner/ul.png"
import "./Enrollment.css"

export const Enrollment = () => {

   const [enrollmentForm, setEnrollmentForm] = useState({
      title: "",
      firstName: "",
      lastName: "",
      gender: "",
      dob: "",
      fresherOrExp: "",
      clgOrOfc: "",
      emailId: "",
      mobileNumber: "",
      courseName: "",
      otp: "",
      pin: "",
      addressLine: "",
      city: "",
      dist: "",
      state: "",
      resume: ""
   })

   const [enrollmentFormErr, setEnrollmentFormErr] = useState({
      titleErr: "",
      firstNameErr: "",
      lastNameErr: "",
      genderErr: "",
      dobErr: "",
      fresherOrExpErr: "",
      clgOrOfcErr: "",
      emailIdErr: "",
      mobileNumberErr: "",
      courseNameErr: "",
      otpErr: "",
      verifyErr: "",
      pinErr: "",
      addressLineErr: "",
      cityErr: "",
      distErr: "",
      stateErr: "",
      resumeErr: ""
   })

   const [dobType, setDobType] = useState("text");
   const [titleType, setTitleType] = useState(0)
   const [expType, setExpType] = useState(1)
   const fileInput = useRef(null);
   const [resumeFileName, setResumeFileName] = useState("");
   const [resumeFile, setResumeFile] = useState();
   const [disableOTPSendBtn, setDisableOTPSendBtn] = useState(true)
   const [disableAfterVerify, setDisableAfterVerify] = useState(false)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const selectTitle = (e) => {
      enrollmentForm.title = e
      setEnrollmentForm((prev) => ({ ...prev }));
      if (enrollmentForm.title.length === 0) {
         enrollmentFormErr.titleErr = "Please select";
         setEnrollmentFormErr((prev) => ({ ...prev }));
      } else {
         if (e === "Mr.") {
            enrollmentForm.gender = "Male"
            setEnrollmentForm((prev) => ({ ...prev }));
            setTitleType(1)
         } else if (e === "Mrs.") {
            enrollmentForm.gender = "Female"
            setEnrollmentForm((prev) => ({ ...prev }));
            setTitleType(2)
         } else if (e === "Miss") {
            enrollmentForm.gender = "Female"
            setEnrollmentForm((prev) => ({ ...prev }));
            setTitleType(2)
         }
         enrollmentFormErr.titleErr = "";
         setEnrollmentFormErr((prev) => ({ ...prev }));
      }

      console.log(enrollmentForm)
   }

   const selectCourse = (e) => {
      console.log(e)
      if (e === "course1") {
         enrollmentForm.courseName = "Data Science Course"
         setEnrollmentForm((prev) => ({ ...prev }));
         enrollmentFormErr.courseNameErr = ""
         setEnrollmentFormErr((prev) => ({ ...prev }));
      } else if (e === "course2") {
         enrollmentForm.courseName = "DBMS Course"
         setEnrollmentForm((prev) => ({ ...prev }));
         enrollmentFormErr.courseNameErr = ""
         setEnrollmentFormErr((prev) => ({ ...prev }));
      } else if (e === "course3") {
         enrollmentForm.courseName = "Basic & Advance Java Course"
         setEnrollmentForm((prev) => ({ ...prev }));
         enrollmentFormErr.courseNameErr = ""
         setEnrollmentFormErr((prev) => ({ ...prev }));
      } else if (e === "course4") {
         enrollmentForm.courseName = "ASP.NET Fullstack Course"
         setEnrollmentForm((prev) => ({ ...prev }));
         enrollmentFormErr.courseNameErr = ""
         setEnrollmentFormErr((prev) => ({ ...prev }));
      } else if (e === "course5") {
         enrollmentForm.courseName = "MEAN Stack Course"
         setEnrollmentForm((prev) => ({ ...prev }));
         enrollmentFormErr.courseNameErr = ""
         setEnrollmentFormErr((prev) => ({ ...prev }));
      } else if (e === "course6") {
         enrollmentForm.courseName = "MERN Stack Course"
         setEnrollmentForm((prev) => ({ ...prev }));
         enrollmentFormErr.courseNameErr = ""
         setEnrollmentFormErr((prev) => ({ ...prev }));
      }

   }

   const changeType = () => {
      setDobType(dobType === "date" ? "text" : "date")
   }

   const handleOnChange = (e) => {

      let { name, value } = e.target;


      switch (e.target.name) {
         case "gender":
            if (e.target.id === "male") {
               setTitleType(1)
            } else if (e.target.id === "female") {
               setTitleType(2)
            } else if (e.target.id === "other") {
               setTitleType(3)
            }
            break;

         case "fresherOrExp":
            if (e.target.id === "fresher") {
               setExpType(1)
               enrollmentFormErr.fresherOrExpErr = "";
            } else if (e.target.id === "exp") {
               setExpType(2)
               enrollmentFormErr.fresherOrExpErr = "";
            }
            setEnrollmentFormErr((prev) => ({ ...prev }));
            break;

         case "emailId":
            if (enrollmentForm.emailId.length === 0) {
               setDisableOTPSendBtn(true)
               enrollmentFormErr.emailIdErr = "Email ID Is Required"
            } else if (!validEmailFormat.test(enrollmentForm.emailId)) {
               setDisableOTPSendBtn(true)
               enrollmentFormErr.emailIdErr = "Enter Correct Email Id"
            } else {
               enrollmentFormErr.emailIdErr = "";
               setDisableOTPSendBtn(false)
            }
            setEnrollmentFormErr((prev) => ({ ...prev }));
            break;

         case "resume":
            setResumeFile(e.target.files[0])
            // console.log(resumeFile)

            const formData = new FormData();
            formData.append('file', e.target.files[0]);

            console.log(formData)

            const uploadResume = new Promise((resolve, reject) => {
               axios.post(APIs.enrollmentSection.UploadResume, formData, {
                  headers: {
                     'Content-Type': 'multipart/form-data',
                  }
               })
                  .then((response) => response.data)
                  .then((data) => {
                     console.log(data)
                  })
            })
            uploadResume
               .then(() => { })
               .catch(() => { })


            break;

         default:
            break;

      }
      setEnrollmentForm((prev) => ({ ...prev, [name]: value }));
   }

   const handleOnBlur = (e) => {
      if (e.target.id === "title") {
         if (enrollmentForm.title === "") {
            enrollmentFormErr.titleErr = "Select Title";
         } else {
            enrollmentFormErr.titleErr = "";
         }
         setEnrollmentFormErr((prev) => ({ ...prev }));
      }

      if (e.target.id === "courseName") {
         if (enrollmentForm.courseName.length === 0) {
            enrollmentFormErr.courseNameErr = "Course Name Is Required"
         } else {
            enrollmentFormErr.courseNameErr = "";
         }
         setEnrollmentFormErr((prev) => ({ ...prev }));
      }

      switch (e.target.name) {
         case "firstName":
            if (enrollmentForm.firstName === "") {
               enrollmentFormErr.firstNameErr = "Please Enter First Name";
            } else {
               enrollmentFormErr.firstNameErr = "";
            }
            setEnrollmentFormErr((prev) => ({ ...prev }));
            break;

         case "lastName":
            if (enrollmentForm.lastName === "") {
               enrollmentFormErr.lastNameErr = "Please Enter Last Name";
            } else {
               enrollmentFormErr.lastNameErr = "";
            }
            setEnrollmentFormErr((prev) => ({ ...prev }));
            break;

         case "gender":
            if (enrollmentForm.gender === "") {
               enrollmentFormErr.genderErr = "Please Select Gender";
            } else {
               enrollmentFormErr.genderErr = "";
            }
            setEnrollmentFormErr((prev) => ({ ...prev }));
            break;

         case "dob":
            if (enrollmentForm.dob === "") {
               enrollmentFormErr.dobErr = "Please Select Gender";
            } else {
               enrollmentFormErr.dobErr = "";
            }
            setEnrollmentFormErr((prev) => ({ ...prev }));
            break;

         case "fresherOrExp":
            if (enrollmentForm.fresherOrExp === "") {
               enrollmentFormErr.fresherOrExpErr = "Please Select Gender";
            } else {
               enrollmentFormErr.fresherOrExpErr = "";
            }
            setEnrollmentFormErr((prev) => ({ ...prev }));
            break;

         case "emailId":
            if (enrollmentForm.emailId.length === 0) {
               enrollmentFormErr.emailIdErr = "Email ID Is Required"
               setDisableOTPSendBtn(true)
            } else if (!validEmailFormat.test(enrollmentForm.emailId)) {
               enrollmentFormErr.emailIdErr = "Enter Correct Email Id"
               setDisableOTPSendBtn(true)
            } else {
               enrollmentFormErr.emailIdErr = "";
               setDisableOTPSendBtn(false)
            }
            setEnrollmentFormErr((prev) => ({ ...prev }));
            break;

         case "mobileNumber":
            if (enrollmentForm.mobileNumber.length === 0) {
               enrollmentFormErr.mobileNumberErr = "Mobile Number Is Required"
            } else if (enrollmentForm.mobileNumber.length !== 10) {
               enrollmentFormErr.emailIdErr = "Enter Correct Mobile Number"
            } else {
               enrollmentFormErr.emailIdErr = "";
            }
            setEnrollmentFormErr((prev) => ({ ...prev }));
            break;

         case "pin":
            if (enrollmentForm.pin.length === 0) {
               enrollmentFormErr.pinErr = "PIN Is Required"
               setEnrollmentFormErr((prev) => ({ ...prev }));
            } else if (enrollmentForm.pin.length !== 6) {
               enrollmentFormErr.pinErr = "PIN length should be 6"
               setEnrollmentFormErr((prev) => ({ ...prev }));
            } else if (enrollmentForm.pin.length === 6) {
               enrollmentFormErr.pinErr = ""
               setEnrollmentFormErr((prev) => ({ ...prev }));
               dispatch(activeLoader())
               const fetchPINDetails = new Promise((resolve, reject) => {
                  axios.get(`https://api.postalpincode.in/pincode/${enrollmentForm.pin}`)
                     .then((response) => response.data)
                     .then((data) => {
                        console.log(data[0])
                        if (data[0].Status === "Success") {
                           resolve(data[0])
                        } else if (data[0].Status === "Error") {
                           reject(data)
                        }
                     })
               })

               fetchPINDetails
                  .then((data) => {
                     // eslint-disable-next-line
                     data.PostOffice.map((x) => {
                        console.log(x)
                        if (x.BranchType === "Sub Post Office") {
                           enrollmentForm.city = x.Name;
                           enrollmentForm.dist = x.District;
                           enrollmentForm.state = x.State;
                           setEnrollmentForm((prev) => ({ ...prev }));

                        }
                     })
                     dispatch(deactiveLoader())
                  })
                  .catch((data) => {
                     toast.error(data.message)
                     dispatch(deactiveLoader())
                  })
            }
            break;

         default:
            break;
      }
   }

   const sendOTP = () => {
      if (enrollmentForm.emailId.length === 0) {
         enrollmentFormErr.emailIdErr = "Email ID Is Required"
         setDisableOTPSendBtn(true)
      } else if (!validEmailFormat.test(enrollmentForm.emailId)) {
         enrollmentFormErr.emailIdErr = "Enter Correct Email Id"
         setDisableOTPSendBtn(true)
      } else {
         enrollmentFormErr.emailIdErr = "";
         setDisableOTPSendBtn(false)
         dispatch(activeLoader())
         const sendEnrollemntOTP = new Promise((resolve, reject) => {
            axios.post(APIs.enrollmentSection.OTPEnrollmentForm, {
               params: {
                  emailId: enrollmentForm.emailId
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
         sendEnrollemntOTP
            .then((data) => {
               toast.success(data.data.message)
               dispatch(deactiveLoader())
            })
            .catch((data) => {
               toast.error(data.data.message)
               dispatch(deactiveLoader())
            })
      }
      setEnrollmentFormErr((prev) => ({ ...prev }));

   }

   const verifyOTP = () => {
      if (enrollmentForm.emailId.length === 0) {
         enrollmentFormErr.emailIdErr = "Email ID Is Required"
         setEnrollmentFormErr((prev) => ({ ...prev }));
      } else if (!validEmailFormat.test(enrollmentForm.emailId)) {
         enrollmentFormErr.emailIdErr = "Enter Correct Email Id"
         setEnrollmentFormErr((prev) => ({ ...prev }));
      } else if (enrollmentForm.otp.length === 0) {
         enrollmentFormErr.otpErr = "OTP Is Required"
         setEnrollmentFormErr((prev) => ({ ...prev }));
      } else if (enrollmentForm.otp.length !== 4) {
         enrollmentFormErr.otpErr = "Enter Correct OTP"
         setEnrollmentFormErr((prev) => ({ ...prev }));
      } else {
         enrollmentFormErr.emailIdErr = ""
         enrollmentFormErr.otpErr = ""
         enrollmentFormErr.verifyErr = ""
         setEnrollmentFormErr((prev) => ({ ...prev }));
         const verifyEnrollmentForm = new Promise((resolve, reject) => {
            axios.post(APIs.enrollmentSection.verifyEnrollmentForm, {
               params: {
                  emailId: enrollmentForm.emailId,
                  otp: enrollmentForm.otp
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
         verifyEnrollmentForm
            .then((data) => {
               toast.success(data.data.message)
               setDisableOTPSendBtn(true)
               setDisableAfterVerify(true)
               dispatch(deactiveLoader())
            })
            .catch((data) => {
               dispatch(deactiveLoader())
               setDisableOTPSendBtn(false)
               setDisableAfterVerify(false)
               toast.error(data.data.message)
            })
      }




      setEnrollmentFormErr((prev) => ({ ...prev }));
   }

   const handleSubmitForm = (e) => {
      e.preventDefault();
      console.log(enrollmentForm)
      if (enrollmentForm.title === "") {
         enrollmentFormErr.titleErr = "Please select";
         setEnrollmentFormErr((prev) => ({ ...prev }));
         toast.error("Please select Title")
      } else if (enrollmentForm.firstName === "") {
         enrollmentFormErr.firstNameErr = "Please Enter First Name";
         setEnrollmentFormErr((prev) => ({ ...prev }));
         toast.error("Please Enter First Name")
      } else if (enrollmentForm.lastName === "") {
         enrollmentFormErr.lasstNameErr = "Please Enter Last Name";
         setEnrollmentFormErr((prev) => ({ ...prev }));
         toast.error("Please Enter Last Name")
      } else if (enrollmentForm.gender === "") {
         enrollmentFormErr.genderErr = "Please Select Gender";
         setEnrollmentFormErr((prev) => ({ ...prev }));
         toast.error("Please Select Gender")
      } else if (enrollmentForm.dob === "") {
         enrollmentFormErr.dobErr = "Please Enter Your Date Of Birth";
         setEnrollmentFormErr((prev) => ({ ...prev }));
         toast.error("Please Enter Your Date Of Birth")
      } else if (enrollmentForm.fresherOrExp === "") {
         enrollmentFormErr.fresherOrExpErr = "Please Select Your Experience Type";
         setEnrollmentFormErr((prev) => ({ ...prev }));
         toast.error("Please Select Your Experience Type")
      } else if (enrollmentForm.clgOrOfc === "") {
         enrollmentFormErr.clgOrOfcErr = `Please Enter Your ${expType === 1 ? "College" : "Company"} Name`;
         setEnrollmentFormErr((prev) => ({ ...prev }));
         toast.error(`Please Enter Your ${expType === 1 ? "College" : "Company"} Name`)
      } else if (enrollmentForm.emailId === "") {
         enrollmentFormErr.emailIdErr = "Please Enter Your Email ID";
         setEnrollmentFormErr((prev) => ({ ...prev }));
         toast.error("Please Enter Your Email ID")
      } else if (disableAfterVerify === false) {
         enrollmentFormErr.verifyErr = "Please Verify"
         setEnrollmentFormErr((prev) => ({ ...prev }));
         toast.error("Please Verify Your Email ID")
      } else if (enrollmentForm.mobileNumber.length === 0) {
         enrollmentFormErr.mobileNumberErr = "Please Enter Your Mobile Number"
         setEnrollmentFormErr((prev) => ({ ...prev }));
         toast.error("Please Enter Your Mobile Number")
      } else if (enrollmentForm.mobileNumber.length !== 10) {
         enrollmentFormErr.mobileNumberErr = "Please Enter Correct Mobile Number"
         setEnrollmentFormErr((prev) => ({ ...prev }));
         toast.error("Please Enter Correct Mobile Number")
      } else if (enrollmentForm.courseName === "") {
         enrollmentFormErr.courseNameErr = "Please select course name";
         setEnrollmentFormErr((prev) => ({ ...prev }));
         toast.error("Please select Course Name")
      } else if (enrollmentForm.pin.length === 0) {
         enrollmentFormErr.pinErr = "Please Enter Your PIN"
         setEnrollmentFormErr((prev) => ({ ...prev }));
         toast.error("Please Enter Your PIN")
      } else if (enrollmentForm.pin.length !== 6) {
         enrollmentFormErr.pinErr = "Please Enter Correct PIN"
         setEnrollmentFormErr((prev) => ({ ...prev }));
         toast.error("Please Enter Correct PIN")
      } else if (enrollmentForm.addressLine === "") {
         enrollmentFormErr.addressLineErr = "Please Enter Your Address";
         setEnrollmentFormErr((prev) => ({ ...prev }));
         toast.error("Please Enter Your Address")
      } else if (enrollmentForm.city === "") {
         enrollmentFormErr.cityErr = "Please Enter Your City";
         setEnrollmentFormErr((prev) => ({ ...prev }));
         toast.error("Please Enter Your City")
      } else if (enrollmentForm.dist === "") {
         enrollmentFormErr.distErr = "Please Enter Your District";
         setEnrollmentFormErr((prev) => ({ ...prev }));
         toast.error("Please Enter Your District")
      } else if (enrollmentForm.state === "") {
         enrollmentFormErr.stateErr = "Please Enter Your State";
         setEnrollmentFormErr((prev) => ({ ...prev }));
         toast.error("Please Enter Your State")
      } else {
         dispatch(activeLoader())
         const saveEnrollmentDtls = new Promise((resolve, reject) => {
            axios.post(APIs.enrollmentSection.saveEnrollmentDtls, {
               params: enrollmentForm
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
         saveEnrollmentDtls
            .then((data) => {

               toast.success(data.data.message)
               dispatch(deactiveLoader())
               navigate("/thankyou")
            })
            .catch((data) => {

               toast.error(data.data.message)
               dispatch(deactiveLoader())
            })
      }
   }

   useEffect(() => {
      if (expType === 1) {
         enrollmentForm.fresherOrExp = "Fresher"
      }
   }, [expType, enrollmentForm])

   useEffect(() => {
      // console.log(document.getElementById("resume").files)
      if (enrollmentForm.resume !== "") {
         let resumePath = enrollmentForm.resume.split(".");
         let fileExtension = resumePath[resumePath.length - 1]
         let supportedFiles = ["pdf", "docx"];
         if (!supportedFiles.includes(fileExtension.toLowerCase())) {
            enrollmentFormErr.resumeErr = "Please provide PDF or docx file";
            setEnrollmentFormErr((prev) => ({ ...prev }));
            setResumeFileName("")
         } else {
            console.log(resumeFile.name)
            setResumeFileName(resumeFile.name)
            // let fileName = studentDetails.resume.split("\\");
            // setResumeFileName(fileName[fileName.length - 1])
            enrollmentFormErr.resumeErr = "";
            setEnrollmentFormErr((prev) => ({ ...prev }));
         }
      }
      // eslint-disable-next-line
   }, [enrollmentForm.resume])

   console.log(enrollmentForm)

   return (
      <>
         <div className="enrollmentSection">
            <div className="enrollmentContainer">
               <div className="pageHeadingSection">
                  <div className="pageHeading text-center animate__animated animate__bounceInDown">
                     Enrollment Form
                  </div>
               </div>
               <div className="enrollmentForm container my-4">
                  <form onSubmit={handleSubmitForm}>
                     <div className="line">
                        <div className="contentHeading mt-1">
                           Enrollment Form
                           <img src={ul} alt="UnderLine" />
                        </div>
                     </div>
                     <div className="line mt-3">
                        <div className="row">
                           <div className="col-md-2">
                              <label htmlFor="noOfEmp">Title</label>
                              <br></br>
                              <DropdownButton name="title" id="title" title={enrollmentForm.title === "" ? "Select" : enrollmentForm.title} onSelect={selectTitle} onBlur={handleOnBlur}>
                                 <Dropdown.Item eventKey={"Mr."}>Mr.</Dropdown.Item>
                                 <Dropdown.Item eventKey={"Mrs."}>Mrs.</Dropdown.Item>
                                 <Dropdown.Item eventKey={"Miss"}>Miss</Dropdown.Item>
                              </DropdownButton>
                              <div className="ErrSection">
                                 {enrollmentFormErr.titleErr}
                              </div>
                           </div>
                           <div className="col-md-5">
                              <label htmlFor="fullname">First Name</label>
                              <br></br>
                              <input type="text" name="firstName" id="firstName" placeholder="Enter First Name" value={enrollmentForm.firstName} onChange={handleOnChange} onBlur={handleOnBlur} />
                              <div className="ErrSection">{enrollmentFormErr.firstNameErr}</div>
                           </div>
                           <div className="col-md-5">
                              <label htmlFor="lastName">Last Name</label>
                              <br></br>
                              <input type="text" name="lastName" id="lastName" placeholder="Enter Last Name" value={enrollmentForm.lastName} onChange={handleOnChange} onBlur={handleOnBlur} />
                              <div className="ErrSection">{enrollmentFormErr.lastNameErr}</div>
                           </div>
                        </div>
                     </div>
                     <div className="line">
                        <div className="row">
                           <div className="col-md-7 radioBtnSection">
                              <label htmlFor="companyType">Gender</label>
                              <br></br>
                              <div className="radioBtnRow">
                                 <span>
                                    <input type="radio" name="gender" id="male" onChange={handleOnChange} value="Male" checked={titleType === 1 ? true : false} /> Male
                                 </span>
                                 <span>
                                    <input type="radio" name="gender" id="female" onChange={handleOnChange} value="Female" checked={titleType === 2 ? true : false} /> Female
                                 </span>
                                 <span>
                                    <input type="radio" name="gender" id="other" onChange={handleOnChange} value="Other" checked={titleType === 3 ? true : false} /> Other
                                 </span>
                                 <div className="ErrSection">{enrollmentFormErr.genderErr}</div>
                              </div>
                           </div>
                           <div className="col-md-5">
                              <label htmlFor="dob">Date Of Birth</label>
                              <br></br>
                              <input type={dobType} name="dob" id="dob" placeholder="Enter Date Of Birth" value={enrollmentForm.dob} onChange={handleOnChange} onFocus={changeType} onBlur={handleOnBlur} />
                              <div className="ErrSection">{enrollmentFormErr.dobErr}</div>
                           </div>
                        </div>
                     </div>
                     <div className="line">
                        <div className="row">
                           <div className="col-md-6 radioBtnSection">
                              <label htmlFor="fresherOrExp">Experience Type</label>
                              <br></br>
                              <div className="radioBtnRow">
                                 <span>
                                    <input type="radio" name="fresherOrExp" id="fresher" onChange={handleOnChange} value="Fresher" checked={expType === 1 ? true : false} /> Fresher
                                 </span>
                                 <span>
                                    <input type="radio" name="fresherOrExp" id="exp" onChange={handleOnChange} value="Experienced" checked={expType === 2 ? true : false} /> Experience
                                 </span>
                                 <div className="ErrSection">{enrollmentFormErr.fresherOrExpErr}</div>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <label htmlFor="fullname">{expType === 1 ? "College" : "Company"} Name</label>
                              <br></br>
                              <input type="text" name="clgOrOfc" id="clgOrOfc" placeholder={`Enter ${expType === 1 ? "College" : "Company"}  Name`} value={enrollmentForm.clgOrOfc} onChange={handleOnChange} onBlur={handleOnBlur} />
                              <div className="ErrSection">{enrollmentFormErr.clgOrOfcErr}</div>
                           </div>
                        </div>
                     </div>
                     <div className="line">
                        <div className="row">
                           <div className="col-md-6">
                              <label htmlFor="dob">Email ID</label>
                              <br></br>
                              <input type="text" name="emailId" id="emailId" className={disableAfterVerify ? "disable" : ""} placeholder="Enter Email ID" value={enrollmentForm.emailId} onChange={handleOnChange} onBlur={handleOnBlur} disabled={disableAfterVerify} />
                              <div className="ErrSection">{enrollmentFormErr.emailIdErr}</div>
                           </div>
                           <div className="col-md-2">
                              <label></label>
                              <br></br>
                              <button className={disableOTPSendBtn ? "disable otpBtn" : "otpBtn"} type="button" onClick={sendOTP} disabled={disableOTPSendBtn}>Send OTP</button>
                           </div>
                           <div className="col-md-2">
                              <label></label>
                              <br></br>
                              <input type="number" className={disableAfterVerify ? "disable otpInput" : " otpInput"} name="otp" id="otp" maxLength={4} placeholder="Enter OTP" onChange={handleOnChange} onBlur={handleOnBlur} disabled={disableAfterVerify} />
                              <div className="ErrSection">{enrollmentFormErr.otpErr}</div>
                           </div>
                           <div className="col-md-2">
                              <label></label>
                              <br></br>
                              <button className={disableAfterVerify ? "disable otpBtn" : "otpBtn"} type="button" onClick={verifyOTP} disabled={disableAfterVerify}>Verify OTP</button>
                              <div className="ErrSection">{enrollmentFormErr.verifyErr}</div>
                           </div>
                        </div>
                     </div>
                     <div className="line">
                        <div className="row">
                           <div className="col-md-6">
                              <label htmlFor="fullname">Mobile Number</label>
                              <br></br>
                              <input type="number" name="mobileNumber" id="mobileNumber" placeholder={`Enter Mobile Number`} value={enrollmentForm.mobileNumber} onChange={handleOnChange} onBlur={handleOnBlur} />
                              <div className="ErrSection">{enrollmentFormErr.mobileNumberErr}</div>
                           </div>
                           <div className="col-md-6">
                              <label htmlFor="courseName">Course Name</label>
                              <br></br>
                              <DropdownButton name="courseName" id="courseName" title={enrollmentForm.courseName === "" ? "Select" : enrollmentForm.courseName} onSelect={selectCourse} onBlur={handleOnBlur}>
                                 <Dropdown.Item eventKey={"course1"}>Data Science Course</Dropdown.Item>
                                 <Dropdown.Item eventKey={"course2"}>DBMS Course</Dropdown.Item>
                                 <Dropdown.Item eventKey={"course3"}>Basic & Advance Java Course</Dropdown.Item>
                                 <Dropdown.Item eventKey={"course4"}>ASP.NET Fullstack Course</Dropdown.Item>
                                 <Dropdown.Item eventKey={"course5"}>MEAN Stack Course</Dropdown.Item>
                                 <Dropdown.Item eventKey={"course6"}>MERN Stack Course</Dropdown.Item>
                              </DropdownButton>
                              <div className="ErrSection">
                                 {enrollmentFormErr.courseNameErr}
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="line">
                        <div className="row">
                           <div className="col-md-4">
                              <label htmlFor="fullname">PIN</label>
                              <br></br>
                              <input type="number" name="pin" id="pin" placeholder={`Enter Postal PIN`} value={enrollmentForm.pin} onChange={handleOnChange} onBlur={handleOnBlur} />
                              <div className="ErrSection">{enrollmentFormErr.pinErr}</div>
                           </div>
                           <div className="col-md-8">
                              <label htmlFor="fullname">Address</label>
                              <br></br>
                              <input type="textArea" name="addressLine" id="addressLine" placeholder={`Enter Address`} value={enrollmentForm.addressLine} onChange={handleOnChange} onBlur={handleOnBlur} />
                              <div className="ErrSection">{enrollmentFormErr.addressLineErr}</div>
                           </div>
                        </div>
                     </div>
                     <div className="line">
                        <div className="row">
                           <div className="col-md-4">
                              <label htmlFor="fullname">City</label>
                              <br></br>
                              <input type="text" name="city" id="city" placeholder={`Enter City`} value={enrollmentForm.city} onChange={handleOnChange} onBlur={handleOnBlur} />
                              <div className="ErrSection">{enrollmentFormErr.cityErr}</div>
                           </div>
                           <div className="col-md-4">
                              <label htmlFor="fullname">District</label>
                              <br></br>
                              <input type="text" name="dist" id="dist" placeholder={`Enter District`} value={enrollmentForm.dist} onChange={handleOnChange} onBlur={handleOnBlur} />
                              <div className="ErrSection">{enrollmentFormErr.distErr}</div>
                           </div>
                           <div className="col-md-4">
                              <label htmlFor="fullname">State</label>
                              <br></br>
                              <input type="text" name="state" id="state" placeholder={`Enter State`} value={enrollmentForm.state} onChange={handleOnChange} onBlur={handleOnBlur} />
                              <div className="ErrSection">{enrollmentFormErr.stateErr}</div>
                           </div>
                        </div>
                     </div>
                     <div className="line my-2">
                        <div className="row">
                           <div className="col-md-6 form-group">
                              <input type="file" name="resume" id="resume" ref={fileInput} placeholder='Upload Resume' value={enrollmentForm.resume}
                                 onChange={handleOnChange} style={{ display: 'none' }} />

                              <button type='button' className='upload-btn' onClick={() => fileInput.current.click()}>
                                 Upload Resume&nbsp;<span className='optional'>{`(Optional)`}</span>
                              </button>
                              <div className="err resumeErr">
                                 {enrollmentFormErr.resumeErr}
                              </div>
                           </div>
                           <div className="col-md-6">
                              <input type='text' name='resumeFileName' placeholder='Uploaded file Name' value={resumeFileName} disabled />
                              <div className="err resumeErr"></div>
                           </div>
                        </div>
                     </div>
                     <div className="line mt-3 mb-2">
                        <div className="row">
                           <div className="col-md-6">
                              <button type="reset" className="clear_btn">Clear</button>
                           </div>
                           <div className="col-md-6">
                              <button type="submit" className="submit_btn">Submit</button>
                           </div>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </>
   )
}