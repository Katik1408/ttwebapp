import { NavLink } from "react-router-dom"
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import "./Footer.css"

export const Footer = () => {
   return (
      <>
         <div className="footerSection">
            <div className="footerContent container">
               <div className="footerTopSection">
                  <div className="firstFooterSection">
                     <h4>About TechnoTutor</h4>
                     <p>
                        Technotutor is an institute focused on software development training and interview preparation.
                        We provide comprehensive education on development technologies and hands-on guidance for technical interviews,
                        ensuring students are job-ready for careers in tech.
                     </p>
                  </div>
                  <div className="middleFooterSection">
                     <h4>Courses</h4>
                     <div className="middleFooterLinks">
                        <NavLink to="/" className="footerLink">Data Science Course</NavLink>
                        <NavLink to="/" className="footerLink">DBMS Course</NavLink>
                        <NavLink to="/" className="footerLink">Basic & Advance Java Course</NavLink>
                        <NavLink to="/" className="footerLink">ASP.Net FullStack Course</NavLink>
                        <NavLink to="/" className="footerLink">MERN Stack Course</NavLink>
                        <NavLink to="/" className="footerLink">MEAN Stack Course</NavLink>
                     </div>
                  </div>
                  <div className="lastFooterSection">
                     <div className="otherLinks">
                        <h4>Support</h4>
                        <NavLink to="/" className="footerLink">FAQs</NavLink>
                     </div>

                     <div className="socialSection mt-5">
                        <h4>Follow Us</h4>
                        <a href="https://www.facebook.com/" >
                           {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg> */}
                           <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com/">
                           {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff99" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg> */}
                           <FaInstagram />
                        </a>
                        <a href="https://www.instagram.com/">
                           {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff99" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg> */}
                           <FaXTwitter />
                        </a>
                        <a href="https://www.instagram.com/">
                           {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff99" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" /></svg> */}
                           <FaLinkedinIn />
                        </a>
                     </div>
                  </div>
               </div>
               <hr></hr>
               <div className="copyright">
                  <p className="text-center">Copyright © 2024 All rights reserved | TechnoTutor</p>
               </div>
            </div>
         </div>
      </>
   )
}