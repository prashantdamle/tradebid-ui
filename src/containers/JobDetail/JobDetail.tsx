import useAxios from "axios-hooks";
import * as React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Table } from "reactstrap";
import { BASE_URL } from "../../constants";
import { UserContext } from "../../provider/UserProvider";
import { ErrorMessages, RouteURLs } from "../../types/enum";
import { UserType, WinningBid } from "../../types/model";
import { formatDate } from "../../utils/dateUtils";
import Loading from "../../components/Loading/Loading";

import "./JobDetail.css";

interface Props {}

const JobDetail = (props: Props) => {
  const { user } = React.useContext(UserContext);
  const [searchParams] = useSearchParams();
  const jid = searchParams.get("jid");
  const [{ data, loading, error }] = useAxios(
    `${BASE_URL}/user/${user?.userId}/job/${jid}`
  );
  const isTradesperson = user?.userType === UserType.TRADESPERSON;

  if (error) return <div>{ErrorMessages.GENERIC_ERROR}</div>;
  if (loading) return <Loading />;

  return (
    <div className="JobDetail">
      <Link
        to={
          isTradesperson
            ? RouteURLs.TRADESPERSON_DASHBOARD
            : RouteURLs.CUSTOMER_DASHBOARD
        }
      >
        Back to Dashboard
      </Link>
      <br />
      <br />
      <h3>Job Details: </h3>
      <br />
      <div>
        <p>
          <span className="detail-header">Project Type</span> :{" "}
          {data.project.projectType}
        </p>
        <p>
          <span className="detail-header">Project Name</span> :{" "}
          {data.project.name}
        </p>
        <p>
          <span className="detail-header">Project Description</span> :{" "}
          {data.project.description}
        </p>
        <p>
          <span className="detail-header">Expected Hours</span> :{" "}
          {data.project.expectedHours}
        </p>
        <p>
          <span className="detail-header">Expiry Date Time</span> :{" "}
          {formatDate(data.project.expiryDateTime)}
        </p>
      </div>
      <br />
      <h3>Winning Bid Details: </h3>
      <br />
      {data && data.winningBids.length > 0 ? (
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Type</th>
              <th>Price</th>
              <th>Created date</th>
              <th>Bidder profile</th>
            </tr>
          </thead>
          <tbody>
            {data.winningBids.map((bid: WinningBid, index: number) => (
              <tr key={bid.bidId}>
                <th scope="row">{index + 1}</th>
                <td>{bid.bidType}</td>
                <td>{bid.price}</td>
                <td>{formatDate(bid.createdDateTime)}</td>
                <td>{bid.bidder.userProfileName}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div>No bids won</div>
      )}
    </div>
  );
};

export default JobDetail;
