import { useLocation } from "react-router-dom";

export default function ServerError() {
  const { state } = useLocation();
  return (
    <div className="container border mt-4 p-2">
      {state?.error ? (
        <>
          <h3 className="text-purple">{state.error.title}</h3>
          <hr />
          <p>{state.error.detail || "Internal Server Error"}</p>
        </>
      ) : (
        <p>Server Error</p>
      )}
    </div>
  );
}
