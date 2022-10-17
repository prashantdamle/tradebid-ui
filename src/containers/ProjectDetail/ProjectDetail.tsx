import useAxios from "axios-hooks";
import * as React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Table } from "reactstrap";
import Loading from "../../components/Loading/Loading";
import { BASE_URL } from "../../constants";
import { UserContext } from "../../provider/UserProvider";
import { ErrorMessages, RouteURLs } from "../../types/enum";
import { Bid } from "../../types/model";
import { formatDate } from "../../utils/dateUtils";

import "./ProjectDetail.css";

interface Props {}

const ProjectDetail = (props: Props) => {
  const { user } = React.useContext(UserContext);
  const [searchParams] = useSearchParams();
  const pid = searchParams.get("pid");
  const [{ data, loading, error }] = useAxios(
    `${BASE_URL}/user/${user?.userId}/project/${pid}`
  );

  if (error) return <div>{ErrorMessages.GENERIC_ERROR}</div>;
  if (loading) return <Loading />;

  return (
    <div className="ProjectDetail">
      <Link to={RouteURLs.CUSTOMER_DASHBOARD}>Back to Dashboard</Link>
      <br />
      <br />
      <h3>Project Details: </h3>
      <br />
      <div>
        <p>
          <span className="detail-header">Project Type</span> :{" "}
          {data.projectType}
        </p>
        <p>
          <span className="detail-header">Project Name</span> : {data.name}
        </p>
        <p>
          <span className="detail-header">Project Description</span> :{" "}
          {data.description}
        </p>
        <p>
          <span className="detail-header">Expected Hours</span> :{" "}
          {data.expectedHours}
        </p>
        <p>
          <span className="detail-header">Expiry Date Time</span> :{" "}
          {formatDate(data.expiryDateTime)}
        </p>
      </div>
      <br />
      {data?.bids?.length > 0 ? (
        <>
          <h4>Bids: </h4>
          <Table hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Type</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {data.bids.map((bid: Bid, index: number) => (
                <tr key={bid.bidId}>
                  <th scope="row">{index + 1}</th>
                  <td>{bid?.bidder?.userProfileName}</td>
                  <td>{bid.bidType}</td>
                  <td>{bid.price}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      ) : (
        <p>No bids yet on this project</p>
      )}
    </div>
  );
};

export default ProjectDetail;
