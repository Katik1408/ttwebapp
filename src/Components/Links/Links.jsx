import { IoHome } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { LuLogOut } from "react-icons/lu";
import { RiSettings4Fill } from "react-icons/ri";
import "./Links.css"

export const Links = () => {

   const cookieData = useSelector((state) => state.CookieRetrive.value);
   console.log(cookieData);
   return (
      <>
         <div className="linkSection">
            <div className="linkContainer container">
               {
                  cookieData === "" ?
                     <div className="parentLink">
                        <div className="links">
                           <NavLink to="/" className="coursesName"><IoHome /> &nbsp;Home</NavLink>
                           <div className="downBorder"></div>
                        </div>
                        <div className="links">
                           <NavLink to="/aboutus" className="coursesName">About Us</NavLink>
                        </div>
                        <div className="links courses">
                           Courses
                           <div className="childCourses">
                              <NavLink to="/datasciencecourse" className="coursesName">Data Science Course</NavLink>
                              <br></br>
                              <NavLink to="/dbmscourse" className="coursesName">DBMS Course</NavLink>
                              <br></br>
                              <NavLink to="/javacourse" className="coursesName">Basic and Advance Java Course</NavLink>
                              <br></br>
                              <NavLink to="/dotnetcourse" className="coursesName">ASP.Net Full Stack Course</NavLink>
                              <br></br>
                              <NavLink to="/meancourse" className="coursesName">MEAN Stack Course</NavLink>
                              <br></br>
                              <NavLink to="/merncourse" className="coursesName">MERN Stack Course</NavLink>
                           </div>
                        </div>
                        <div className="links freeDemo">
                           <NavLink to="/freedemo">Free Demo</NavLink>
                        </div>
                        <div className="links">
                           <NavLink to="/contactus" className="coursesName">Contact Us</NavLink>
                        </div>
                        <div className="links">
                           <NavLink to="/enrollment" className="coursesName">Enrollment</NavLink>
                        </div>
                        <div className="links">
                           <NavLink to="/recruiterlogin" className="coursesName">Recruiter Login</NavLink>
                        </div>
                     </div>
                     :
                     <div className="recuiterLink">
                        <div className="leftSec">
                           <div className="links">
                              <NavLink to="/dashboard" className="coursesName">Student DashBoard</NavLink>
                           </div>
                        </div>
                        <div className="rightSec">
                           <div className="links">
                              {cookieData.fullName}
                           </div>
                           <div className="links">
                              <RiSettings4Fill />
                           </div>
                           <div className="links">
                              <LuLogOut />
                           </div>
                        </div>
                     </div>

               }


            </div>
         </div>



      </>
   )
}