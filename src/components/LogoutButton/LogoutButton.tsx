import * as React from "react";
import { Button } from "reactstrap";

import "./LogoutButton.css";

interface Props {}

const LogoutButton = (props: Props) => {
  return (
    <Button
      color="link"
      className="LogoutButton"
      onClick={() => {
        window.location.reload();
      }}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
