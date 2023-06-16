import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import TermService from "../pages/TermService";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Contributors from "../pages/contributors";
import Homepage from '../pages/homepage';
import Pricing from "../pages/pricing";
import PrivacyPolicy from "../pages/privacyPolicy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/swiftvelBuilder",
    element: <App />,
  },
  {
    path: "/signIn",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <Register />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/terms-of-service",
    element: <TermService />,
  },
  {
    path: "/contributors",
    element: <Contributors />,
  },
]);

  export default router;
  