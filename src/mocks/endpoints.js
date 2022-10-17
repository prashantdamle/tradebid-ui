exports.postLogin = {
  endpoint: "/login",
  data: {
    username: "test",
  },
  response: {
    data: {
      userId: "uid123",
      userProfileName: "test",
      userName: "test",
      firstName: "test",
      lastName: "test",
      // userType: "customer",
      userType: "tradesperson",
    },
  },
};

exports.projects = {
  endpoint: "/user/uid123/projects",

  response: {
    data: [
      {
        projectId: "abc",
        projectType: "PLUMBING",
        name: "test",
        description: "test",
        expectedHours: 3,
        createdDateTime: "2020-10-08T23:15:33.008Z",
        expiryDateTime: "2020-11-06T23:15:33.008Z",
      },
      {
        projectId: "xyz",
        projectType: "ELECTRICAL",
        name: "test",
        description: "test",
        expectedHours: 3,
        createdDateTime: "2020-10-08T23:15:33.008Z",
        expiryDateTime: "2020-11-06T23:15:33.008Z",
      },
    ],
  },
};

exports.jobs = {
  endpoint: "/user/uid123/jobs",

  response: {
    data: [
      {
        jobId: "123",
        jobType: "PLUMBING",
        name: "test",
        description: "test",
        expectedHours: 4,
        winningBid: {
          bidId: "test",
          type: "FIXED",
          price: 4,
          totalPrice: 4,
          bidder: {
            userId: "test",
            userProfileName: "test",
          },
        },
      },
      {
        jobId: "456",
        jobType: "PLUMBING",
        name: "test",
        description: "test",
        expectedHours: 4,
        winningBid: {
          bidId: "test",
          type: "FIXED",
          price: 4,
          totalPrice: 4,
          bidder: {
            userId: "test",
            userProfileName: "test",
          },
        },
      },
    ],
  },
};

exports.projectDetails = {
  endpoint: "/user/uid123/project/abc",

  response: {
    data: {
      projectType: "PLUMBING",
      name: "test",
      description: "test",
      expectedHours: 3,
      expiryDateTime: "2020-11-06T23:15:33.008Z",
      bids: [
        {
          bidId: "bidid123",
          type: "FIXED",
          price: 100,
          bidder: {
            userId: "bidderJon",
            userProfileName: "Jon_aws",
          },
        },
        {
          bidId: "bidid098",
          type: "HOURLY",
          price: 10,
          bidder: {
            userId: "bidderJane",
            userProfileName: "Jane_aws",
          },
        },
      ],
    },
  },
};

exports.projects = {
  endpoint: "/user/uid123/projects",

  response: {
    data: [
      {
        projectId: "abc",
        projectType: "PLUMBING",
        name: "test",
        description: "test",
        expectedHours: 3,
        createdDateTime: "2020-10-08T23:15:33.008Z",
        expiryDateTime: "2020-11-06T23:15:33.008Z",
      },
      {
        projectId: "xyz",
        projectType: "ELECTRICAL",
        name: "test",
        description: "test",
        expectedHours: 3,
        createdDateTime: "2020-10-08T23:15:33.008Z",
        expiryDateTime: "2020-11-06T23:15:33.008Z",
      },
    ],
  },
};

exports.customerProjects = {
  endpoint: "/customer-projects",

  response: {
    data: [
      {
        projectId: "pid123",
        projectType: "PLUMBING",
        name: "test",
        description: "test",
        expectedHours: 3,
        createdDateTime: "2020-10-08T23:15:33.008Z",
        expiryDateTime: "2020-11-06T23:15:33.008Z",
      },
      {
        projectId: "pid567",
        projectType: "ELECTRICAL",
        name: "test",
        description: "test",
        expectedHours: 3,
        createdDateTime: "2020-10-08T23:15:33.008Z",
        expiryDateTime: "2020-11-06T23:15:33.008Z",
      },
    ],
  },
};

exports.bids = {
  endpoint: "/user/uid123/bid-projects",

  response: {
    data: [
      {
        projectId: "pid123",
        projectType: "PLUMBING",
        name: "test",
        description: "test",
        expectedHours: 3,
        createdDateTime: "2020-10-08T23:15:33.008Z",
        expiryDateTime: "2020-11-06T23:15:33.008Z",
        bid: {
          bidId: "bidid098",
          type: "HOURLY",
          price: 10,
        },
      },
      {
        projectId: "pid567",
        projectType: "ELECTRICAL",
        name: "test",
        description: "test",
        expectedHours: 3,
        createdDateTime: "2020-10-08T23:15:33.008Z",
        expiryDateTime: "2020-11-06T23:15:33.008Z",
        bid: {
          bidId: "bidid056",
          type: "FIXED",
          price: 100,
        },
      },
    ],
  },
};
