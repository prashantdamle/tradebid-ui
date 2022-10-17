import * as React from "react";
import { ErrorMessages } from "../../types/enum";

interface Props {
  [key: string]: any;
}

const GenericErrorMessage = (props: Props) => {
  return <div className="Error">{ErrorMessages.GENERIC_ERROR}</div>;
};

export default GenericErrorMessage;
