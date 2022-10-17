import * as React from "react";
import { Button, Form, FormGroup, Input, Label, Spinner } from "reactstrap";
import DateTimePicker from "react-datetime-picker";
import { CustomerProject, ProjectType } from "../../types/model";
import { ErrorMessages, RouteURLs } from "../../types/enum";
import { Link, useNavigate } from "react-router-dom";
import useAxios from "axios-hooks";
import { BASE_URL } from "../../constants";
import { UserContext } from "../../provider/UserProvider";

import "./CreateProject.css";

interface Props {}

const CreateProject = (props: Props) => {
  const navigate = useNavigate();
  const { user } = React.useContext(UserContext);

  const [endDateValue, setEndDateValue] = React.useState(new Date());
  const [projectTypeValue, setProjectTypeValue] = React.useState(
    ProjectType.PLUMBING
  );
  const [projectNameValue, setProjectNameValue] = React.useState("");
  const [projectDescValue, setProjectDescValue] = React.useState("");
  const [hoursValue, setHoursValue] = React.useState("");
  const [errorMsg, setErrorMsg] = React.useState("");

  const [{ data, loading, error }, execute] = useAxios<CustomerProject>(
    { method: "post", url: `${BASE_URL}/user/${user?.userId}/project` },
    { manual: true }
  );

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    setErrorMsg("");

    if (
      !endDateValue ||
      !projectTypeValue ||
      !projectNameValue ||
      !projectDescValue ||
      !hoursValue
    ) {
      setErrorMsg(ErrorMessages.FORM_ERROR);
      return;
    }

    const requestData = {
      projectType: projectTypeValue,
      name: projectNameValue,
      description: projectDescValue,
      expectedHours: hoursValue,
      expiryDateTime: new Date(endDateValue).toISOString(),
    };

    execute({ data: requestData });
  };

  React.useEffect(() => {
    if (data) {
      data?.projectId
        ? navigate(RouteURLs.CUSTOMER_DASHBOARD)
        : setErrorMsg(ErrorMessages.GENERIC_ERROR);
    }
  }, [data, navigate]);

  React.useEffect(() => {
    if (error) setErrorMsg(ErrorMessages.GENERIC_ERROR);
  }, [error]);

  return (
    <div className="CreateProject">
      <Link to={RouteURLs.CUSTOMER_DASHBOARD}>Back to Dashboard</Link>
      <br />
      <br />
      <h2>Create a project</h2>
      <small>(all fields mandatory)</small>
      <br />
      <Form onSubmit={submitHandler}>
        <FormGroup floating>
          <Input
            id="projectType"
            name="select"
            type="select"
            value={projectTypeValue}
            onChange={(e) => setProjectTypeValue(e.target.value as ProjectType)}
          >
            {Object.values(ProjectType).map((projType) => (
              <option key={projType}>{projType}</option>
            ))}
          </Input>
          <Label for="projectType">Select</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            id="projectName"
            name="projectName"
            placeholder="Project Name"
            type="text"
            value={projectNameValue}
            onChange={(e) => setProjectNameValue(e.target.value)}
          />
          <Label for="projectName">Project Name</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            id="projectDescription"
            name="projectDescription"
            placeholder="Project Description"
            type="text"
            value={projectDescValue}
            onChange={(e) => setProjectDescValue(e.target.value)}
          />
          <Label for="projectDescription">Project Description</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            id="expectedHours"
            name="expectedHours"
            placeholder="Expected Hours"
            type="tel"
            value={hoursValue}
            onChange={(e) => setHoursValue(e.target.value)}
          />
          <Label for="expectedHours">Expected Hours</Label>
        </FormGroup>{" "}
        <div>
          <DateTimePicker onChange={setEndDateValue} value={endDateValue} />
        </div>
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

export default CreateProject;
