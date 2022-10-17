import * as React from "react";
import { BASE_URL } from "../../constants";
import GetDataProvider from "../../provider/GetDataProvider";
import { UserContext } from "../../provider/UserProvider";
import { UserType } from "../../types/model";
import JobTable from "../JobTable/JobTable";

interface Props {}

const JobList = (props: Props) => {
  const { user } = React.useContext(UserContext);

  const url = `${BASE_URL}/user/${user?.userId}/${
    user?.userType === UserType.CUSTOMER ? "jobs" : "jobs-won"
  }`;

  return (
    <GetDataProvider noItemsError="no jobs found" apiUrl={url}>
      <JobTable />
    </GetDataProvider>
  );
};

export default JobList;
