export enum UserType {
  CUSTOMER = "CUSTOMER",
  TRADESPERSON = "TRADESPERSON",
}

export interface User {
  userId: string;
  userName: string;
  userProfileName: string;
  firstName: string;
  lastName: string;
  userType: UserType;
}

export enum ProjectType {
  PLUMBING = "PLUMBING",
  ELECTRICAL = "ELECTRICAL",
  OTHER = "OTHER",
}

export interface CustomerProject {
  projectId: string;
  projectType: ProjectType;
  name: string;
  description: string;
  expectedHours: number;
  createdDateTime: string;
  expiryDateTime: string;
  poster?: User;
}

export enum HoursType {
  HOURLY = "HOURLY",
  FIXED = "FIXED",
}

export interface Bidder {
  userId: string;
  userProfileName: string;
}

export interface WinningBid {
  bidId: string;
  bidType: HoursType;
  createdDateTime: string;
  price: number;
  bidder: Bidder;
}

export interface CustomerJob {
  jobId: string;
  project: CustomerProject;
  winningBids?: WinningBid[];
  bid: Bid;
}

export interface Bid {
  bidId: string;
  bidType: HoursType;
  price: number;
  bidder?: Bidder;
}

export interface ProjectDetails {
  projectType: ProjectType;
  name: string;
  description: string;
  expectedHours: number;
  expiryDateTime: string;
  bids: Bid[];
}

export interface BidProjects extends Bid {
  createdDateTime: string;
  project: CustomerProject;
}
