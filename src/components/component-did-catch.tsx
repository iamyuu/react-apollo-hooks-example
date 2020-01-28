import React, { Component } from 'react';

interface IState {
  error: Error | null
}

class ErrorBoundary extends Component<{}, IState> {
  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  state: IState = {
    error: null
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (!error) {
      return children;
    }

    return (
      <section>
        <h1>Error</h1>
        <p>{error?.message}</p>
      </section>
    );
  }
}

export default ErrorBoundary;
