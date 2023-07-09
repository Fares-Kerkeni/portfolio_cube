import { useRouteError } from "react-router-dom";

export default function ErrorPage(): JSX.Element {
  const error = useRouteError() as Error | undefined;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.message || "An unknown error occurred."}</i>
      </p>
    </div>
  );
}
