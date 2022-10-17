import * as React from "react";
import { UserContext } from "../../provider/UserProvider";
import { BASE_URL } from "../../constants";
import ProjectTable from "../ProjectTable/ProjectTable";
import { UserType } from "../../types/model";
import GetDataProvider from "../../provider/GetDataProvider";

interface Props {}

const ProjectList = (props: Props) => {
  const { user } = React.useContext(UserContext);

  const url = `${BASE_URL}/user/${user?.userId}/${
    user?.userType === UserType.CUSTOMER ? "projects" : "customer-projects"
  }`;

  return (
    <GetDataProvider noItemsError="no projects found" apiUrl={url}>
      <ProjectTable />
    </GetDataProvider>
  );
};

export default ProjectList;
