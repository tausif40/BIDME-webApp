import { useState, useEffect } from 'react';
import axios from 'axios';
import { _apiurluser } from '../../Api.url';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function EditProfile() {

  const navigate = useNavigate();
  const [ output, setOutput ] = useState();
  const [ name, setName ] = useState();
  const [ email, setEmail ] = useState();
  const [ mobile, setMobile ] = useState();
  const [ address, setAddress ] = useState();
  const [ city, setCity ] = useState();
  const [ gender, setGender ] = useState();


  useEffect(() => {
    axios.get(_apiurluser + "fetch?email=" + localStorage.getItem("email")).then((response) => {
      setName(response.data[ 0 ].name);
      setEmail(response.data[ 0 ].email);
      setMobile(response.data[ 0 ].mobile);
      setAddress(response.data[ 0 ].address);
      setCity(response.data[ 0 ].city);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  const handleSubmit = () => {
    let updateDetails = { "condition_obj": { "email": email }, "content_obj": { "name": name, "mobile": mobile, "address": address, "city": city, "gender": gender } };
    axios.patch(_apiurluser + "update", updateDetails).then((response) => {
      toast.success("Profile edited successfully.");
      navigate("/admin");
    }).catch((error) => {
      toast.error("Profile edit failed.")
    });
  };

  return (
    <>
      <div className="container-fluid p-0 h-100">
        <div className="row g-0 reg-page">
          <div className="col-lg-12 mt-3 me-1 px-5">
            <h1 className="display-5 mb-4 text-center">Edit Profile</h1>
            <form>
              <div className="form-group">
                <label for="name">Name:</label>
                <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} />
              </div>
              <br />
              <div className="form-group">
                <label for="email">Email address:</label>
                <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <br />
              <div className="form-group">
                <label for="mobile">Mobile:</label>
                <input type="text" className="form-control" value={mobile} onChange={e => setMobile(e.target.value)} />
              </div>
              <br />
              <div className="form-group">
                <label for="address">Address:</label>
                <textarea rows="5" className="form-control" value={address} onChange={e => setAddress(e.target.value)} ></textarea>
              </div>
              <br />
              <div className="form-group">
                <label for="city">City:</label>
                <select className="form-control" value={city} onChange={e => setCity(e.target.value)} >
                  <option>Select City</option>
                  <option>Indore</option>
                  <option>Bhopal</option>
                  <option>Ujjain</option>
                </select>
              </div>
              <br />
              <div className="form-group">
                <label for="gender">Gender:</label>
                &nbsp;&nbsp;
                Male <input type="radio" name="gender" value="male" onChange={e => setGender(e.target.value)} checked />
                &nbsp;&nbsp;
                Female <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} />
              </div>
              <br />
              <center>
                <button type="button" onClick={handleSubmit} className="btn btn-danger" >Submit</button>
              </center>
              <br /><br />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
