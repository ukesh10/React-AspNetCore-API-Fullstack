interface Props {
  message?: string;
}

export default function LoadingComponent({message = "Loading..."}: Props) {
  return (
    <div
      className="container position-fixed top-0 start-0 w-100 vh-100 d-flex justify-content-center align-items-center"
  
    >
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div>
        <span role="status" className="ms-2 fs-5 fw-semibold text-muted">
          {message}
        </span>
      </div>
    </div>
  );
}
