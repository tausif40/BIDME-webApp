import './Manageusers.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _apiurluser } from '../../../Api.url';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function ManageUsers() {

  const navigate = useNavigate();
  const [ userDetails, setUserDetails ] = useState([]);

  useEffect(() => {
    axios.get(_apiurluser + "fetch?role=user").then((response) => {
      setUserDetails(response.data);
    }).catch((error) => {
      console.log(error);
    });
  });

  const changeStatus = (_id, status) => {
    console.log(_id + " and " + status);
    if (status == 0) {
      let updateDetails = { condition_obj: { _id: _id }, content_obj: { status: 1 } };
      axios.patch(_apiurluser + "update", updateDetails).then((response) => {
        navigate("/manageUsers");
      });
    }
    else if (status == 1) {
      let updateDetails = { condition_obj: { _id: _id }, content_obj: { status: 0 } };
      axios.patch(_apiurluser + "update", updateDetails).then((response) => {
        navigate("/manageUsers");
      });
    }
  }
  const deleteData = (_id) => {
    let s = window.confirm("Are you sure?");
    if (s == true) {
      let deleteDetails = { data: { _id: _id } };
      axios.delete(_apiurluser + "delete", deleteDetails).then((response) => {
        navigate("/manageUsers");
      });
    }
    else {
      toast.info("User not removed...");
    }
  }


  return (
    <>
      <div className="container-fluid bg-secondary p-0">
        <div className="row g-0">
          <div className="col-lg-12 py-4 px-5">
            <h1 className="display-5 mb-4">View & Manage <span className="text-primary">User Details</span></h1>

            <div className='table-box'>
              <table className="table table-striped">
                <tr className='table-head'>
                  <th>RegID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>Gender</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>

                {
                  userDetails.map((row) => (
                    <tr>
                      <th>{row._id}</th>
                      <th>{row.name}</th>
                      <th>{row.email}</th>
                      <th>{row.mobile}</th>
                      <th>{row.address}</th>
                      <th>{row.city}</th>
                      <th>{row.gender}</th>
                      <th>

                        <label className='user-control'>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            checked={row.status === 1}
                            onChange={() => changeStatus(row._id, row.status)}
                          />
                          {row.status == 1 && <font color="green"> &nbsp;&nbsp;Active</font>}
                          {row.status == 0 && <font color="gray"> &nbsp;&nbsp;Inactive</font>}
                        </label>
                      </th>
                      <th>
                        <font className="delete-user" onClick={() => { deleteData(row._id) }} color="red" >Delete</font>
                      </th>
                    </tr>
                  ))
                }

              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageUsers;
