import * as React from "react";
import {
  Button,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import JobList from "../../components/JobList/JobList";
import ProjectList from "../../components/ProjectList/ProjectList";
import { CustomerTabs, RouteURLs } from "../../types/enum";
import { Link, useNavigate } from "react-router-dom";

import "./CustomerDashboard.css";
import { UserType } from "../../types/model";
import { UserContext } from "../../provider/UserProvider";
import LogoutButton from "../../components/LogoutButton/LogoutButton";

interface Props {}

const CustomerDashboard = (props: Props) => {
  const navigate = useNavigate();
  const { user } = React.useContext(UserContext);
  const isTradesperson = user?.userType === UserType.TRADESPERSON;

  const [currentTab, setCurrentTab] = React.useState<CustomerTabs>(
    CustomerTabs.PROJECT_LIST
  );

  return (
    <div className="CustomerDashboard">
      <div>
        <Link to={RouteURLs.USER_PROFILE}>My profile</Link>{" "}
        {isTradesperson && <Link to={RouteURLs.TRADESPERSON_HOME}>Home</Link>}{" "}
        <LogoutButton />
      </div>
      <br />
      <Nav tabs>
        <NavItem>
          <NavLink
            className={currentTab === CustomerTabs.PROJECT_LIST ? "active" : ""}
            onClick={() => setCurrentTab(CustomerTabs.PROJECT_LIST)}
          >
            {CustomerTabs.PROJECT_LIST}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={currentTab === CustomerTabs.JOB_LIST ? "active" : ""}
            onClick={() => setCurrentTab(CustomerTabs.JOB_LIST)}
          >
            {CustomerTabs.JOB_LIST}
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={currentTab}>
        <TabPane tabId={CustomerTabs.PROJECT_LIST}>
          <Row>
            <Col>
              <h2>Projects</h2>
              <br />
              <ProjectList />
              <br />
              <br />
              <div className="add-button">
                <Button
                  color="primary"
                  onClick={() => navigate(RouteURLs.CREATE_PROJECT)}
                >
                  Create project
                </Button>
              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId={CustomerTabs.JOB_LIST}>
          <Row>
            <Col>
              <h2>Current jobs</h2>
              <br />
              <JobList />
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default CustomerDashboard;
