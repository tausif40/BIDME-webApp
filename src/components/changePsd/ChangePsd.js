import "./changePsd.css"
import { useState } from 'react';
import axios from 'axios';
import { _apiurluser } from '../../Api.url';
import { toast } from 'react-toastify';
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

function ChangePsd() {

  const [ showOldPassword, setShowOldPassword ] = useState("password")
  const [ showNewPassword, setShowNewPassword ] = useState("password")
  const [ showConfirmNewPassword, setShowConfirmNewPassword ] = useState("password")

  const [ eyeIcon, setEyeIcon ] = useState(<IoEyeOffOutline size={25} />)
  const [ newEyeIcon, setNewEyeIcon ] = useState(<IoEyeOffOutline size={25} />)
  const [ confNewEyeIcon, setConfNewEyeIcon ] = useState(<IoEyeOffOutline size={25} />)

  const oldPasswordIcon = () => {
    if (showOldPassword == "password") {
      setShowOldPassword("text");
      setEyeIcon(<IoEyeOutline size={25} />)
    } else {
      setShowOldPassword("password");
      setEyeIcon(<IoEyeOffOutline size={25} />)
    }
  }

  const newPasswordIcon = () => {
    if (showNewPassword == "password") {
      setShowNewPassword("text");
      setNewEyeIcon(<IoEyeOutline size={25} />)
    } else {
      setShowNewPassword("password");
      setNewEyeIcon(<IoEyeOffOutline size={25} />)
    }
  }

  const confirmNewPasswordIcon = () => {
    if (showConfirmNewPassword == "password") {
      setShowConfirmNewPassword("text");
      setConfNewEyeIcon(<IoEyeOutline size={25} />)
    } else {
      setShowConfirmNewPassword("password");
      setConfNewEyeIcon(<IoEyeOffOutline size={25} />)
    }
  }

  const [ oldPassword, setOldPassword ] = useState();
  const [ newPassword, setNewPassword ] = useState();
  const [ confirmNewPassword, setConfirmNewPassword ] = useState();

  const handleSubmit = () => {
    // const userDetails = { _id: localStorage.getItem("_id"), password: oldPassword };
    axios.get(_apiurluser + "fetch?_id=" + localStorage.getItem("_id") + "&password=" + oldPassword).then((response) => {
      if (newPassword == confirmNewPassword) {
        toast("password match , _id = " + localStorage.getItem("_id"))
        let updateDetails = { condition_obj: { _id: localStorage.getItem("_id") }, content_obj: { password: confirmNewPassword } };
        axios.patch(_apiurluser + "update", updateDetails).then((response) => {
          toast.success("Password changed successfully");
          setOldPassword("");
          setNewPassword("");
          setConfirmNewPassword("");
        }).catch((error) => {
          console.log(error);
        });
      } else {
        toast.error("password not match");
      }
    }).catch((error) => {
      console.log(error);
      toast.error("Invalid old password");
    });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row g-0 changePsd">
          <div className="col-lg-12 px-5">
            <h4 className="display-5 mb-4 text-center pt-4">Change Password</h4>
            <form>
              <div className="form-group">

                <label for="pwd" className="mb-2">Old Password</label>
                <span className="PasswordIcon" onClick={oldPasswordIcon}>{eyeIcon}</span>
                <input type={showOldPassword} className="form-control" value={oldPassword} onChange={e => setOldPassword(e.target.value)} />
              </div>
              <br />

              <div className="form-group password-field">
                <label for="pwd" className="mb-2">New Password</label>
                <span className="PasswordIcon" onClick={newPasswordIcon}>{newEyeIcon}</span>
                <input type={showNewPassword} className="form-control" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
              </div>
              <br />

              <div className="form-group password-field">
                <label for="pwd" className="mb-2">Confirm New Password</label>
                <span className="PasswordIcon" onClick={confirmNewPasswordIcon}>{confNewEyeIcon}</span>
                <input type={showConfirmNewPassword} className="form-control" value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)} />
              </div>
              <br />
              <center>
                <button type="button" onClick={handleSubmit} className="btn btn-danger" >Submit</button>
              </center>
              <br />
            </form>

          </div>
        </div>
      </div>
    </>
  );
}

export default ChangePsd;
