import * as React from "react";
import {
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import ProjectList from "../../components/ProjectList/ProjectList";
import { TradespersonTabs, RouteURLs } from "../../types/enum";
import { Link } from "react-router-dom";
import BidList from "../../components/BidList/BidList";
import LogoutButton from "../../components/LogoutButton/LogoutButton";
import JobList from "../../components/JobList/JobList";

import "./TradespersonDashboard.css";

interface Props {}

const TradespersonDashboard = (props: Props) => {
  const [currentTab, setCurrentTab] = React.useState<TradespersonTabs>(
    TradespersonTabs.CUSTOMER_PROJECT_LIST
  );

  return (
    <div className="CustomerDashboard">
      <div>
        <Link to={RouteURLs.USER_PROFILE}>My profile</Link>{" "}
        <Link to={RouteURLs.TRADESPERSON_HOME}>Home</Link> <LogoutButton />
      </div>
      <br />

      <Nav tabs>
        <NavItem>
          <NavLink
            className={
              currentTab === TradespersonTabs.CUSTOMER_PROJECT_LIST
                ? "active"
                : ""
            }
            onClick={() =>
              setCurrentTab(TradespersonTabs.CUSTOMER_PROJECT_LIST)
            }
          >
            {TradespersonTabs.CUSTOMER_PROJECT_LIST}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={currentTab === TradespersonTabs.BID_LIST ? "active" : ""}
            onClick={() => setCurrentTab(TradespersonTabs.BID_LIST)}
          >
            {TradespersonTabs.BID_LIST}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={currentTab === TradespersonTabs.JOB_LIST ? "active" : ""}
            onClick={() => setCurrentTab(TradespersonTabs.JOB_LIST)}
          >
            {TradespersonTabs.JOB_LIST}
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={currentTab}>
        <TabPane tabId={TradespersonTabs.CUSTOMER_PROJECT_LIST}>
          <Row>
            <Col>
              <h2>Customer projects</h2>
              <br />
              <ProjectList />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId={TradespersonTabs.BID_LIST}>
          <Row>
            <Col>
              <h2>Your bids on customer projects</h2>
              <br />
              <BidList />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId={TradespersonTabs.JOB_LIST}>
          <Row>
            <Col>
              <h2>Jobs won</h2>
              <br />
              <JobList />
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default TradespersonDashboard;
