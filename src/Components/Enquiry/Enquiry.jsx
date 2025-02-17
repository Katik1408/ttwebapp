import { useDispatch, useSelector } from "react-redux";
import { FaWindowClose } from "react-icons/fa";
import ul from "../../Assets/Banner/ul.png"
import "./Enquiry.css"
import { deactiveEnquiry } from "../../Redux/Slices/AccessEnquiry";

export const Enquiry = () => {
   const activeFlag = useSelector((state) => state.AccessEnquiry.value);
   const dispatch = useDispatch()
   const enquirySubmit = () => {

   }

   const handleCloseEnquiry = () => {
      dispatch(deactiveEnquiry(false))
   }

   return (
      <>
         {
            activeFlag
               ?
               <>
                  <div className="enquiryFormSection">
                     <div className="enquiryFormContainer">
                        <div className="closeSection" onClick={handleCloseEnquiry}>
                           <FaWindowClose />
                        </div>
                        <form onSubmit={enquirySubmit} method="post">
                           <div className="row">
                              <div className="contentHeading">
                                 Enquiry Form
                                 <img src={ul} alt="UnderLine" />
                              </div>
                           </div>
                           <div className="row my-2">
                              <label htmlFor="fullname">Full Name</label> <br></br>
                              <input type="text" name="fullName" id="fullName" placeholder="Enter Full Name" />
                           </div>
                           <div className="row my-2">
                              <label htmlFor="phoneNumber">Phone Number</label> <br></br>
                              <input type="number" name="phoneNumber" id="phoneNumber" placeholder="Enter Phone Number" />
                           </div>
                           <div className="row my-2">
                              <label htmlFor="fullname">Email ID</label> <br></br>
                              <input type="text" name="emailId" id="emailId" placeholder="EnterEmail ID" />
                           </div>
                           <div className="row">
                              <button type="button">Submit</button>
                           </div>
                        </form>
                     </div>
                  </div>
               </>
               :
               <></>
         }
      </>
   )
}