import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";
import Clients from "../Pages/Clients";
import Technology from "../Pages/Technology";
import Carrers from "../Pages/Carrers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about-us", element: <About /> },
      { path: "/our-services", element: <Services /> },
      { path: "/our-clients", element: <Clients /> },
      { path: "/projects", element: <Projects /> },
      { path: "/technology", element: <Technology /> },
      { path: "/contact-us", element: <Contact /> },
      { path: "/carrers", element: <Carrers /> },
    ],
  },
]);

export default router;
