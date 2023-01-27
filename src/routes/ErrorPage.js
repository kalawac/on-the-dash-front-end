import { useRouteError } from "react-router-dom";

import "./ErrorPage.css";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oh, no!</h1>
      <p>An unexpected error has occurred.</p>
      <p>
        Error details:
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
