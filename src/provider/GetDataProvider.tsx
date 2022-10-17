import * as React from "react";
import useAxios, { configure } from "axios-hooks";
import GenericErrorMessage from "../components/GenericErrorMessage/GenericErrorMessage";
import Loading from "../components/Loading/Loading";

export interface GetDataContextType<T = []> {
  data: T | null;
}

const GetDataContextInitialValue: GetDataContextType<null> = {
  data: null,
};

export const GetDataContext = React.createContext<Partial<GetDataContextType>>(
  GetDataContextInitialValue
);

interface GetDataProviderProps {
  noItemsError: React.ReactNode;
  apiUrl: string;
  children: React.ReactNode;
}

const GetDataProvider: React.FC<GetDataProviderProps> = ({
  noItemsError,
  apiUrl,
  children,
}) => {
  const [{ data, loading, error }] = useAxios(apiUrl);
  configure({ cache: false });

  if (error) return <GenericErrorMessage />;
  if (loading) return <Loading />;

  return (
    <GetDataContext.Provider value={{ data }}>
      {data && data.length > 0 ? <>{children}</> : <>{noItemsError}</>}
    </GetDataContext.Provider>
  );
};

export default GetDataProvider;
