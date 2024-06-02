import { UserContext } from "./../userRole";
import React, { useContext } from "react";
import {Navigate} from "react-router-dom";



const PrivateRoute = (props) => {
    const { userRole } = useContext(UserContext);
    if (userRole === "admin") {
      return <>{props.children}</>;
    } else {
    return <Navigate to="/" />;
    }
  };

export default PrivateRoute;