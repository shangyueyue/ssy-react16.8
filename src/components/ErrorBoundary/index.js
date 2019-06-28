import React, { Fragment } from 'react';
import ErrorPage from './ErrorPage';


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) { // eslint-disable-line
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) { // eslint-disable-line
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }

  render() {
    return (
      <Fragment>
        {
          this.state.hasError
            ? <ErrorPage />
            : this.props.children
        }
      </Fragment>
    );
  }
}

export default ErrorBoundary;
