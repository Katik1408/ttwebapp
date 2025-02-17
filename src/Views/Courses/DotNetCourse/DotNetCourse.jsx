import { useDispatch } from "react-redux"
import { activeEnquiry } from "../../../Redux/Slices/AccessEnquiry"
import { FaHandPointRight } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Accordion from 'react-bootstrap/Accordion';
import dotnet from "../../../Assets/Course/NET-fullstack.jpg"
import ul from "../../../Assets/Banner/ul.png"
import "./DotNetCourse.css"

export const DotNetCourse = () => {

   const dispatch = useDispatch()

   const handleActiveEnquiry = () => {
      dispatch(activeEnquiry(true))
   }

   return (
      <>
         <div className="dataScienceCourseSecton">
            <div className="dataScienceContainer">
               <div className="pageHeadingSection">
                  <div className="pageHeading text-center animate__animated animate__bounceInDown">
                     ASP.NET Fullstack Course
                  </div>
               </div>
               <div className="dataScienceDescSection container my-3">
                  <div className="row">
                     <div className="col-md-7 courseHeading">
                        <p>
                           Ranked #1 ASP.NET Fullstack Online Training Course with Certifications.
                        </p>
                        <p>
                           This ASP.NET Fullstack online Training and Certification Course will help you master in all aspects including Basic statistics, Python, Machine Learning, SQL, Excel, AI, Tableau, Hadoop, and Spark with Hands-on Classes.
                        </p>
                        <p>
                           Learn ASP.NET Fullstack Course Online Training Course from India’s #1 Certification Oriented Data Science Online Training institute with IBM Certified Trainers, Real World projects and 100% assured placement support, all designed to help you become Become highly skilled and qualified data scientist.
                        </p>
                        <button type="button" className="bookDemo">Book Demo</button>
                     </div>
                     <div className="col-md-5">
                        <div className="courseShowCase">
                           <div className="courseImgSec">
                              <img src={dotnet} className="courseImg" alt="" />
                           </div>
                           <div className="courseMode text-center">
                              ASP.NET Fullstack Course
                           </div>
                           <div className="coursePrice text-center py-2">
                              <span className="priceTag">Price</span>&nbsp;&nbsp;<span className="offerPrice">&#8377;35000</span> <span className="acctualPrice">&#8377;40000</span>
                           </div>
                           <div className="courseBtnSection">
                              <button type="button" className="enquiryBtn" onClick={handleActiveEnquiry}>Enquiry</button>
                              <button type="button" className="enrollmentBtn">Enrollment</button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="aboutDataScienceSection">
                  <div className="courseNavBar">
                     <div className="container">
                        <div className="courseNavBarLink">
                           <a href="#aboutDescSec">
                              About Course
                           </a>
                        </div>
                        <div className="courseNavBarLink">
                           <a href="#syllabus">
                              Course Syllabus
                           </a>
                        </div>
                        <div className="courseNavBarLink">
                           <a href="#commingBatch">
                              Upcoming Batch
                           </a>
                        </div>
                        <div className="courseNavBarLink">
                           <a href="#trainerProfile">
                              Trainer Profile
                           </a>
                        </div>
                        <div className="courseNavBarLink">
                           <a href="#certification">
                              Certification
                           </a>
                        </div>
                        <div className="courseNavBarLink">
                           <a href="#keyFeature">
                              Key Feature
                           </a>
                        </div>
                        <div className="courseNavBarLink">
                           <a href="#faq">
                              FAQs
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="courseDesc container">
                     <div className="contentSubHeading my-3" id="aboutDescSec">
                        About ASP.NET Fullstack Course
                        <img src={ul} alt="UnderLine" />
                     </div>
                     <div className="aboutDescSec">
                        <div className="sec1">
                           <div className="row">
                              <p>
                                 ASP.NET Fullstack Online Training will help you to become an expert in Probability and Statistics, Excel, SQL, Tableau,
                                 R and Python with 10+ Real Life Projects. This Data Science Course will give you expertise on Machine Learning and Big data analysis
                                 for Solving Complex Challenges with Hands-on Classes.  Gain the Critical Skills Such as Data Visualization, Linear Algebra, Multivariable
                                 Calculus, Python libraries and more from this Online Data Science Training Courses. Develop Your Mathematical & Programming Skills to
                                 become Professional Certified Data Scientist with our Data Science Certification Courses.
                              </p>
                           </div>
                           <div className="row mb-2">
                              <div className="col-md-1 rightFinger">
                                 <FaHandPointRight />
                              </div>
                              <div className="col-md-11">
                                 To provide a learning environment that fosters scientific excellence and promote lifelong learning with
                                 understanding of professional responsibilities and obligations to clients and public.
                              </div>
                           </div>
                           <div className="row mb-2">
                              <div className="col-md-1 rightFinger">
                                 <FaHandPointRight />
                              </div>
                              <div className="col-md-11">
                                 Students themselves can formulate simple algorithms to solve problems, and can code them in a high-level
                                 language appropriate for data science work (e.g., Python, SQL, R, Java).
                              </div>
                           </div>
                           <div className="row mb-2">
                              <div className="col-md-1 rightFinger">
                                 <FaHandPointRight />
                              </div>
                              <div className="col-md-11">
                                 Communicate predictions and findings to management and IT departments through effective data visualizations and reports.
                              </div>
                           </div>
                           <div className="row mb-2">
                              <div className="col-md-1 rightFinger">
                                 <FaHandPointRight />
                              </div>
                              <div className="col-md-11">
                                 Demonstrate knowledge of statistical data analysis techniques utilized in business decision making.
                              </div>
                           </div>
                           <div className="row mb-2">
                              <div className="col-md-1 rightFinger">
                                 <FaHandPointRight />
                              </div>
                              <div className="col-md-11">
                                 Ability to develop software solutions for the requirements, based on critical analysis and research.
                              </div>
                           </div>
                           <div className="row mb-2">
                              <div className="col-md-1 rightFinger">
                                 <FaHandPointRight />
                              </div>
                              <div className="col-md-11">
                                 Ability to use SQL and Tableau Tool for Data Visualization and Optimization.
                              </div>
                           </div>
                           <div className="row mb-2">
                              <div className="col-md-1 rightFinger">
                                 <FaHandPointRight />
                              </div>
                              <div className="col-md-11">
                                 Learn Techniques and Tools for Transformation of Data.
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="contentSubHeading my-4" id="syllabus">
                        Syllabus Of ASP.NET Fullstack Course
                        <img src={ul} alt="UnderLine" />
                     </div>
                     <div className="syllabusDescSec">
                        <div className="syllabusSec">
                           <div className="mainSyllabusHeading">
                              Data Science
                           </div>
                           <div className="syllabusModuleName">
                              Module 1 : Introduction to Data Science
                           </div>
                           <div className="syllabusModuleName">
                              Module 2 : Introduction to Python
                           </div>
                           <div className="syllabusModuleName">
                              Module 3 : Python Basics
                           </div>
                           <div className="syllabusModuleName">
                              Module 4 : python Packages
                           </div>
                           <div className="syllabusModuleName">
                              Module 5 : Importing Data
                           </div>
                           <div className="syllabusModuleName">
                              Module 6 : Manipulating Data
                           </div>
                           <div className="syllabusModuleName">
                              Module 7 : Statistics Basics
                           </div>
                           <div className="syllabusModuleName">
                              Module 8 : Error Metrics
                           </div>
                           <div className="syllabusModuleName">
                              Module 9 : Introduction to Data Science
                           </div>

                           <div className="mainSyllabusHeading">
                              Machine Learning
                           </div>
                           <div className="syllabusModuleName">
                              Module 1 : Supervised Learning
                           </div>
                           <div className="syllabusModuleName">
                              Module 2 : Unsupervised Learning
                           </div>
                           <div className="syllabusModuleName">
                              Module 3 : SVM
                           </div>
                           <div className="syllabusModuleName">
                              Module 4 : SVM Kernal
                           </div>
                           <div className="syllabusModuleName">
                              Module 5 : Other Machine Learning Algorithms
                           </div>

                           <div className="mainSyllabusHeading">
                              Artificial Intelligence
                           </div>
                           <div className="syllabusModuleName">
                              Module 1 : Supervised Learning
                           </div>

                           <div className="mainSyllabusHeading">
                              Deep Learning
                           </div>
                           <div className="syllabusModuleName">
                              Module 1 : Deep Learning Algorithms
                           </div>
                           <div className="syllabusModuleName">
                              Module 2 : Introduction to NLP
                           </div>
                           <div className="syllabusModuleName">
                              Module 3 : Texts to Features(Feature Engineering)
                           </div>
                           <div className="syllabusModuleName">
                              Module 4 : Tasks of NLP
                           </div>

                           <div className="mainSyllabusHeading">
                              Tableau
                           </div>
                           <div className="syllabusModuleName">
                              Module 1: Tableau Course Material
                           </div>
                           <div className="syllabusModuleName">
                              Module 2: Learn Tableau Basic Reports
                           </div>
                           <div className="syllabusModuleName">
                              Module 3: Learn Tablueau Charts
                           </div>
                           <div className="syllabusModuleName">
                              Module 4: Learn Tableau Advanced Reports
                           </div>
                           <div className="syllabusModuleName">
                              Module 5: Learn Tableau Calculations & Filters
                           </div>
                           <div className="syllabusModuleName">
                              Module 6: Learn Tableau Dashboards
                           </div>
                           <div className="syllabusModuleName">
                              Module 7 : Server
                           </div>

                           <div className="mainSyllabusHeading">
                              SQL
                           </div>
                           <div className="syllabusModuleName">
                              Module 1: Introduction to Database
                           </div>
                           <div className="syllabusModuleName">
                              Module 2: Retrieve Data using the SQL SELECT Statement
                           </div>
                           <div className="syllabusModuleName">
                              Module 3: Learn to Restrict and Sort Data
                           </div>
                           <div className="syllabusModuleName">
                              Module 4: Usage of Single-Row Functions to Customize Output
                           </div>
                           <div className="syllabusModuleName">
                              Module 5: Invoke Conversion Functions and Conditional Expressions
                           </div>
                           <div className="syllabusModuleName">
                              Module 6: Aggregate Data Using the Group Functions
                           </div>
                           <div className="syllabusModuleName">
                              Module 7: Display Data from Multiple Tables Using Joins
                           </div>
                           <div className="syllabusModuleName">
                              Module 8: Use Subqueries to Solve Queries
                           </div>
                           <div className="syllabusModuleName">
                              Module 9: The SET Operators
                           </div>
                           <div className="syllabusModuleName">
                              Module 10: Data Manipulation Statement
                           </div>
                           <div className="syllabusModuleName">
                              Module 11: Use of DDL Statements to Create and Manage Tables
                           </div>
                           <div className="syllabusModuleName">
                              Module 12: Other Schema Objects
                           </div>
                           <div className="syllabusModuleName">
                              Module 13: Control User Access
                           </div>
                           <div className="syllabusModuleName">
                              Module 14: Management of Schema Objects
                           </div>
                           <div className="syllabusModuleName">
                              Module 15: Manage Objects with Data Dictionary Views
                           </div>
                           <div className="syllabusModuleName">
                              Module 16: Manipulate Large Data Sets
                           </div>
                           <div className="syllabusModuleName">
                              Module 17: Data Management in Different Time Zones
                           </div>
                           <div className="syllabusModuleName">
                              Module 18: Retrieve Data Using Sub-queries
                           </div>
                           <div className="syllabusModuleName">
                              Module 19: Regular Expression Support
                           </div>
                        </div>
                     </div>

                     <div className="contentSubHeading my-4" id="commingBatch">
                        Upcoming Batch of ASP.NET Fullstack Course
                        <img src={ul} alt="UnderLine" />
                     </div>
                     <div className="upcomingDescSec">
                        <div className="row">
                           <div className="col-md-4 upcommingCourseCard">
                              <div className="timingCard">
                                 <div className="classStartDt">
                                    18-11-2024
                                 </div>
                                 <div className="classDays">
                                    Monday - Friday
                                    <span className="batchDays">(Weekdays Batch)</span>
                                 </div>
                                 <div className="classTime mt-2">
                                    08:00 AM (IST)
                                    <span className="batchTime">(Class 1Hr - 1:30Hrs)</span>
                                 </div>
                                 <div className="classEnrollmentBtn enrollmentBtnSec mt-3">
                                    <button type="button">Enrollment</button>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 upcommingCourseCard">
                              <div className="timingCard">
                                 <div className="classStartDt">
                                    25-11-2024
                                 </div>
                                 <div className="classDays">
                                    Monday - Friday
                                    <span className="batchDays">(Weekdays Batch)</span>
                                 </div>
                                 <div className="classTime mt-2">
                                    10:00 PM (IST)
                                    <span className="batchTime">(Class 1Hr - 1:30Hrs)</span>
                                 </div>
                                 <div className="classEnrollmentBtn enrollmentBtnSec mt-3">
                                    <button type="button">Enrollment</button>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 upcommingCourseCard">
                              <div className="timingCard">
                                 <div className="classStartDt">
                                    16-11-2024
                                 </div>
                                 <div className="classDays">
                                    Saturday - Sunday
                                    <span className="batchDays">(Weekend Batch)</span>
                                 </div>
                                 <div className="classTime mt-2">
                                    08:00 AM (IST)
                                    <span className="batchTime">(Class 2:30Hr - 3Hrs)</span>
                                 </div>
                                 <div className="classEnrollmentBtn enrollmentBtnSec mt-3">
                                    <button type="button" >Enrollment</button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="contentSubHeading my-4" id="trainerProfile">
                        Trainer Profile of ASP.NET Fullstack Course
                        <img src={ul} alt="UnderLine" />
                     </div>
                     <div className="trainerDescSec">
                        <div className="trainerDetails">
                           <div className="imgOfTrainer">
                              <CgProfile />
                           </div>
                           <div className="trainerName">
                              Trainer : Karthik Saxena
                           </div>
                           <div className="trainerExp">
                              Experience : 9+ Yrs
                           </div>
                           <div className="trainerSpecialist">
                              Specialist In : ASP.NET Fullstack
                           </div>
                           <div className="lang">
                              Languages : English | Hindi
                           </div>
                        </div>
                        <div className="devider">
                           <div className="line"></div>
                        </div>
                        <div className="trainerDesc">
                           <p>
                              Karthik has worked for 7 years as a ASP.NET Fullstack Trainer, collaborating with many professionals from different backgrounds.
                           </p>
                           <p>
                              He is Not only the IBM Certified Trainer, but also a Developer and Technical Lead, who has been building life Applications for Small Business Using Machine Learning, Deep Learning, AI and NLP.
                           </p>
                           <p>
                              Trained and coached teams in data science and embracing a more agile mindset.
                           </p>
                           <p>
                              Implemented a common approach to discovering data products with a more empirical approach.
                           </p>
                           <p>
                              Provided ongoing coaching for the Data Science Teams, Agile Coaches and Product Owners.
                           </p>
                           <p>
                              He has delivered Data Science & AI Courses all around India, helping Organizations to improve their Productivity. Bala has worked for various companies including CTS, HP, Verizon, IBM and TCS.
                           </p>
                        </div>
                     </div>

                     <div className="contentSubHeading my-4" id="certification">
                        Certification of ASP.NET Fullstack Course
                        <img src={ul} alt="UnderLine" />
                     </div>
                     <div className="certificationDescSec">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugit officiis magni. Ea, facere neque. Ad, aspernatur numquam amet rerum aperiam dolor illum magnam aliquam dolorum incidunt fugiat earum sint a nihil reprehenderit cupiditate facilis distinctio inventore accusantium, pariatur modi, dicta iste! Illo tenetur dignissimos amet nisi non dolorem incidunt.
                     </div>

                     <div className="contentSubHeading my-4" id="keyFeature">
                        Key Features of ASP.NET Fullstack Course
                        <img src={ul} alt="UnderLine" />
                     </div>
                     <div className="keyFeatureDescSec">
                        <div className="keyLine">
                           <FaHandPointRight /> &nbsp; 7+ Mini Projects
                        </div>
                        <div className="keyLine">
                           <FaHandPointRight /> &nbsp; 10+ Years experienced Trainers
                        </div>
                        <div className="keyLine">
                           <FaHandPointRight /> &nbsp; Basic to Advanced Level Data Science Training
                        </div>
                        <div className="keyLine">
                           <FaHandPointRight /> &nbsp; Online & Self-Paced Learning Options
                        </div>
                        <div className="keyLine">
                           <FaHandPointRight /> &nbsp; 100% Data Science Certification Oriented Courses
                        </div>
                        <div className="keyLine">
                           <FaHandPointRight /> &nbsp; Data Science Placement Training with 100% Job Assistance
                        </div>
                        <div className="keyLine">
                           <FaHandPointRight /> &nbsp; Certification Preparation Exams
                        </div>
                        <div className="keyLine">
                           <FaHandPointRight /> &nbsp; Mock Interview & Resume Building
                        </div>
                        <div className="keyLine">
                           <FaHandPointRight /> &nbsp; Life Time Valid & Shareable Course Completion Certificate
                        </div>
                        <div className="keyLine">
                           <FaHandPointRight /> &nbsp; Unique Course Materials and Updated 2024 Syllabus
                        </div>
                     </div>

                     <div className="contentSubHeading my-4" id="faq">
                        FAQ's of ASP.NET Fullstack Course
                        <img src={ul} alt="UnderLine" />
                     </div>
                     <div className="faqsDescSec mb-4">
                        <Accordion defaultActiveKey="0">
                           <Accordion.Item eventKey="0">
                              <Accordion.Header>Which are the top companies to work for as a Data Science professional?</Accordion.Header>
                              <Accordion.Body>
                                 <p>
                                    The top companies to work for as a Data Science expert are:
                                 </p>
                                 <div className="keyLine">
                                    <FaHandPointRight /> &nbsp; Oracle
                                 </div>
                                 <div className="keyLine">
                                    <FaHandPointRight /> &nbsp; TeraData
                                 </div>
                                 <div className="keyLine">
                                    <FaHandPointRight /> &nbsp; Amazon
                                 </div>
                                 <div className="keyLine">
                                    <FaHandPointRight /> &nbsp; Accenture
                                 </div>
                                 <div className="keyLine">
                                    <FaHandPointRight /> &nbsp; JP morgan Chase
                                 </div>
                                 <p className="mt-2">
                                    Other good companies to work for are Wipro, Siemens Healthiness India, HDFC Ltd, Aditya Birla GDNA Cell, Larsen & Toubro Infotech etc. All of these companies offer the right platforms and initiatives to help their employees grow.
                                 </p>
                              </Accordion.Body>
                           </Accordion.Item>
                           <Accordion.Item eventKey="1">
                              <Accordion.Header>Does the future of Data Science look promising?</Accordion.Header>
                              <Accordion.Body>
                                 <p>
                                    Earlier, statisticians had to manually create their predictive models and then adjust them repeatedly. This became difficult due to the increasing amount of data and more complex business problems. Data Science helped immensely in this regard.
                                 </p>
                                 <p>
                                    Data Science is rapidly growing and involving automation. There is simply no sign of its slowing down. So, Data Science will be around for a long time considering the current data trends.
                                 </p>
                              </Accordion.Body>
                           </Accordion.Item>
                           <Accordion.Item eventKey="2">
                              <Accordion.Header>
                                 Is there any separate Data Science certification cost?
                              </Accordion.Header>
                              <Accordion.Body>
                                 <p>
                                    No, Besant charges no separate Data Science certification cost. The course fee that you pay has this cost included in it.
                                 </p>
                              </Accordion.Body>
                           </Accordion.Item>
                           <Accordion.Item eventKey="3">
                              <Accordion.Header>
                                 Which Data Science certifications can I appear for?
                              </Accordion.Header>
                              <Accordion.Body>
                                 <p>
                                    There are certain certifications that require you to appear for their respective exams in person. All others can be taken online. Hence, if you want to take a certification test remotely, there are numerous options that you can choose from.
                                 </p>
                              </Accordion.Body>
                           </Accordion.Item>
                        </Accordion>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}