// we will require the file
const jsonServer = require("json-server");
const middlewares = jsonServer.defaults();
// obtain our request endpoints
const endpoints = require("./endpoints");
// obtain an instance of a server
const server = jsonServer.create();
// wire up the default node middlewares
server.use(middlewares);
// parse the body using bodyParser middleware
server.use(jsonServer.bodyParser);
// LOGIN ROUTE - POST
const { postLogin, projects, jobs, projectDetails, customerProjects, bids } =
  endpoints;

server.post(postLogin.endpoint, (req, res, next) => {
  const { username } = req.body;
  const responseObj =
    postLogin.data.username === username ? postLogin.response.data : null;

  if (responseObj) {
    res.send(responseObj);
  } else {
    res.status(401);
    res.send({
      errorMsg: "unauthorized",
      code: 401,
    });
  }
  next();
});

server.get(projects.endpoint, (req, res, next) => {
  const responseObj = projects.response.data;

  if (responseObj) {
    res.send(responseObj);
  } else {
    res.status(500);
    res.send({
      errorMsg: "internal server error",
      code: 500,
    });
  }
  next();
});

server.get(jobs.endpoint, (req, res, next) => {
  const responseObj = jobs.response.data;

  if (responseObj) {
    res.send(responseObj);
  } else {
    res.status(500);
    res.send({
      errorMsg: "internal server error",
      code: 500,
    });
  }
  next();
});

server.get(projectDetails.endpoint, (req, res, next) => {
  const responseObj = projectDetails.response.data;

  if (responseObj) {
    res.send(responseObj);
  } else {
    res.status(500);
    res.send({
      errorMsg: "internal server error",
      code: 500,
    });
  }
  next();
});

server.get(customerProjects.endpoint, (req, res, next) => {
  const responseObj = customerProjects.response.data;

  if (responseObj) {
    res.send(responseObj);
  } else {
    res.status(500);
    res.send({
      errorMsg: "internal server error",
      code: 500,
    });
  }
  next();
});

server.get(bids.endpoint, (req, res, next) => {
  const responseObj = bids.response.data;

  if (responseObj) {
    res.send(responseObj);
  } else {
    res.status(500);
    res.send({
      errorMsg: "internal server error",
      code: 500,
    });
  }
  next();
});

server.post(postLogin.endpoint, (req, res, next) => {
  const { username } = req.body;
  const responseObj =
    postLogin.data.username === username ? postLogin.response.data : null;

  if (responseObj) {
    res.send(responseObj);
  } else {
    res.status(401);
    res.send({
      errorMsg: "unauthorized",
      code: 401,
    });
  }
  next();
});

// SERVER ON PORT NUMBER AS SPECIFIED HERE
server.listen(4000, () => {
  console.log("JSON Server is running");
});
