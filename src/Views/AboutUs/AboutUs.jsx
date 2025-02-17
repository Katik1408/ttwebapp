import karthik from "../../Assets/Other/karthik.jpg"
import ul from "../../Assets/Banner/ul.png"
import { FaHandPointRight } from "react-icons/fa";
import "./AboutUs.css"

export const Aboutus = () => {
   return (
      <>
         <div className="aboutUsSection">
            <div className="aboutUsContainer">
               <div className="pageHeadingSection">
                  <div className="pageHeading text-center animate__animated animate__bounceInDown">
                     About Us
                  </div>
               </div>
               <div className="aboutUsDescSection container">
                  <div className="row">
                     <div className="col-md-4 aboutUsImg">
                        <img src={karthik} loading="lazy" alt="Img of Karthik" />
                     </div>
                     <div className="col-md-8 px-5">
                        <div className="name">
                           Karthik Saxena
                        </div>
                        <div className="founder">
                           Founder - TechnoTutor
                        </div>
                        <div className="aboutText">
                           <p>
                              I am a highly skilled software engineer with over 8 years of hands-on experience in the IT industry, having had the privilege of working with renowned companies such as Siemens, Cognizant, Volvo, HP, and West Corp. My journey across these diverse organizations has given me deep insights into software development, architecture, and problem-solving in various domains like automotive, healthcare, and telecommunications.
                           </p>
                           <p>
                              Beyond my technical expertise, I have a profound passion for teaching. I find great fulfillment in sharing my knowledge and experience with aspiring developers, helping them navigate the ever-evolving world of technology. Through my work at Technotutor and SevenMentor, I am committed to preparing students for real-world challenges, keeping them up-to-date with the latest trends and industry practices. My teaching philosophy revolves around practical learning and empowering students to think critically and build innovative solutions.
                           </p>
                           <p>
                              Whether it's mentoring on full-stack development, guiding through coding interviews, or introducing new tools and frameworks, I am dedicated to fostering a dynamic, engaging, and inspiring learning environment.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="contentHeading mt-3">
                     Our Vision
                     <img src={ul} alt="UnderLine" />
                  </div>
                  <div className="contentPara mb-2">
                     To be & to be known as India’s most reliable, trustworthy, career counselling and training company in the field of engineering.
                  </div>
                  <div className="contentHeading mt-3">
                     Our Mission
                     <img src={ul} alt="UnderLine" />
                  </div>
                  <div className="contentPara mb-2">
                     To implant the correct and necessary skills in the students, empowering them to be billable from the day one for our clients.
                  </div>

                  <div className="row">
                     <div className="col-md-6">
                        <div className="contentHeading mt-3">
                           Our Values
                           <img src={ul} alt="UnderLine" />
                        </div>
                        <div className="contentPoint">
                           <div className="contentPara">
                              <FaHandPointRight /> &nbsp; Always Tell The Truth.
                           </div>
                           <div className="contentPara">
                              <FaHandPointRight /> &nbsp; Open And Honest Communication.
                           </div>
                           <div className="contentPara">
                              <FaHandPointRight /> &nbsp; Transparent Processes.
                           </div>
                           <div className="contentPara">
                              <FaHandPointRight /> &nbsp; Walk The Talk.
                           </div>
                           <div className="contentPara">
                              <FaHandPointRight /> &nbsp; Powered By People.
                           </div>
                           <div className="contentPara">
                              <FaHandPointRight /> &nbsp; Focused On Customers.
                           </div>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="contentHeading mt-3">
                           Strategy & Action plan
                           <img src={ul} alt="UnderLine" />
                        </div>
                        <div className="contentPoint">
                           <div className="contentPara">
                              <FaHandPointRight /> &nbsp; Project Based Practical Learning
                           </div>
                           <div className="contentPara">
                              <FaHandPointRight /> &nbsp; Innovative Teaching & Learning Methodologies
                           </div>
                           <div className="contentPara">
                              <FaHandPointRight /> &nbsp; Focused On Training Need Analysis
                           </div>
                           <div className="contentPara">
                              <FaHandPointRight /> &nbsp; Open For Change And Willing To Adapt The Change
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </>
   )
}