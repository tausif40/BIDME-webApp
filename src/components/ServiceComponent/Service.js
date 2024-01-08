import './Service.css';

import Servicepart1 from './Servicepart1/Servicepart1';
import Servicepart2 from './Servicepart2/Servicepart2';

function Service() {
  return (
    <>
    {/* About Start */}
    <div className="container-fluid bg-secondary p-0">
     <div className="row g-0">
        <Servicepart1></Servicepart1>
        <Servicepart2></Servicepart2>
     </div>
 </div>
 {/* About End */}
 </>
    );
}

export default Service;
