import { formatDate } from "./dateUtils";

it("checks date convertion function", () => {
  const sampleDate = "2022-10-20T22:31:00+11:00";
  const formattedDate = formatDate(sampleDate);
  const expectedDateformat = "Oct 20, 2022, 10:31:00 p.m.";
  expect(formattedDate).toEqual(expectedDateformat);
});
