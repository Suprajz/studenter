import React, { ErrorInfo } from "react";
import ErrorInterceptor from "../../../components/base/molecules/ErrorInterceptor";
import ErrorHandler from "../error-handler/ErrorHandler";
import ComponentError from "../error-types/ComponentError";

export default class ErrorBoundary extends React.Component<any, ErrorBoundayProps> {
  constructor(props: any) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: Error | any) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const newError = new ComponentError(`Error: ${error}; Error Info: ${JSON.stringify(errorInfo)}`);
    ErrorHandler.handle(newError);

    this.setState({ hasError: true });
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }
    return <ErrorInterceptor />;
  }
}

interface ErrorBoundayProps {
  hasError: boolean;
}
