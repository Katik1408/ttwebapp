import axios from "axios"
import { useState } from "react"
import { APIs } from "../../../Services/Env/Env"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { activeLoader, deactiveLoader } from "../../../Redux/Slices/AccessLoader"

export const ProtectedRoute = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()

   console.log("Protected")

   useState(() => {
      dispatch(activeLoader())
      if (document.cookie !== "") {
         if (document.cookie.split("=")[0] === "technotutor") {
            let cookie = document.cookie.split("=")[1]
            const verifyCookie = new Promise((resolve, reject) => {
               axios.get(APIs.afterLoginSection.verifyJWT, {
                  params: {
                     token: cookie
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
            verifyCookie
               .then((data) => {
                  dispatch(deactiveLoader())
                  navigate("/dashboard")
               })
               .catch((data) => {
                  dispatch(deactiveLoader())
                  document.cookie = "technotutor="
                  navigate("/")
               })
         }
      } else {
         navigate("/")
         dispatch(deactiveLoader())
      }
   }, [])

   return (
      <>

      </>
   )
}