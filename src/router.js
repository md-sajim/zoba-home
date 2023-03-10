import { createBrowserRouter } from "react-router-dom";
import Admine from "./componant/AllUser/Admine/Admine";
import Agant from "./componant/AllUser/Agant/Agant";
import Allagent from "./componant/AllUser/Allagant/Allagent";
import Allbuyer from "./componant/AllUser/Allbuyer/Allbuyer";
import Allseller from "./componant/AllUser/Allseller/Allseller";
import Buyer from "./componant/AllUser/Buyer/Buyer";
import Seller from "./componant/AllUser/Seller/Seller";
import AddProperty from "./componant/AllUser/Seller/Selleritems/AddProperty/AddProperty";
import MyProduct from "./componant/AllUser/Seller/Selleritems/Myproduct/MyProduct";
import Sellproperty from "./componant/AllUser/Seller/Selleritems/Sellproperty/Sellproperty";
import BuyItems from "./componant/Catagory/BuyItems/BuyItems";
import Rentitems from "./componant/Catagory/RentItems/Rentitems";
import Sellitems from "./componant/Catagory/SellItems/Sellitems";
import Home from "./componant/Home/Home/Home";
import Main from "./componant/LayOut/Main/Main";
import PribateRoute from "./componant/PribateRoute/PribateRoute";

export const routs = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/sell",
        element: <PribateRoute><Sellitems></Sellitems></PribateRoute>
      },
      {
        path: "/buy",
        element: <PribateRoute><BuyItems></BuyItems></PribateRoute>
      },
      {
        path: "/rent",
        element: <PribateRoute><Rentitems></Rentitems></PribateRoute>
      },
      {
        path: "/admin",
        element: <Admine></Admine>,
        children: [
          {
            path: '/admin',
            element: <Allseller></Allseller>
          },
          {
            path: '/admin/allbuyer',
            element: <Allbuyer></Allbuyer>
          },
          {
            path: '/admin/allagant',
            element: <Allagent></Allagent>
          }
        ]
      },
      {
        path: "/seller",
        element: <PribateRoute><Seller></Seller></PribateRoute>,
        children: [
          {
            path: "/seller",
            element: <MyProduct></MyProduct>
          },
          {
            path: "/seller/sellproperty",
            element: <Sellproperty></Sellproperty>
          },
          {
            path: "/seller/addproperty",
            element: <AddProperty></AddProperty>
          }
        ]
      },
      {
        path: "/buyer",
        element: <Buyer></Buyer>
      },
      {
        path: "/agant",
        element: <Agant></Agant>
      }
    ]
  },
])