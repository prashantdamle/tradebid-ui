import * as React from "react";
import { CustomerProject, UserType } from "../../types/model";
import { Button, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { RouteURLs } from "../../types/enum";
import { formatDate } from "../../utils/dateUtils";
import { orderBy } from "lodash";
import { UserContext } from "../../provider/UserProvider";
import { GetDataContext } from "../../provider/GetDataProvider";

interface Props {}

const ProjectTable = (props: Props) => {
  const navigate = useNavigate();
  const { user } = React.useContext(UserContext);
  const { data: projects } = React.useContext(GetDataContext);
  const isTradesperson = user?.userType === UserType.TRADESPERSON;

  const projectRowClickHandler = (projectId: string) => {
    if (!isTradesperson) {
      navigate(`${RouteURLs.PROJECT_DETAIL}?pid=${projectId}`);
    }
    return;
  };

  return (
    <>
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Type</th>
            <th>Name</th>
            <th>Description</th>
            <th>Hours</th>
            <th>Created</th>
            <th>Expiry</th>
            {isTradesperson && <th>Bid?</th>}
          </tr>
        </thead>
        <tbody>
          {orderBy(projects, "createdDateTime", ["desc"]).map(
            (project: CustomerProject, index) => (
              <tr
                key={project.projectId}
                style={{
                  cursor: `${isTradesperson ? "default" : "pointer"}`,
                }}
                onClick={() => projectRowClickHandler(project.projectId)}
              >
                <th scope="row">{index + 1}</th>
                <td>{project.projectType}</td>
                <td>{project.name}</td>
                <td>{project.description}</td>
                <td>{project.expectedHours}</td>
                <td>{formatDate(project.createdDateTime)}</td>
                <td>{formatDate(project.expiryDateTime)}</td>
                {isTradesperson && (
                  <td>
                    <Button
                      onClick={() =>
                        navigate(
                          `${RouteURLs.CREATE_BID}?pid=${project.projectId}&pname=${project.name}`
                        )
                      }
                    >
                      Bid
                    </Button>
                  </td>
                )}
              </tr>
            )
          )}
        </tbody>
      </Table>
    </>
  );
};

export default ProjectTable;
