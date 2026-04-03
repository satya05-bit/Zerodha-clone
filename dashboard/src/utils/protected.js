function ProtectedRoute({ children }) {

  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "http://localhost:3000/signup";
    return null;
  }

  return children;
}

export default ProtectedRoute;