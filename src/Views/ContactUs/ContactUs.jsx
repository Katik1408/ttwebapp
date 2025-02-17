import ul from "../../Assets/Banner/ul.png"
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import "./ContactUs.css"

export const ContactUs = () => {

   const handleSubmit = () => {

   }

   return (
      <>
         <div className="contactUsSection">
            <div className="contactUsContainer">
               <div className="pageHeadingSection">
                  <div className="pageHeading text-center animate__animated animate__bounceInDown">
                     Contact Us
                  </div>
               </div>
               <div className="contactUsBody container">
                  <div className="row my-4">
                     <div className="col-md-6">
                        <form onSubmit={handleSubmit}>
                           <div className="formSubHeading my-3">
                              Get In Touch
                              <img src={ul} alt="UnderLine" />
                           </div>
                           <div className="formElements">
                              <div className="line1">
                                 <label htmlFor="name">Name</label>
                                 <input type="text" name="name" id="name" placeholder="Enter Your Name" />
                              </div>
                              <div className="line1 my-2">
                                 <label htmlFor="email">Email</label>
                                 <input type="text" name="email" id="email" placeholder="Enter Your Email" />
                              </div>
                              <div className="line1 my-2">
                                 <label htmlFor="mobile">Mobile</label>
                                 <input type="text" name="mobile" id="mobile" placeholder="Enter Your Mobile Number" />
                              </div>
                              <div className="line1 my-2">
                                 <label htmlFor="message">Message</label>
                                 <textarea name="message" id="message" rows="5" placeholder="Enter Your Name"></textarea>
                              </div>
                              <div className="line1 mt-3">
                                 <button type="submit" >Submit</button>
                              </div>
                           </div>
                        </form>
                     </div>
                     <div className="col-md-6">
                        <div className="mapSection">
                           <iframe
                              title="map"
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11654.388701308464!2d73.75932526294157!3d18.603801172493938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b97b37681c7b%3A0xa9aa324db3fefbef!2sWESTERN%20AVENU%2C%20Shankar%20Kalat%20Nagar%2C%20Wakad%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411057!5e0!3m2!1sen!2sin!4v1731477226324!5m2!1sen!2sin"
                              width="100%"
                              height="400"
                              loading="lazy"
                           ></iframe>
                        </div>
                        <div className="aboutUsSocialSecSvg mt-4">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#074777" d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg>
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#074777" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#074777" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#074777" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" /></svg>
                        </div>
                     </div>
                  </div>
                  <div className="contactDetailsSection my-4">
                     <div className="contentHeading my-3">
                        Pune, Maharashtra
                        <img src={ul} alt="UnderLine" />
                     </div>

                     <div className="address my-2">
                        <FaLocationDot /> E-1502, Western Avenue, Wakad, Pune
                        <br></br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maharashtra, 411057
                     </div>
                     <div className="email my-3">
                        <MdEmail /> <a href="mailto:saxena.kartik14@outlook.com" target="_blank" rel="noreferrer">saxena.kartik14@outlook.com</a>
                     </div>
                     <div className="phone my-3">
                        <FaPhone /> <a href="tel:+918982039282">+91 898 203 9282</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}