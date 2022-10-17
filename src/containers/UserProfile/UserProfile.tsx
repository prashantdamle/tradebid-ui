import * as React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { UserContext } from "../../provider/UserProvider";
import { RouteURLs } from "../../types/enum";
import { UserType } from "../../types/model";

import "./UserProfile.css";

interface Props {}

const UserProfile = (props: Props) => {
  const { user } = React.useContext(UserContext);
  const backUrl =
    user?.userType === UserType.CUSTOMER
      ? RouteURLs.CUSTOMER_DASHBOARD
      : RouteURLs.TRADESPERSON_HOME;

  return (
    <div className="UserProfile">
      <Link to={backUrl}>Back to Home</Link>
      <br />
      <br />
      <Card>
        <CardBody>
          <CardTitle tag="h5">{user?.firstName}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {user?.userType}
          </CardSubtitle>
        </CardBody>
        <CardBody>
          <CardText></CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserProfile;
