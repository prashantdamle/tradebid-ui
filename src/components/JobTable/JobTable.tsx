import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "reactstrap";
import { GetDataContext } from "../../provider/GetDataProvider";
import { UserContext } from "../../provider/UserProvider";
import { RouteURLs } from "../../types/enum";
import { CustomerJob, UserType } from "../../types/model";
import { formatDate } from "../../utils/dateUtils";

interface Props {}

const JobTable = (props: Props) => {
  const navigate = useNavigate();
  const { user } = React.useContext(UserContext);
  const { data } = React.useContext(GetDataContext);
  const isTradesperson = user?.userType === UserType.TRADESPERSON;

  const jobRowClickHandler = (jobId: string) => {
    if (!isTradesperson) {
      navigate(`${RouteURLs.JOB_DETAIL}?jid=${jobId}`);
    }
    return;
  };

  return (
    <div className="JobTable">
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Type</th>
            <th>Name</th>
            <th>Description</th>
            <th>Hours</th>
            <th>Project created date</th>
            {isTradesperson && (
              <>
                <th>Bid type</th>
                <th>Bid price</th>
                <th>Project postee</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {data?.map((job: CustomerJob, index: number) => (
            <tr
              key={job.jobId}
              style={{
                cursor: `${isTradesperson ? "default" : "pointer"}`,
              }}
              onClick={() => jobRowClickHandler(job.jobId)}
            >
              <th scope="row">{index + 1}</th>
              <td>{job.project.projectType}</td>
              <td>{job.project.name}</td>
              <td>{job.project.description}</td>
              <td>{job.project.expectedHours}</td>
              <td>{formatDate(job.project.createdDateTime)}</td>
              {isTradesperson && (
                <>
                  <td>{job.bid.bidType}</td>
                  <td>{job.bid.price}</td>
                  <td>{job.project.poster?.userProfileName}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default JobTable;
