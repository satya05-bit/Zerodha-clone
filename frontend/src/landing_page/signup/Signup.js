import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {

    try {

      if (isLogin) {

        console.log("Trying to login with:", email, password);

        const res = await axios.post(
          "http://localhost:3002/login",
          { email, password }
        );

        console.log("Login response:", res.data);

        // store token
        localStorage.setItem("token", res.data.token);

        console.log("Token stored:", localStorage.getItem("token"));

        // redirect to dashboard
        navigate("/dashboard");

      } 
      
      else {

        console.log("Trying to register:", name, email, password);

        const res = await axios.post(
          "http://localhost:3002/register",
          { name, email, password }
        );

        console.log("Register response:", res.data);

        alert("Account created successfully!");

        setIsLogin(true);

      }

    } catch (err) {

      console.log("ERROR RESPONSE:", err.response);

      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Server error");
      }

    }

  };

  return (

    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-4 border p-4 shadow">

          <h3 className="text-center mb-4">
            {isLogin ? "Login" : "Create Account"}
          </h3>

          {!isLogin && (
            <input
              className="form-control mb-3"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}

          <input
            className="form-control mb-3"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="form-control mb-3"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="btn btn-primary w-100"
            onClick={handleSubmit}
          >
            {isLogin ? "Login" : "Signup"}
          </button>

          <p className="text-center mt-3">

            {isLogin ? "New user?" : "Already have account?"}

            <span
              style={{
                color: "blue",
                cursor: "pointer",
                marginLeft: "5px"
              }}
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Signup" : "Login"}
            </span>

          </p>

        </div>

      </div>

    </div>

  );

}

export default Signup;