import * as React from "react";
import { Button, Form, FormGroup, Input, Label, Spinner } from "reactstrap";
import { Bid, HoursType } from "../../types/model";
import { ErrorMessages, RouteURLs } from "../../types/enum";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { UserContext } from "../../provider/UserProvider";
import useAxios from "axios-hooks";
import { BASE_URL } from "../../constants";

import "./CreateBid.css";

interface Props {}

const CreateBid = (props: Props) => {
  const navigate = useNavigate();
  const { user } = React.useContext(UserContext);
  const userId = user?.userId;
  const [searchParams] = useSearchParams();
  const pid = searchParams.get("pid");
  const pname = searchParams.get("pname");

  const [bidTypeValue, setBidTypeValue] = React.useState<HoursType>(
    HoursType.FIXED
  );
  const [priceValue, setPriceValue] = React.useState("");
  const [errorMsg, setErrorMsg] = React.useState("");

  const [{ data, loading, error }, execute] = useAxios<Bid>(
    {
      method: "post",
      url: `${BASE_URL}/user/${userId}/customer-project/${pid}/bid`,
    },
    { manual: true }
  );

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    if (!bidTypeValue || !priceValue) {
      setErrorMsg(ErrorMessages.FORM_ERROR);
      return;
    }

    const requestData = {
      userId,
      bidType: bidTypeValue,
      price: Number(priceValue),
    };

    execute({ data: requestData });
  };

  React.useEffect(() => {
    if (data) {
      data?.bidId
        ? navigate(RouteURLs.TRADESPERSON_DASHBOARD)
        : setErrorMsg(ErrorMessages.GENERIC_ERROR);
    }
  }, [data, navigate]);

  React.useEffect(() => {
    if (error) setErrorMsg(ErrorMessages.GENERIC_ERROR);
  }, [error]);

  return (
    <div className="CreateBid">
      <Link to={RouteURLs.TRADESPERSON_DASHBOARD}>Back to Dashboard</Link>
      <br />
      <br />
      <h2>{`Create a bid for project '${pname}'`}</h2>
      <small>(all fields mandatory)</small>
      <br />
      <Form onSubmit={submitHandler}>
        <FormGroup floating>
          <Input
            id="bidType"
            name="select"
            type="select"
            value={bidTypeValue}
            onChange={(e) => setBidTypeValue(e.target.value as HoursType)}
          >
            {Object.values(HoursType).map((hourType) => (
              <option key={hourType}>{hourType}</option>
            ))}
          </Input>
          <Label for="bidType">Select</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            id="price"
            name="price"
            placeholder="Price"
            type="tel"
            value={priceValue}
            onChange={(e) => setPriceValue(e.target.value)}
          />
          <Label for="price">Price</Label>
        </FormGroup>{" "}
        <br />
        <Button type="submit" disabled={loading}>
          <span>{loading ? "Loading" : "Submit"} </span>
          {loading && <Spinner size="sm">Loading...</Spinner>}
        </Button>
        {errorMsg && <small className="Error">{errorMsg}</small>}
      </Form>
    </div>
  );
};

export default CreateBid;
