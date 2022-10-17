import * as React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { RouteURLs } from "../types/enum";
import { UserContext } from "./UserProvider";

export const PrivateRoutes = () => {
  const { user } = React.useContext(UserContext);
  return user ? <Outlet /> : <Navigate to={RouteURLs.LOGIN} replace />;
};
