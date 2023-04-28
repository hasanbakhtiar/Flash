import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const user = {
  email: "a@a",
  pass: "a1",
};

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const [info, setInfo] = useState({
    infoText: "",
    infoStyle: "",
  });

  const formSubmit = (event) => {
    event.preventDefault();
    if (!email || !pass) {
      setInfo({
        infoText: "please, fill input",
        infoStyle: "warning",
      });
    } else {
      if (email === user.email && pass === user.pass) {
        setInfo({
          infoText: "success",
          infoStyle: "success",
        });
        navigate("/");
      } else {
        setInfo({
          infoText: "email or password is wrong",
          infoStyle: "danger",
        });
      }
    }
  };
  return (
    <div className="d-flex align-items-center justify-content-center flex-column ">
      <h1 className="my-5">Login</h1>
      <p className={`alert alert-${info.infoStyle}`}>{info.infoText}</p>
      <form className="col-4" onSubmit={formSubmit}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            value={email}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            onChange={(e) => setPass(e.target.value)}
            type="password"
            className="form-control"
            value={pass}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
