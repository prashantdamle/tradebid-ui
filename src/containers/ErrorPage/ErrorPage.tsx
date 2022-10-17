import * as React from "react";

import "./ErrorPage.css";

interface Props {}

const ErrorPage = (props: Props) => {
  return (
    <div className="ErrorPage">
      <h2>Oops! Something went wrong, Please try again later.</h2>
    </div>
  );
};

export default ErrorPage;
