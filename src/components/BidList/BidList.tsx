import * as React from "react";
import { BASE_URL } from "../../constants";
import GetDataProvider from "../../provider/GetDataProvider";
import { UserContext } from "../../provider/UserProvider";
import BidTable from "../BidTable/BidTable";

interface Props {}

const BidList = (props: Props) => {
  const { user } = React.useContext(UserContext);

  const url = `${BASE_URL}/user/${user?.userId}/bid-projects`;
  return (
    <GetDataProvider noItemsError="no bids found" apiUrl={url}>
      <BidTable />
    </GetDataProvider>
  );
};

export default BidList;
