import * as React from "react";
import { Table } from "reactstrap";
import { GetDataContext } from "../../provider/GetDataProvider";
import { formatDate } from "../../utils/dateUtils";
import { orderBy } from "lodash";
import { BidProjects } from "../../types/model";

interface Props {}

const BidTable = (props: Props) => {
  const { data } = React.useContext(GetDataContext);

  return (
    <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>
            Project
            <br />
            type
          </th>
          <th>
            Project
            <br />
            name
          </th>
          <th>
            Project
            <br />
            description
          </th>
          <th>
            Project
            <br />
            hours
          </th>
          <th>
            Project
            <br />
            created date
          </th>
          <th>
            Project
            <br />
            expiry date
          </th>
          <th>
            Bid
            <br />
            created date
          </th>
          <th>
            Bid
            <br />
            type
          </th>
          <th>
            Bid
            <br />
            price
          </th>
        </tr>
      </thead>
      <tbody>
        {orderBy(data, "createdDateTime", ["desc"]).map(
          (bidProj: BidProjects, index) => (
            <tr key={bidProj.bidId}>
              <th scope="row">{index + 1}</th>
              <td>{bidProj.project.projectType}</td>
              <td>{bidProj.project.name}</td>
              <td>{bidProj.project.description}</td>
              <td>{bidProj.project.expectedHours}</td>
              <td>{formatDate(bidProj.project.createdDateTime)}</td>
              <td>{formatDate(bidProj.project.expiryDateTime)}</td>
              <td>{formatDate(bidProj.createdDateTime)}</td>
              <td>{bidProj.bidType}</td>
              <td>{bidProj.price}</td>
            </tr>
          )
        )}
      </tbody>
    </Table>
  );
};

export default BidTable;
