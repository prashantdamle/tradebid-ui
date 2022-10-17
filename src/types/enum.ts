export enum ErrorCodes {
  BAD_REQUEST = "ERR_BAD_REQUEST",
}

export enum ErrorMessages {
  USER_NOT_FOUND = "User not found",
  FORM_ERROR = "All fields mandatory",
  GENERIC_ERROR = "Something went wrong, try again later!",
}

export enum RouteURLs {
  LOGIN = "/",
  TRADESPERSON_HOME = "/home",
  CUSTOMER_DASHBOARD = "/customer-dashboard",
  TRADESPERSON_DASHBOARD = "/tradesperson-dashboard",
  USER_PROFILE = "/user-profile",
  CREATE_PROJECT = "/create-project",
  PROJECT_DETAIL = "/project-detail",
  CREATE_BID = "/create-bid",
  JOB_DETAIL = "/job-detail",
  ERROR_PAGE = "/error",
}

export enum CustomerTabs {
  PROJECT_LIST = "projects",
  JOB_LIST = "jobs",
}

export enum TradespersonTabs {
  CUSTOMER_PROJECT_LIST = "customer-projects",
  BID_LIST = "bids",
  JOB_LIST = "jobs",
}
