import './Header.css';
import { useState, useEffect } from 'react';
import Auth from '../AuthComponent/Auth';

function Header() {

  const [ HeaderContent, setHeaderContent ] = useState();

  useEffect(() => {
    if (localStorage.getItem("token") != undefined && localStorage.getItem('role') == "admin") {
      setHeaderContent(<>
        {/* admin header */}
        <div className="container-fluid bg-secondary ps-5 pe-0 d-none d-lg-block">
          <div className="row gx-0">
            <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
            </div>
            <div className="col-md-6 text-center text-lg-end">
              <div className="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
                <div className="me-3 pe-3 border-end py-2">
                  <p className="m-0">Welcome Admin</p>
                </div>
                <div className="py-2">
                  <p className="m-0">{localStorage.getItem("email")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>);
    }
    else if (localStorage.getItem("token") != undefined && localStorage.getItem('role') == "user") {
      setHeaderContent(<>
        {/* user header */}
        <div className="container-fluid bg-secondary ps-5 pe-0 d-none d-lg-block">
          <div className="row gx-0">
            <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
            </div>
            <div className="col-md-6 text-center text-lg-end">
              <div className="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
                <div className="me-3 pe-3 border-end py-2">
                  <p className="m-0">Welcome User</p>
                </div>
                <div className="py-2">
                  <p className="m-0">{localStorage.getItem("email")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>);
    }
    else {
      setHeaderContent(<>
        {/* visiter header */}
        <div className="container-fluid bg-secondary ps-5 pe-0 d-none d-lg-block">
          <div className="row gx-0">
            <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <a className="text-body py-2 pe-3 border-end"><small>FAQs</small></a>
                <a className="text-body py-2 px-3 border-end"><small>Support</small></a>
                <a className="text-body py-2 px-3 border-end"><small>Privacy</small></a>
                <a className="text-body py-2 px-3 border-end"><small>Policy</small></a>
                <a className="text-body py-2 ps-3" ><small>Career</small></a>
              </div>
            </div>
            <div className="col-md-6 text-center text-lg-end">
              <div className="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
                <div className="me-3 pe-3 border-end py-2">
                  <p className="m-0"><i className="fa fa-envelope-open me-2"></i>info@example.com</p>
                </div>
                <div className="py-2">
                  <p className="m-0"><i className="fa fa-phone-alt me-2"></i>XXX XXX XXXX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>);
    }
  });

  return (
    <>
      <Auth />
      {HeaderContent}
    </>
  );
}

export default Header;
