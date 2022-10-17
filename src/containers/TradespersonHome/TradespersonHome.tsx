import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { RouteURLs } from "../../types/enum";

import "./TradespersonHome.css";

interface Props {}

const TradespersonHome = (props: Props) => {
  const navigate = useNavigate();

  return (
    <div className="TradespersonHome">
      <Button outline onClick={() => navigate(RouteURLs.CUSTOMER_DASHBOARD)}>
        Customer view
      </Button>
      <Button
        outline
        onClick={() => navigate(RouteURLs.TRADESPERSON_DASHBOARD)}
      >
        Tradesperson view
      </Button>
    </div>
  );
};

export default TradespersonHome;
