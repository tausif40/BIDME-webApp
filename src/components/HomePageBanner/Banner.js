import './Banner.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Banner(props) {

  const [ BannerContent, setBannerContent ] = useState();

  useEffect(() => {
    if (localStorage.getItem("token") == undefined || localStorage.getItem("role") == "user") {
      setBannerContent(<>

        <div className="container-fluid p-0">
          <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">

              <div className="carousel-item active">
                <img className="w-100" src="assets/img/carousel-2.jpg" alt="Image" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ "max-width": "900px", "hight": "900px" }} >
                    <h5 className="text-white text-uppercase">Buy & Sell Anything</h5>
                    <h1 className="display-1 text-white mb-md-4">Take Our Help To Get Max Profits</h1>
                    <Link to="/service">
                      <a className="btn btn-primary py-md-3 px-md-5 me-3 rounded-pill">Service</a>
                    </Link>
                    <Link to="/contact">
                      <a className="btn btn-secondary py-md-3 px-md-5 rounded-pill">Contact Us</a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <img className="w-100" src="assets/img/carousel-1.jpg" alt="Image" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ "max-width": "900px", "hight": "900px" }} >
                    <h5 className="text-white text-uppercase">Online Bidding Site</h5>
                    <h1 className="display-1 text-white mb-md-4">We Provide Solution On Your Product Selling</h1>
                    <Link to="/service">
                      <a className="btn btn-primary py-md-3 px-md-5 me-3 rounded-pill">Service</a>
                    </Link>
                    <Link to="/contact">
                      <a className="btn btn-secondary py-md-3 px-md-5 rounded-pill">Contact Us</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img className="w-100" src="assets/img/carousel-3.jpg" alt="Image" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ "max-width": "900px", "hight": "900px" }} >
                    <h5 className="text-white text-uppercase">Buy & Sell Anything</h5>
                    <h1 className="display-1 text-white mb-md-4">Take Our Help To Get Max Profits</h1>
                    <Link to="/service">
                      <a className="btn btn-primary py-md-3 px-md-5 me-3 rounded-pill">Service</a>
                    </Link>
                    <Link to="/contact">
                      <a className="btn btn-secondary py-md-3 px-md-5 rounded-pill">Contact Us</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
              data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

      </>);
    }
    else
      setBannerContent(<></>);
  });

  return (
    <>
      {BannerContent}
    </>
  );
}

export default Banner;
