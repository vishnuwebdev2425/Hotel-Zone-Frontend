import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Register from "./src/components/Register";
import Signin from "./src/components/Signin";
import Adminhome from "./src/components/Adminhome";
import AddMenu from "./src/components/AddMenu";
import HotelLogin from "./src/components/HotelLogin";

import userContext from "./src/utils/userContext";

import { useEffect } from "react";
import Customer from "./src/components/Customer";
import Menu from "./src/components/Menu";
import Dinning from "./src/components/Dinning";
import ShowDinning from "./src/components/ShowDinning";
import DinningStatus from "./src/components/DinningStatus";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Showcart from "./src/components/Showcart";
import ContactUs from "./src/components/contactus";
import AboutUs from "./src/components/Aboutus";
import Reviews from "./src/components/Reviews";
import HowItWorks from "./src/components/HowitWork";


const App=()=>{
    const [user,setUser]=useState({
        username:"",
        number:""
    })

    useEffect(() => {     
    }, [user]);

    return (
      <div>
        <Provider store={appStore}>
          <userContext.Provider value={{ user, setUser }}>
            <Header />
            <Outlet />
            <Footer />
          </userContext.Provider>
        </Provider>
      </div>
    );
}

const rootaddress = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Body />,
      },
      {
        path: "login",
        element: <Signin />,
      },
        {
        path: "hotellogin",
        element: <HotelLogin />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path:"contactus",
        element:<ContactUs/>

      },{
        path:"aboutus",
        element:<AboutUs/>
      },{
        path:"reviews",
        element:<Reviews/>
      },
     
    ],
  },

  {
    path: "/admin",
    element: <App />,
    children: [
      {
        index: true,
        element: <Adminhome />,
      },
      {
        path: "addmenu",
        element: <AddMenu />,
      },
      {
        path:"adddinning",
        element:<Dinning/>
      },
        
       {
        path: "customerWorkspace",
        element: <Customer/>,
      },
      {
        path:"checkmenu",
        element:<Menu/>
      },{
        path:"showDinning",
        element:<ShowDinning/>
      },{
        path:"showcartinfo",
        element:<Showcart/>
      },{
        path:"howitworks",
        element:<HowItWorks/>
      },
      {
        path:"modifydinning",
        element:<DinningStatus/>
      }
    ],
  },
]);

const id=document.getElementById("root");
const root=ReactDOM.createRoot(id);
root.render(<RouterProvider router={rootaddress}/>);
