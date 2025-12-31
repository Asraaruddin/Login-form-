import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <h1>Welcome Home!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Home;
