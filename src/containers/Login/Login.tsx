import axios from "axios";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { BASE_URL } from "../../constants";
import { UserContext } from "../../provider/UserProvider";
import { ErrorCodes, ErrorMessages, RouteURLs } from "../../types/enum";
import { User, UserType } from "../../types/model";

import "./Login.css";

interface Props {}

const Login = (props: Props) => {
  const { setUser } = React.useContext(UserContext);
  const [username, setUsername] = React.useState("null");
  const [error, setError] = React.useState("");

  const navigate = useNavigate();

  const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    axios
      .get<User>(`${BASE_URL}/user/${username}`)
      .then((response) => {
        // console.log("all good", response.data);
        setUser(response.data);

        switch (response.data.userType) {
          case UserType.CUSTOMER:
            navigate(RouteURLs.CUSTOMER_DASHBOARD);
            break;
          case UserType.TRADESPERSON:
            navigate(RouteURLs.TRADESPERSON_HOME);
            break;
          default:
            navigate(RouteURLs.ERROR_PAGE);
            break;
        }

        setError("");
      })
      .catch((err) => {
        console.error(err);
        setError(
          err.code === ErrorCodes.BAD_REQUEST
            ? ErrorMessages.USER_NOT_FOUND
            : ErrorMessages.GENERIC_ERROR
        );
      });
  };

  return (
    <div className="Login">
      <form onSubmit={(e) => onLogin(e)}>
        <label htmlFor="username">User name: </label>
        <input
          id="username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <Button type="submit">Submit</Button>
        {error && <small className="Error">{error}</small>}
      </form>
    </div>
  );
};

export default Login;
