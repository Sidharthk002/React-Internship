import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <a href="/">Home</a>
      <p>
        <i>{console.log(error.statusText || error.message)}</i>
      </p>
    </div>
  );
}
