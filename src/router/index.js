import { createBrowserRouter } from "react-router-dom";
import Homepage from '../pages/homepage';
import App from '../App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/dragmeBuilder",
    element: <App />,
  },
]);

  export default router;
  