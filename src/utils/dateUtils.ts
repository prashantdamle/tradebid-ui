import { format } from "date-fns";

export const UIDateTimeFormat = "MMM dd, yyyy, hh:mm:ss aaaa";

export const formatDate = (date: string) => {
  return format(new Date(date), UIDateTimeFormat);
};

//workaround
// export const formatDate = (date: string | number) => {
//   // @ts-ignore
//   const test = Date(date);
//   console.log(test);
//   return format(new Date(test), UIDateTimeFormat);
// };
