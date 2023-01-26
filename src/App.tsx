import Router from "router";
import ErrorBoundary from "utils/ErrorBoundary";

const App = () => (
  <ErrorBoundary>
    <Router />
  </ErrorBoundary>
);
export default App;
