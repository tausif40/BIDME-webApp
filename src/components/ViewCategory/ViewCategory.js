import './ViewCategory.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _apiurlcategory } from '../../Api.url';
import { Link } from 'react-router-dom';

function ViewCategory() {

  const [ categoryList, setCategoryList ] = useState([]);

  useEffect(() => {
    axios.get(_apiurlcategory + "fetch").then((response) => {
      setCategoryList(response.data);
    }).catch((error) => {
      console.log(error);
    });
  });

  return (
    <>
      <div className="container-fluid bg-secondary p-0">
        <div className="row">
          <div className="col-lg-12 pt-2 pb-6 px-5">
            <Link to="/viewCategory">
              <div className="my-4 link">Category List <span style={{ color: "gray" }}>{'>>'}</span></div>
            </Link>
            <br />

            <div className="categoryBox container">
              {
                categoryList.map((row) => (

                  <div className='category'>
                    <Link to={`/viewSubCategory/${row.catnm}`} >
                      <img src={`assets/uploads/catIcons/${row.caticonnm}`} />
                      <br />
                      <p>{row.catnm}</p>
                    </Link>
                  </div>
                ))
              }
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default ViewCategory;
