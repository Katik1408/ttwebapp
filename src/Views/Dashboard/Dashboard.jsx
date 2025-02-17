import banner1 from "../../Assets/Banner/banner1.jpeg"
import banner2 from "../../Assets/Banner/banner2.jpeg"
import banner3 from "../../Assets/Banner/banner3.jpeg"
import banner4 from "../../Assets/Banner/banner4.jpeg"
import banner5 from "../../Assets/Banner/banner5.jpeg"
import ul from "../../Assets/Banner/ul.png"
import java from "../../Assets/Course/java.jpeg"
import net from "../../Assets/Course/fullstack-net.png"
import ds from "../../Assets/Course/data-science.jpg"
import dbms from "../../Assets/Course/DBMS.jpg"
import mern from "../../Assets/Course/mern.png"
import mean from "../../Assets/Course/mean.png"
import { SlCalender } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa6";
import { FaHandPointRight } from "react-icons/fa";
import "./Dashboard.css"
import { useState } from "react"

export const Dashboard = () => {

   const [fingerActive, setFingerActive] = useState(1)
   const [courseUpdate, setcourseUpdate] = useState({
      courseImg: ds,
      courseName: "Data Science Course",
      AcctualPrice: "40000",
      offeredPrice: "35000"
   })

   const handleClickOnCourse = (id) => {
      // console.log(id)
      let a = document.getElementsByClassName("courseName").length;
      for (let i = 0; i < a; i++) {
         let clsName = document.getElementsByClassName("courseName")[i].className;
         if (clsName.split(" ").includes("active")) {
            document.getElementsByClassName("courseName")[i].className = "courseName"
         }
      }

      switch (id) {
         case "ds":
            setFingerActive(1)
            setcourseUpdate({
               courseImg: ds,
               courseName: "Data Science Course",
               AcctualPrice: "40000",
               offeredPrice: "35000"
            })
            break;
         case "dbms":
            setFingerActive(2)
            setcourseUpdate({
               courseImg: dbms,
               courseName: "DBMS Course",
               AcctualPrice: "30000",
               offeredPrice: "25000"
            })
            break;
         case "java":
            setFingerActive(3)
            setcourseUpdate({
               courseImg: java,
               courseName: "Basic & Advance Java Course",
               AcctualPrice: "35000",
               offeredPrice: "30000"
            })
            break;
         case "net":
            setFingerActive(4)
            setcourseUpdate({
               courseImg: net,
               courseName: "ASP.Net FullStack Course",
               AcctualPrice: "40000",
               offeredPrice: "35000"
            })
            break;
         case "mern":
            setFingerActive(5)
            setcourseUpdate({
               courseImg: mern,
               courseName: "MERN Stack Course",
               AcctualPrice: "30000",
               offeredPrice: "26000"
            })
            break;
         case "mean":
            setFingerActive(6)
            setcourseUpdate({
               courseImg: mean,
               courseName: "MEAN Stack Course",
               AcctualPrice: "32000",
               offeredPrice: "27000"
            })
            break;
         default:
            break;
      }
      document.getElementById(id).className = "courseName active"
   }

   return (
      <>
         <div className="dashboardSection">
            <div className="dashboardContainer">
               <div className="bannerSection mt-2">
                  <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                     <div className="carousel-inner container">
                        <div className="carousel-item active" data-bs-interval="5000">
                           <img src={banner1} className=" d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                           <img src={banner2} className=" d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                           <img src={banner3} className=" d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                           <img src={banner4} className=" d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                           <img src={banner5} className=" d-block w-100" alt="..." />
                        </div>
                     </div>
                     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                     </button>
                     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                     </button>
                  </div>
               </div>
               <div className="trendingCourseSection my-3">
                  <div className="subHeading text-center">
                     Trending Course
                     <img src={ul} alt="UnderLine" />
                  </div>
                  <div className="row courseRow mt-2">
                     <div className="col-md-3">
                        <div className="course javaCourse">

                           <div className="imgSection">
                              <img src={java} alt="Java Course" />
                           </div>
                           <div className="durationSection">
                              <SlCalender />&nbsp;6–7 Months&nbsp;&nbsp;<FaRegClock />&nbsp;700+ Hours
                           </div>
                           <div className="courseNameSection">
                              Basic & Advance Java Course
                           </div>
                           <div className="courseDesc">
                              <div className="row">
                                 <div className="col-md-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#074777" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                                 </div>
                                 <div className="col-md-11">
                                    Learn Enterprise application development using Java
                                 </div>
                              </div>
                              <hr />
                              <div className="row">
                                 <div className="col-md-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#074777" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                                 </div>
                                 <div className="col-md-11">
                                    Learn fullstack web Development using Spring Boot
                                 </div>
                              </div>
                              <hr />
                              <div className="row">
                                 <div className="col-md-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#074777" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                                 </div>
                                 <div className="col-md-11">
                                    Front end design with React
                                 </div>
                              </div>
                              <hr />
                              <div className="row">
                                 <div className="col-md-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#074777" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                                 </div>
                                 <div className="col-md-11">
                                    Top companies are hiring fullstack java developers
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-md-3 ">
                        <div className="course aspFullStack">
                           <div className="imgSection">
                              <img src={net} alt=".Net Course" />
                           </div>
                           <div className="durationSection">
                              <SlCalender />&nbsp;6–7 Months&nbsp;&nbsp;<FaRegClock />&nbsp;700+ Hours
                           </div>
                           <div className="courseNameSection">
                              Dot Net FullStack
                           </div>
                           <div className="courseDesc">
                              <div className="row">
                                 <div className="col-md-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#074777" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                                 </div>
                                 <div className="col-md-11">
                                    Learn web application development using .Net core and web API
                                 </div>
                              </div>
                              <hr />
                              <div className="row">
                                 <div className="col-md-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#074777" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                                 </div>
                                 <div className="col-md-11">
                                    Front end design with Angular
                                 </div>
                              </div>
                              <hr />
                              <div className="row">
                                 <div className="col-md-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#074777" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                                 </div>
                                 <div className="col-md-11">
                                    Top companies are hiring fullstack. Net developers
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-md-3">
                        <div className="course mern">
                           <div className="imgSection">
                              <img src={mern} alt="MERN" />
                           </div>
                           <div className="durationSection">
                              <SlCalender />&nbsp;6–7 Months&nbsp;&nbsp;<FaRegClock />&nbsp;700+ Hours
                           </div>
                           <div className="courseNameSection">
                              MERN FullStack
                           </div>
                           <div className="courseDesc">
                              <div className="row">
                                 <div className="col-md-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#074777" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                                 </div>
                                 <div className="col-md-11">
                                    Learn MERN stack together under single course
                                 </div>
                              </div>
                              <hr />
                              <div className="row">
                                 <div className="col-md-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#074777" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                                 </div>
                                 <div className="col-md-11">
                                    In-depth knowledge of both front end and back end JavaScript based technologies.
                                 </div>
                              </div>
                              <hr />
                              <div className="row">
                                 <div className="col-md-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#074777" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                                 </div>
                                 <div className="col-md-11">
                                    Top companies are hiring MERN stack developers
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-md-3">
                        <div className="course mean">
                           <div className="imgSection">
                              <img src={mean} alt="MEAN" />
                           </div>
                           <div className="durationSection">
                              <SlCalender />&nbsp;6–7 Months&nbsp;&nbsp;<FaRegClock />&nbsp;700+ Hours
                           </div>
                           <div className="courseNameSection">
                              MEAN FullStack
                           </div>
                           <div className="courseDesc">
                              <div className="row">
                                 <div className="col-md-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#074777" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                                 </div>
                                 <div className="col-md-11">
                                    Learn web application development using MEAN stack
                                 </div>
                              </div>
                              <hr />
                              <div className="row">
                                 <div className="col-md-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#074777" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                                 </div>
                                 <div className="col-md-11">
                                    We are a reputable and prominent institute
                                 </div>
                              </div>
                              <hr />
                              <div className="row">
                                 <div className="col-md-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#074777" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                                 </div>
                                 <div className="col-md-11">
                                    Our course designed to teach you the skills and knowledge required
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="admissionFeeSection container my-3">
                  <div className="subHeading text-center">
                     Admission Fee
                     <img src={ul} alt="UnderLine" />
                  </div>
                  <div className="admissionFee mt-2">
                     <div className="row">
                        <div className="col-md-6 course-list" id="course-list">
                           <div className="courseName active" id="ds" onClick={() => handleClickOnCourse("ds")}> <span>Data Science Course</span><span className={fingerActive === 1 ? "fingerShow" : "fingerHide"}><FaHandPointRight /></span></div>
                           <div className="courseName" id="dbms" onClick={() => handleClickOnCourse("dbms")}> <span>DBMS Course</span> <span className={fingerActive === 2 ? "fingerShow" : "fingerHide"}><FaHandPointRight /></span></div>
                           <div className="courseName" id="java" onClick={() => handleClickOnCourse("java")}> <span>Basic & Advance Java Course</span> <span className={fingerActive === 3 ? "fingerShow" : "fingerHide"}><FaHandPointRight /></span></div>
                           <div className="courseName" id="net" onClick={() => handleClickOnCourse("net")}> <span>ASP.Net FullStack Course</span> <span className={fingerActive === 4 ? "fingerShow" : "fingerHide"}><FaHandPointRight /></span></div>
                           <div className="courseName" id="mern" onClick={() => handleClickOnCourse("mern")}> <span>MERN Stack Course</span> <span className={fingerActive === 5 ? "fingerShow" : "fingerHide"}><FaHandPointRight /></span></div>
                           <div className="courseName" id="mean" onClick={() => handleClickOnCourse("mean")}> <span>MEAN Stack Course</span> <span className={fingerActive === 6 ? "fingerShow" : "fingerHide"}><FaHandPointRight /></span></div>
                        </div>
                        <div className="col-md-6 selectedCourseSection">
                           <div className="selectedCouseImg">
                              <img src={courseUpdate.courseImg} alt="" />
                           </div>
                           <div className="courseMode text-center">
                              {courseUpdate.courseName}
                           </div>
                           <div className="coursePrice text-center">
                              <span className="priceTag">Price</span>&nbsp;&nbsp;<span className="offerPrice">&#8377;{courseUpdate.offeredPrice}</span> <span className="acctualPrice">&#8377;{courseUpdate.AcctualPrice}</span>
                           </div>
                           <div className="enrollmentBtnSec mt-2">
                              <button type="button">Enrollment</button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="detailContentSecton container my-5">
                  <div className="contentHeading">
                     Enroll for a Competent Full Stack Developer Course in Pune
                     <img src={ul} alt="UnderLine" />
                  </div>
                  <div className="contentPara">
                     Full stack developers are in demand everywhere, considering the wealth of frontend and backend development skills they
                     bring to the table. Pune, being one of the most important IT hubs in the country, many budding IT professionals are
                     searching for a competent and career-oriented full stack web development course in Pune and going for full stack training
                     in Pune. Fullstack Guru is here for them!
                  </div>
                  <br></br>

                  <div className="contentHeading">
                     Join Fullstack Guru – The Best Full Stack .NET and Java Training Institute in Pune!
                     <img src={ul} alt="UnderLine" />
                  </div>
                  <div className="contentPara">
                     Fullstack Guru supports the endeavors of such students and works towards fulfilling the industry’s needs for full stack
                     developers. Accordingly, we provide full stack training in Pune for Java and .NET. We are a team of highly experienced and
                     updated full stack professionals and trainers who know what the industry expects from full stack developers. We update our
                     content and training methodologies to transform students into professionals the industry would want to hire.
                  </div>
                  <br></br>

                  <div className="contentHeading">
                     Industry Oriented Full Stack Classes in Pune
                     <img src={ul} alt="UnderLine" />
                  </div>
                  <div className="contentPara mb-2">
                     Facing difficulties in searching a job in the IT sector? Surprisingly, companies are also facing challenges in hiring the right talent
                     who has proper knowledge and skills. This gap between company’s expectations and candidate’s skills is due to the lack of proper training
                     and learning during the college degree. Fullstack Guru fills this gap with their full stack development courses in Pune. Fullstack Guru
                     offers the best full stack developer course in Pune with placement assistance. We also provide online full stack training classes in Pune
                     for all of our Fullstack courses.
                  </div>
                  <div className="contentPara">
                     The demand for full stack developers has increased tremendously in the last few years. It is because full stack developers are the first
                     choice of the IT industry. A full stack developer can work on both the frontend and backend development of web applications. In our full
                     stack developer course, we cover all the required web development tools and technologies. We also provide web development classes in Pune
                     for various full stacks such as MEAN stack, MERN stack, Java full stack and .Net full stack and so on. It is a great decision to start
                     your career as a full stack developer, as there are numerous opportunities available for full stack developers in Pune.
                  </div>
                  <br></br>

                  <div className="contentHeading">
                     Why is Fullstack Guru the Best for Full Stack Developer Course in Pune?
                     <img src={ul} alt="UnderLine" />
                  </div>
                  <div className="contentPara mb-2">
                     But what makes us different from other full stack classes in Pune? Our approach emphasizes transforming students from mere
                     aspirants to highly learned professionals with a solid fundamental base and excellent hard skills. Additionally, we conduct
                     soft skill training sessions that help students enhance their professional value and prepare them to become leaders in their
                     profession.
                  </div>
                  <div className="contentPara mb-2">
                     Here are a few more reasons that make us an excellent choice for full stack developer training in Pune.
                  </div>
                  <div className="contentPoint">
                     <div className="contentPara">
                        <FaHandPointRight /> &nbsp; Continuously updated curriculum
                     </div>
                     <div className="contentPara">
                        <FaHandPointRight /> &nbsp; Focus on developing practical skills
                     </div>
                     <div className="contentPara">
                        <FaHandPointRight /> &nbsp; Learning and interaction with industry experts
                     </div>
                     <div className="contentPara">
                        <FaHandPointRight /> &nbsp; Exposure to real-time software, tools, and technologies
                     </div>
                     <div className="contentPara">
                        <FaHandPointRight /> &nbsp; After-course lifetime placement support
                     </div>
                     <div className="contentPara">
                        <FaHandPointRight /> &nbsp; Project-based learning and development
                     </div>
                     <div className="contentPara">
                        <FaHandPointRight /> &nbsp; Preparation for interviews through mock interviews
                     </div>
                  </div>
                  <br></br>

                  <div className="contentHeading">
                     Full Stack Developer Course with Placement in Pune
                     <img src={ul} alt="UnderLine" />
                  </div>
                  <div className="contentPara mb-2">
                     Fullstack Guru offers placement to its students to help them give their careers a head start. We have already placed many
                     students in several companies across many parts of India. With the skills, expertise, guidance, and certificate they carry
                     with them, our students earn lucrative starting packages as full stack professionals. Our training, placements, and
                     student success talk about our credibility as one of the best institutes for full stack developer training in Pune.
                  </div>
                  <div className="contentPara">
                     So, don’t wait anymore! Enrolling in our full stack Java developer course in Pune or full stack .NET developer course in
                     Pune is the first step towards becoming a qualified full stack professional. To know more about our full stack classes in
                     Pune, connect with us at +91 8149515157/ 58/ 59.
                  </div>
                  <br></br>

                  <div className="contentHeading">
                     Join One of the Best Java Full Stack Classes in Pune with Fullstack Guru!
                     <img src={ul} alt="UnderLine" />
                  </div>
                  <div className="contentPara mb-2">
                     Are you passionate about technology? Do you want to pursue a career in software development? Are you searching for the full stack Java classes institutes in Pune?Enroll in Fullstack Guru’s full stack Java developer course in Pune!We are unquestionably one of the best names for full stack Java classes in Pune.
                  </div>
                  <br></br>

                  <div className="contentHeading">
                     Fullstack Guru – Full Stack Java Classes Institutes in Pune
                     <img src={ul} alt="UnderLine" />
                  </div>
                  <div className="contentPara mb-2">
                     At Fullstack Guru, we are a one-stop educational destination for pursuing comprehensive Java full stack training in Pune. Our unrivaled
                     reputation and the success of our students, whom we’ve placed in various companies, speak for our credibility as an institute offering
                     a full stack developer course with placement in Pune.
                  </div>
                  <div className="contentPara mb-2">
                     A responsible institute offering a full stack course in Pune, Fullstack Guru remains committed to shaping its students’ careers.
                     Accordingly, we nurture a supportive learning environment. But while doing that, through our Java full stack classes in Pune, we also
                     provide students with the practical industry exposure required to enhance their professional competence.
                  </div>
                  <div className="contentPara mb-2">
                     No wonder our students deliver a stellar performance in whichever company they get placed. That’s where we stand out as one of the best
                     full stack developer classes in Pune.
                  </div>
                  <div className="contentPara mb-2">
                     Our full stack Java training in Pune is thoughtfully-designed and well-curated to meet the industry’s needs. It aims to bridge the gap
                     between academia and industry by including industry-oriented elements, technologies, topics, etc. Accordingly, we keep updating our
                     full stack course in Pune to ensure students learn what the industry expects from them.
                  </div>
                  <div className="contentPara mb-2">
                     Additionally, in our full stack Java developer classes in Pune, we conduct mock interview sessions and help students develop soft
                     skills. Our full stack developer classes in Pune offer optimal comfort to help students focus on learning. Thus, towards the course’s
                     end, our students don’t step out as merely technical experts but as multi-faceted Java professionals, prepared to accept challenges
                     and make things happen!
                  </div>
                  <div className="contentPara mb-2">
                     Rest assured, at our full stack Java classes in Pune, your career is in safe hands. Our qualified and experienced faculty members will
                     help you make the most of our full stack Java training in Pune and transform your career, empowering you to achieve the heights you’ve
                     always desired.
                  </div>
                  <br></br>
               </div>
            </div>
         </div>
      </>
   )
}