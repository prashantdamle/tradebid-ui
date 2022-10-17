import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CreateBid from "./CreateBid";

const mockedUsedNavigate = jest.fn();
const searchParams = {
  pid: "123",
  pname: "project test name",
  get: (pid: string) => {
    return pid;
  },
};

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
  useSearchParams: () => [searchParams],
}));

it("renders correctly", () => {
  const { container } = render(
    <MemoryRouter>
      <CreateBid />
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
