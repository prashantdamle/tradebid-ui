import * as React from "react";
import { Spinner } from "reactstrap";

interface Props {
  [key: string]: any;
}

const Loading = (props: Props) => {
  return (
    <Spinner className="m-5" color="primary">
      Loading...
    </Spinner>
  );
};

export default Loading;
