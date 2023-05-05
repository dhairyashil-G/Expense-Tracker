import { useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import Alert from "../utils/Alerts";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [limit, setLimit] = useState(0);
  const [alerts,setalert]=useState({})
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password1 !== password2) {
      alert("Passwords do not match!");
      setalert({message :"Password do not match !",type : "error"})
      return;
    }

    try {
      const data = JSON.stringify({ username, email, limit, password1, password2});
      const options = { headers: { "content-type": "application/json" } };
      await axios.post("https://expense-tracker-backend.up.railway.app/accounts/signup/", data, options);
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert("Error occurred during signup");
      setalert({message :"Something went wrong !",type : "error"})
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="fblock bg-slate-50 p-6 round-xl shadow-md shadow-slate-300 w-96">
      {alerts.message && <Alert message={alerts.message} type={alerts.type} />}
        <form>
          <h2 className="text-blue-700 text-3xl font-semibold my-4">User Signup</h2>

          <div className="flex flex-col space-y-2">
            <label className="text-sm">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter Name"
              className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="text-sm">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Enter Email"
              className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="text-sm">Password</label>
            <input
              type="password"
              id="password1"
              placeholder="Enter Password"
              className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
            />
            <label className="text-sm">Confirm Password</label>
            <input
              type="password"
              id="password2"
              placeholder="Confirm Password"
              className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
            <label className="text-sm">Limit</label>
            <input
              type="number"
              id="limit"
              placeholder="Enter Limit"
              className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
              value={limit}
              onChange={(e) => setLimit(parseInt(e.target.value))}
            />
            <br/>
          <div className="my-4 flex flex-col space-y-5">
            <input
              type="submit"
              value="Signup"
              id="signup"
              className="bg-blue-700 w-full h-10 cursor-pointer text-white rounded-md hover:bg-blue-600 hover:outline-2 outline-blue-600 outline-offset-2 text-sm"
              onClick={handleSubmit}
            />
          </div>
          <p className="text-xs my-2">Already signed up ?  <a href="#" className="text-blue-600"><Link to={`/login`}>Login</Link></a></p>
        </form>
        </div>
    </div>
  );
}

export default Signup
