import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import { _apiurluser } from '../../Api.url';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

function Login() {

  const navigate = useNavigate();
  const [ showPassword, setShowPassword ] = useState("password")
  const [ eyeIcon, setEyeIcon ] = useState(<IoEyeOffOutline size={25} />)

  const [ output, setOutput ] = useState();
  const [ email, setEmail ] = useState();
  const [ password, setPassword ] = useState();

  const handleSubmit = () => {
    const userDetails = { email: email, password: password };
    axios.post(_apiurluser + "login", userDetails).then((response) => {
      const obj = response.data.userDetails;
      // console.log("obj : " + obj);
      if (obj.status == 1) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("_id", obj._id);
        localStorage.setItem("name", obj.name);
        localStorage.setItem("email", obj.email);
        localStorage.setItem("mobile", obj.mobile);
        localStorage.setItem("address", obj.address);
        localStorage.setItem("city", obj.city);
        localStorage.setItem("gender", obj.gender);
        localStorage.setItem("role", obj.role);
        localStorage.setItem("status", obj.status);
        (obj.role === "admin") ? navigate("/admin") : navigate("/user");
        toast.success("Login Successfully");
      }
    }).catch((error) => {
      toast.error("login failed, please try again.");
      setOutput("Invalid username or password.");
    });
  };
  const passwordIcon = () => {
    if (showPassword == "password") {
      setShowPassword("text");
      setEyeIcon(<IoEyeOutline size={25} />)
    } else {
      setShowPassword("password");
      setEyeIcon(<IoEyeOffOutline size={25} />)
    }
  }

  return (
    <>
      <div className="container-fluid p-0">
        <div className="row g-0  login-page">
          <div className="col-lg-12 px-5">

            <br />
            <h1 className="display-5 mb-4 text-center">Login <span className="text-primary text-center">Here!!!</span></h1>

            <div className="error-msg">{output}</div>

            <form className='login-form'>
              <div className="form-group">
                <label for="email">Email address</label>
                <input type="email" className="form-control" value={email} onChange={(e) => {
                  setEmail(e.target.value);
                  setOutput("");
                }} />
              </div>
              <br />
              <div className="form-group password-field">
                <label for="pwd">Password</label>
                <span className="showPassword" onClick={passwordIcon}>{eyeIcon}</span>
                <input type={showPassword} className="form-control" value={password} onChange={(e) => {
                  setPassword(e.target.value);
                  setOutput("");
                }} />
              </div>
              <br />
              <h5 className='text-center'>New user <Link to="/register">Create Account !</Link></h5>
              <center>
                <button type="button" onClick={handleSubmit} className="btn btn-danger mt-2" >Submit</button>
              </center>
              <br /><br />
            </form>

          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
