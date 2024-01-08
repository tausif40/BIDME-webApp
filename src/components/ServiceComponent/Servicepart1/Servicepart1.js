import './Servicepart1.css';
import { IoMail } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGooglePlus } from "react-icons/fa6";

function Servicepart1() {
  return (
    <>
      <div className="col-lg-4 py-6 px-5 social-link">
        <h1 className="display-5 mb-4"><span className="text-primary">@Follow us</span></h1>
        <FaSquareFacebook />&nbsp;&nbsp;
        <a>Facebook</a>
        <br /><br />
        <IoMail />&nbsp;&nbsp;
        <a>Gmail</a>
        <br /><br />
        <IoLogoLinkedin />&nbsp;&nbsp;
        <a>LinkedIn</a>
        <br /><br />
        <FaSquareGooglePlus />&nbsp;&nbsp;
        <a>Google</a>
      </div>
    </>
  );
}

export default Servicepart1;
