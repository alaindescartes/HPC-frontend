import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ color: "#ff6347" }}>404 Not Found</h1>
      <p style={{ fontSize: "18px", color: "#333" }}>
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        style={{ textDecoration: "none", color: "#007bff", fontSize: "20px" }}
      >
        Go Home
      </Link>
    </div>
  );
};

export default Error;
