import './Contact.css';

function Contact() {


  return (
    <>
      <section id="contact" className="parallax-section">
        <div className="container">
          <div className="row contact-area">

            <div className="col-md-12 col-sm-12">
              {/* <!-- SECTION TITLE --> */}
              <div className="wow fadeInUp section-title" data-wow-delay="0.2s">
                <h2>Get in touch</h2>
                <p>Lorem ipsum dolor sit amet, consectetur venenatis tincidunt.</p>
              </div>
            </div>

            <div className="col-md-7 col-sm-10">
              {/* <!-- CONTACT FORM HERE --> */}
              <div className="wow fadeInUp" data-wow-delay="0.4s">
                <form id="contact-form">
                  <div className="col-md-6 col-sm-6">
                    <input type="text" className="form-control" name="name" placeholder="Name" required="" />
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <input type="email" className="form-control" name="email" placeholder="Email" required="" />
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <textarea className="form-control" rows="5" name="message" placeholder="Message" required=""></textarea>
                  </div>
                </form>
                <div className="col-md-offset-8 col-md-4 col-sm-offset-6 col-sm-6">
                  <button id="submit" className="form-control">Send Message</button>
                </div>
              </div>
            </div>

            <div className="col-md-5 col-sm-8">
              {/* <!-- CONTACT INFO --> */}
              <div className="wow fadeInUp contact-info" data-wow-delay="0.4s">
                <div className="section-title">
                  <h2>Contact Info</h2>
                  <p>Lorem ipsum dolor sit consectetur adipiscing morbi venenatis et tortor consectetur adipisicing lacinia tortor morbi ultricies.</p>
                </div>

                <p><i className="fa fa-map-marker"></i> 456 Indore, Mp 22000, India</p>
                <p><i className="fa fa-comment"></i> <a href="mailto:info@company.com">bidme@company.com</a></p>
                <p><i className="fa fa-phone"></i> 010-020-0340</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  );
}

export default Contact;
