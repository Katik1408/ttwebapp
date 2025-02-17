import { useSelector } from "react-redux";
import Img from "../../Assets/Logo/TechnoTutorIcon.png"
import "./Loader.css"

export const Loader = () => {
   const activeFlag = useSelector((state) => state.AccessLoader.value);
   return (
      <>
         {
            activeFlag
               ?
               <div className="loaderSection">
                  <div className="loaderContainer">
                     <div className="loaderImg">
                        <img src={Img} alt="Loader Img" />
                     </div>
                  </div>
               </div>
               :
               <></>
         }
      </>
   )
}