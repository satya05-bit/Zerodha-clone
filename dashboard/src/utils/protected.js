const API_BASE = process.env.REACT_APP_API_URL;
function ProtectedRoute({ children }) {

  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = `${API_BASE}/signup`;
    return null;
  }

  return children;
}

export default ProtectedRoute;