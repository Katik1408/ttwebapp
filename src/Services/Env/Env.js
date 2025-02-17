const localhostUrl = "http://localhost:5000/technotutor_v2/"

export const APIUrl = localhostUrl;

export const APIs = {
   recruiterSection: {
      sendOTP: APIUrl + "sendotp",
      verifyOTP: APIUrl + "verifyotp", //SignupAPI
      isEmailExist: APIUrl + "isemailexist",
      login: APIUrl + "login",
      forgotOTP: APIUrl + "forgototp",
      forgotPassOTPVerify: APIUrl + "forgotpassotpverify",
      resetPassword: APIUrl + "resetpassword"
   },

   enrollmentSection: {
      OTPEnrollmentForm: APIUrl + "otpenrollmentfrom",
      verifyEnrollmentForm: APIUrl + "verifyenrollmentform",
      UploadResume: APIUrl + "uploadresume",
      saveEnrollmentDtls: APIUrl + "saveenrollmentdtl"
   },

   afterLoginSection: {
      verifyJWT: APIUrl + "verifyjwt"
   }


}