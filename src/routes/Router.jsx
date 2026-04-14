import { createBrowserRouter } from "react-router";
import Rootlayout from "../layout/Rootlayout";
import Home from "../pages/home/Home";
import Coverage from "../pages/coverage/Coverage";
import Services from "../pages/services/Sevices"
import AboutUs from "../pages/aboutUs/AboutUs";
import Pricing from "../pages/pricing/Pricing";
import BeRider from "../pages/beRider/BeRider";
import Blog from "../pages/blog/Blog";
import Contract from "../pages/contract/Contract";

const router = createBrowserRouter([
  {
    path : "/",
    Component : Rootlayout,
    children : [
      {
        index : true,
        Component : Home
      },
      {
        path : "/coverage",
        element : <Coverage></Coverage>
      },
      {
       path : "/services" ,
       element : <Services></Services>
      },
      {
        path : "/about-us",
        element : <AboutUs></AboutUs>
      },
      {
        path : "/Pricing",
        element : <Pricing></Pricing>
      },
      {
        path : "/be-a-rider",
        element : <BeRider></BeRider>
      },
      {
        path : "/blog",
        element : <Blog></Blog>
      },
      {
        path : "/contract",
        element : <Contract></Contract>
      }
    ]
  }
])

export default router;