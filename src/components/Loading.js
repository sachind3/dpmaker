import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="loader">
      <Spinner animation="border" role="status" variant="primary">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loading;
