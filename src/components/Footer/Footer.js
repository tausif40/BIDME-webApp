import './Footer.css';
import { useState , useEffect } from 'react';

function Footer() {

  const [ FooterContent , setFooterContent ] = useState();   

  useEffect(()=>{
    if(localStorage.getItem("token")==undefined)
    {
     setFooterContent(<>
        <div className="container-fluid bg-dark text-secondary p-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h3 className="text-white mb-4">Quick Links</h3>
                    <div className="d-flex flex-column justify-content-start">
                        <a className="text-secondary mb-2" ><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
                        <a className="text-secondary mb-2" ><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                        <a className="text-secondary mb-2" ><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                        <a className="text-secondary mb-2" ><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog Post</a>
                        <a className="text-secondary" ><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h3 className="text-white mb-4">Popular Links</h3>
                    <div className="d-flex flex-column justify-content-start">
                        <a className="text-secondary mb-2" ><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
                        <a className="text-secondary mb-2" ><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                        <a className="text-secondary mb-2" ><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                        <a className="text-secondary mb-2" ><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog Post</a>
                        <a className="text-secondary" ><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h3 className="text-white mb-4">Get In Touch</h3>
                    <p className="mb-2"><i className="bi bi-geo-alt text-primary me-2"></i>X Street, Indore , India</p>
                    <p className="mb-2"><i className="bi bi-envelope-open text-primary me-2"></i>info@example.com</p>
                    <p className="mb-0"><i className="bi bi-telephone text-primary me-2"></i>XXX XXX XXXXX</p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h3 className="text-white mb-4">Follow Us</h3>
                    <div className="d-flex">
                        <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" ><i className="fab fa-twitter fw-normal"></i></a>
                        <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" ><i className="fab fa-facebook-f fw-normal"></i></a>
                        <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" ><i className="fab fa-linkedin-in fw-normal"></i></a>
                        <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" ><i className="fab fa-instagram fw-normal"></i></a>
                    </div>
                </div>
            </div>
        </div>
        </>);             
    }
    else
     setFooterContent(<></>);
  });    

  return (
    <>
    { FooterContent }
    </>
   );
}

export default Footer;
