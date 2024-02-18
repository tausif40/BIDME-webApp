import './Register.css';
import * as yup from 'yup';
import { useState } from 'react';
import axios from 'axios';
import { _apiurluser } from '../../Api.url';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";


function Register() {

  const navigate = useNavigate("");
  const [ showPassword, setShowPassword ] = useState("password")
  const [ showConfirmPassword, setShowConfirmPassword ] = useState("password")

  const [ eyeIcon, setEyeIcon ] = useState(<IoEyeOffOutline size={25} />)
  const [ ConfEyeIcon, setConfEyeIcon ] = useState(<IoEyeOffOutline size={25} />)

  const [ output, setOutput ] = useState("");
  const [ name, setName ] = useState();
  const [ email, setEmail ] = useState();
  const [ password, setPassword ] = useState();
  const [ confirmPassword, setConfirmPassword ] = useState();
  const [ mobile, setMobile ] = useState();
  const [ address, setAddress ] = useState();
  const [ city, setCity ] = useState();
  const [ gender, setGender ] = useState();

  const [ errors, setErrors ] = useState({});

  const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'Password is too short - should be 6 chars minimum.').required('Password is required'),
    mobile: yup.string().matches(/^[0-9]{10}$/, 'Mobile number is not valid').required('Mobile number is required'),
    address: yup.string().required('Address is required'),
    city: yup.string().required('City is required'),
    gender: yup.string().oneOf([ 'male', 'female' ]).required('Gender is required'),
  });

  const formData = {
    name: name,
    email: email,
    password: password,
    mobile: mobile,
    address: address,
    city: city,
    gender: gender,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await schema.validate(formData, { abortEarly: false });
      axios.post(_apiurluser + "save", formData).then((response) => {
        console.log(response.data);
        navigate("/login")
        toast.success("Registration successful! Please Login.");
      });
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[ error.path ] = error.message;
      });
      setErrors(validationErrors);
    }
  }

  const passwordIcon = () => {
    if (showPassword == "password") {
      setShowPassword("text");
      setEyeIcon(<IoEyeOutline size={25} />)
    } else {
      setShowPassword("password");
      setEyeIcon(<IoEyeOffOutline size={25} />)
    }
  }

  const ConfirmPasswordIcon = () => {
    if (showConfirmPassword == "password") {
      setShowConfirmPassword("text");
      setConfEyeIcon(<IoEyeOutline size={25} />)
    } else {
      setShowConfirmPassword("password");
      setConfEyeIcon(<IoEyeOffOutline size={25} />)
    }
  }

  return (
    <>
      <div className="container-fluid p-0 h-100">
        <div className="row g-0 reg-page">
          <div className="col-lg-12 mt-3 me-1 px-5">
            <h1 className="display-5 mb-4 text-center">Register&nbsp;<span className="text-primary">Here!!!</span></h1><h5 className='text-center'>Already Account <Link to="/login">Login Here !</Link></h5>
            <br />
            <font color="red">{output}</font>
            <form className='reg-form' onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="name">Name</label>
                <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} />
                {errors.name && <p className="error-msg">{errors.name}</p>}
              </div>
              <br />
              <div className="form-group">
                <label for="email">Email address</label>
                <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                {errors.email && <p className="error-msg">{errors.email}</p>}
              </div>
              <br />
              <div className="form-group password-field">
                <label for="pwd">Password</label>
                <span className="PasswordIcon" onClick={passwordIcon}>{eyeIcon}</span>
                <input type={showPassword} className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
                {errors.password && <p className="error-msg">{errors.password}</p>}
              </div>
              <br />
              <div className="form-group password-field">
                <label for="pwd">Confirm Password</label>
                <span className="PasswordIcon" onClick={ConfirmPasswordIcon}>{ConfEyeIcon}</span>
                <input type={showConfirmPassword} className="form-control" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                {errors.confirmPassword && <p className="error-msg">{errors.confirmPassword}</p>}
              </div>
              <br />
              <div className="form-group">
                <label for="mobile">Mobile</label>
                <input type="text" className="form-control" value={mobile} onChange={e => setMobile(e.target.value)} />
                {errors.mobile && <p className="error-msg">{errors.mobile}</p>}
              </div>
              <br />
              <div className="form-group">
                <label for="address">Address</label>
                <textarea rows="2" className="form-control" value={address} onChange={e => setAddress(e.target.value)} ></textarea>
                {errors.address && <p className="error-msg">{errors.address}</p>}
              </div>
              <br />
              <div className="form-group" >
                <label for="city">City</label>
                <div className='sel-city'>
                  <select className="form-control" style={{ background: "white" }} value={city} onChange={e => setCity(e.target.value)} >
                    {errors.city && <p className="error-msg">{errors.city}</p>}
                    <option selected disabled>Select City</option>
                    <option>Indore</option>
                    <option>Bhopal</option>
                    <option>Ujjain</option>
                  </select>
                </div>
              </div>
              <br />
              <div className="form-group">
                <span for="gender">Gender :</span>
                &nbsp;&nbsp;
                <label for="human">Male</label>&nbsp;&nbsp;
                <input type="radio" name="gender" value="male" id='human' onChange={e => setGender(e.target.value)} />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <label for="gender">Female</label>&nbsp;&nbsp;
                <input type="radio" name="gender" value="female" id="gender" onChange={e => setGender(e.target.value)} />
                {errors.gender && <p className="error-msg">{errors.gender}</p>}
              </div>
              <br />
              <center>
                <button type="submit" className="btn btn-danger" >Submit</button>
              </center>
              <br /><br />
            </form>

          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
