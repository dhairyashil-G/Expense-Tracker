import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Alert from "./Alert";
import axios from "axios";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alerts, setAlerts] = useState({});
  const { setUser, setAuthTokens } = useContext(AuthContext);
  const navigate = useNavigate();

  const loginUser = async (username, password) => {
    try {
      const data = JSON.stringify({ username, password });
      const options = { headers: { "content-type": "application/json" } };
      const response = await axios.post(
        `http://127.0.0.1:8000/accounts/token/`,
        data,
        options
      );
      setAuthTokens(response.data);
      setUser(jwt_decode(response.data.access));
      localStorage.setItem("authTokens", JSON.stringify(response.data));
      setAlerts({ message: "Login succesful!", type: "success" });
      navigate("/show_expenses");
    } catch (error) {
      setAlerts({
        message: "No active account found with the given credentials",
        type: "error",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(username, password);
  };

  return (
    <div className="max-w-md mx-auto">
      {alerts.message && <Alert message={alerts.message} type={alerts.type} />}
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-px">
          <div className="my-3">
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              type="text"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm flex justify-center"
              required
            />
          </div>
          <div className="my-3">
            <label htmlFor="password" className="sr-only">
              Enter Password
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm flex justify-center"
              required
            />
          </div>
        </div>
        <FormExtra />
        <div className="place-content-center">
          <FormAction handleSubmit={handleSubmit} text="Login" />
        </div>
      </form>
    </div>
  );
};

export default Login;
