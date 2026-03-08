import { useNavigate } from "react-router-dom";

  function Login() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Signin to your PopX account</h2>

      <input type="email" placeholder="Email Address" />
      <input type="password" placeholder="Password" />

      <button className="disabled" onClick={() => navigate("/profile")}>
        Login
      </button>
    </div>
  );
}
export default Login;