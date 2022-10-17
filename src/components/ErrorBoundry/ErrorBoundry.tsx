import React, { Component, ReactNode } from "react";
import ErrorPage from "../../containers/ErrorPage/ErrorPage";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  message: string;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      message: "",
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    /* Update state so the next render will show the fallback UI */
    return { hasError: true, message: error.message };
  }

  public render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? <ErrorPage /> : children;
  }
}

export default ErrorBoundary;
