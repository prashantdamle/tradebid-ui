import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { RouteURLs } from "./types/enum";
import CustomerDashboard from "./containers/CustomerDashboard/CustomerDashboard";
import Login from "./containers/Login/Login";
import UserProvider from "./provider/UserProvider";
import UserProfile from "./containers/UserProfile/UserProfile";
import CreateProject from "./containers/CreateProject/CreateProject";
import ProjectDetail from "./containers/ProjectDetail/ProjectDetail";
import TradespersonDashboard from "./containers/TradespersonDashboard/TradespersonDashboard";
import TradespersonHome from "./containers/TradespersonHome/TradespersonHome";
import CreateBid from "./containers/CreateBid/CreateBid";
import { PrivateRoutes } from "./provider/PrivateRoute";
import PageNotFound from "./containers/PageNotFound/PageNotFound";
import ErrorPage from "./containers/ErrorPage/ErrorPage";
import JobDetail from "./containers/JobDetail/JobDetail";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route element={<PrivateRoutes />}>
          <Route
            path={RouteURLs.CUSTOMER_DASHBOARD}
            element={<CustomerDashboard />}
          />
          <Route
            path={RouteURLs.TRADESPERSON_DASHBOARD}
            element={<TradespersonDashboard />}
          />
          <Route
            path={RouteURLs.TRADESPERSON_HOME}
            element={<TradespersonHome />}
          />
          <Route path={RouteURLs.USER_PROFILE} element={<UserProfile />} />
          <Route path={RouteURLs.CREATE_PROJECT} element={<CreateProject />} />
          <Route path={RouteURLs.PROJECT_DETAIL} element={<ProjectDetail />} />
          <Route path={RouteURLs.CREATE_BID} element={<CreateBid />} />
          <Route path={RouteURLs.JOB_DETAIL} element={<JobDetail />} />
        </Route>

        <Route path={RouteURLs.LOGIN} element={<Login />} />
        <Route path={RouteURLs.ERROR_PAGE} element={<ErrorPage />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
