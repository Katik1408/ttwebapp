import { NavLink } from "react-router-dom";
import thankyou from "../../Assets/Banner/thankyou2.jpg"
import "./ThankYou.css"
import { useState } from "react";

export const ThankYou = () => {

   const [lastUrlPart, setLastUtlPart] = useState()

   const lastUrl = document.referrer;
   if (lastUrl !== "") {
      let splitUrl = lastUrl.split("/")
      setLastUtlPart(splitUrl[splitUrl.length - 1])
   }

   return (
      <>
         <div className="thankYouSection">
            <div className="thankYouContent container">
               <div className="thankYouImg">
                  <img src={thankyou} alt="ThankYou" />
               </div>
               {lastUrlPart === "signup" ?
                  <>
                     <h4 className="text-center mt-5">Your Account Created Successfully</h4>
                     <h6 className="text-center mt-4">Click <b className="text-white"> <NavLink to="/login">Here</NavLink></b> To Login</h6>
                  </> :
                  <>
                     <h4 className="text-center mt-5">Your Details Enrolled Successfully</h4>
                     <h6 className="text-center mt-4">Click <b className="text-white"> <NavLink to="/">Here</NavLink></b>To Home Page</h6>
                  </>}
            </div>
         </div>
      </>
   )
}