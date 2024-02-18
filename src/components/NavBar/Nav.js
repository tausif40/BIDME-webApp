import './Nav.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Nav() {

  const [ NavContent, setNavContent ] = useState();

  useEffect(() => {
    if (localStorage.getItem("token") != undefined && localStorage.getItem('role') == "admin") {
      setNavContent(<>
        {/* Admin Navbar */}
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
          <a className="navbar-brand p-0">
            <h1 className="m-0 text-uppercase text-primary"><i className="far fa-smile text-primary me-2"></i>Bid ME</h1>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0 me-n3">
              <a className="nav-item nav-link active"><Link to="/admin">Admin Home</Link></a>
              <a className="nav-item nav-link"><Link to="/manageUsers">Manage Users</Link></a>
              <div className="nav-item dropdown">
                <a className="nav-link dropdown-toggle manageCat" data-bs-toggle="dropdown">Manage Category</a>
                <div className="dropdown-menu m-0">
                  <a className="dropdown-item"><Link to="/addCategory">Add Category</Link></a>
                  <a className="dropdown-item"><Link to="/addSubCategory">Add Sub Category</Link></a>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a className="nav-link dropdown-toggle manageCat" data-bs-toggle="dropdown">Settings</a>

                <div className="dropdown-menu m-0">
                  <a className="dropdown-item"><Link to="/editProfile">Edit Profile</Link></a>
                  <a className="dropdown-item"><Link to="/ChangePsd">Change Password</Link></a>
                </div>
              </div>
              <a className="nav-item nav-link"><Link to="/logout">Logout</Link></a>
            </div>
          </div>
        </nav>
      </>);

    }
    else if (localStorage.getItem("token") != undefined && localStorage.getItem('role') == "user") {
      setNavContent(<>
        {/* user navbar */}
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
          <a className="navbar-brand p-0">
            <Link to="/user">
              <h1 className="m-0 text-uppercase text-primary"><i className="far fa-smile text-primary me-2"></i>Bid ME</h1>
            </Link>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0 me-n3">
              <a className="nav-item nav-link active"><Link to="/user">User Home</Link></a>
              <a className="nav-item nav-link"><Link to="/viewCategory">Products</Link></a>
              <div className="nav-item dropdown">
                <a className="nav-link dropdown-toggle managePro" data-bs-toggle="dropdown">Manage Product</a>
                <div className="dropdown-menu m-0">
                  <a className="dropdown-item"><Link to="/addProduct">Sell Product</Link></a>
                  <a className="dropdown-item"><Link to="/viewProduct">View Product</Link></a>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a className="nav-link dropdown-toggle manageCat" data-bs-toggle="dropdown">Settings</a>

                <div className="dropdown-menu m-0">
                  <a className="dropdown-item"><Link to="/editProfile">Edit Profile</Link></a>
                  <a className="dropdown-item"><Link to="/ChangePsd">Change Password</Link></a>
                </div>
              </div>
              <a className="nav-item nav-link"><Link to="/logout">Logout</Link></a>
            </div>
          </div>
        </nav>
      </>);

    }
    else {
      setNavContent(<>
        {/* visiter navbar */}
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
          <a className="navbar-brand p-0">
            <Link to="/">
              <h1 className="m-0 text-uppercase text-primary"><i className="far fa-smile text-primary me-2"></i>Bid ME</h1>
            </Link>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0 me-n3">
              <a className="nav-item nav-link active"><Link to="/">Home</Link></a>
              <div className="nav-item dropdown">
                <a className="nav-link dropdown-toggle managePro" data-bs-toggle="dropdown">Products</a>
                <div className="dropdown-menu m-0">
                  <a className="dropdown-item"><Link to="/login">Add Product</Link></a>
                  <a className="dropdown-item"><Link to="/login">View Product</Link></a>
                </div>
              </div>
              <a className="nav-item nav-link"><Link to="/about">About</Link></a>
              <a className="nav-item nav-link"><Link to="/contact">Contact</Link></a>
              <a className="nav-item nav-link"><Link to="/service">Service</Link></a>
              <a className="nav-item nav-link"><Link to="/register">Register</Link></a>
              <a className="nav-item nav-link"><Link to="/login">Login</Link></a>
            </div>
          </div>
        </nav >
      </>);
    }
  });

  return (
    <>
      {NavContent}
    </>
  );
}

export default Nav;
