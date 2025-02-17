import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './Components/Layout/Layout';
import { Dashboard } from './Views/Dashboard/Dashboard';
import { Aboutus } from './Views/AboutUs/AboutUs';
import { DataScienceCourse } from './Views/Courses/DataScienceCourse/DataScienceCourse';
import { DBMSCourse } from './Views/Courses/DBMSCourse/DBMSCourse';
import { JavaCourse } from './Views/Courses/JavaCourse/JavaCourse';
import { DotNetCourse } from './Views/Courses/DotNetCourse/DotNetCourse';
import { MEANCourse } from './Views/Courses/MEANCourse/MEANCourse';
import { MERNCourse } from './Views/Courses/MERNCourse/MERNCourse';
import { ContactUs } from './Views/ContactUs/ContactUs';
import { Enrollment } from './Views/Enrollment/Enrollment';
import { RecruiterSignup } from './Views/RecruiterSignup/RecruiterSignup';
import { RecruiterLogin } from './Views/RecruiterLogin/RecruiterLogin';
import { ThankYou } from './Views/ThankYou/ThankYou';
import { ForgotPassword } from './Views/ForgotPassword/ForgotPassword';
import { ProtectedRoute } from './Views/RecruiterSection/ProtectedRoute/ProtectedRoute';
import { RecruiterDashboard } from './Views/RecruiterSection/RecruiterDashboard/RecruiterDashboard';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          children: [{ path: "/", element: <Dashboard /> }]
        },
        {
          path: "/aboutus",
          children: [{ path: "/aboutus", element: <Aboutus /> }]
        },
        {
          path: "/datasciencecourse",
          children: [{ path: "/datasciencecourse", element: <DataScienceCourse /> }]
        },
        {
          path: "/dbmscourse",
          children: [{ path: "/dbmscourse", element: <DBMSCourse /> }]
        },
        {
          path: "/javacourse",
          children: [{ path: "/javacourse", element: <JavaCourse /> }]
        },
        {
          path: "/dotnetcourse",
          children: [{ path: "/dotnetcourse", element: <DotNetCourse /> }]
        },
        {
          path: "/meancourse",
          children: [{ path: "/meancourse", element: <MEANCourse /> }]
        },
        {
          path: "/merncourse",
          children: [{ path: "/merncourse", element: <MERNCourse /> }]
        },
        {
          path: "/contactus",
          children: [{ path: "/contactus", element: <ContactUs /> }]
        },
        {
          path: "/enrollment",
          children: [{ path: "/enrollment", element: <Enrollment /> }]
        },
        {
          path: "/recruitersignup",
          children: [{ path: "/recruitersignup", element: <RecruiterSignup /> }]
        },
        {
          path: "/recruiterlogin",
          children: [{ path: "/recruiterlogin", element: <RecruiterLogin /> }]
        },
        {
          path: "/forgotpassword",
          children: [{ path: "/forgotpassword", element: <ForgotPassword /> }]
        },
        {
          path: "/thankyou",
          children: [{ path: "/thankyou", element: <ThankYou /> }]
        },
        {
          element: <ProtectedRoute></ProtectedRoute>,
          children: [
            {
              path: "/dashboard",
              children: [{ path: "/dashboard", element: <RecruiterDashboard></RecruiterDashboard> }]
            }
          ]



        }
      ],
    },
    {
      future: {
        v7_fetcherPersist: true,
        v7_relativeSplatPath: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionStatusRevalidation: true,
      },
    }
  ])
  return <RouterProvider
    future={{
      v7_startTransition: true,
      //v7_fetcherPersist: true,
      //v7_relativeSplatPath: true,
      // v7_normalizeFormMethod: true,
      //v7_partialHydration: true,
      //v7_skipActionStatusRevalidation: true,
    }}
    router={router}
  />
}

export default App;
