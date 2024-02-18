import './ViewSubCategory.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _apiurlsubcategory } from '../../Api.url';
import { Link, useParams } from 'react-router-dom';

function ViewSubCategory() {

  const params = useParams();
  const [ subCategoryList, setSubCategoryList ] = useState([]);

  useEffect(() => {
    axios.get(_apiurlsubcategory + "fetch?catnm=" + params.catnm).then((response) => {
      setSubCategoryList(response.data);
    }).catch((error) => {
      console.log(error);
    });
  });

  return (
    <>

      <div className="container-fluid bg-secondary p-0">
        <div className="">
          <div className="col-lg-12 pt-2 pb-6 px-5">
            <div className="my-4">
              <Link to="/viewCategory"><span className='link'>Category List </span></Link>
              <span style={{ color: "gray" }}>{' >> '}</span>
              <span className='link'>{params.catnm}</span>
              <span style={{ color: "gray" }}>{' >> '}</span>
            </div>
            <br />

            <div className="categoryBox container">
              {
                subCategoryList.map((value) => (

                  <div className='category'>
                    <Link to={`/products/${value.catnm}/${value.subcatnm}`} >
                      <img src={`../assets/uploads/subCatIcons/${value.subcaticonnm}`} />
                      <br />
                      <p>{value.subcatnm}</p>
                    </Link>
                  </div>
                ))
              }
            </div>

          </div>
        </div>
      </div >

    </>
  );
}

export default ViewSubCategory;
