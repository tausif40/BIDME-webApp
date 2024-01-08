import './AddSubCategory.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _apiurlcategory, _apiurlsubcategory } from '../../../Api.url';
import { toast } from 'react-toastify';

function AddSubCategory() {

  const [ file, setFile ] = useState();
  const [ catName, setCatName ] = useState();
  const [ subCatName, setSubCatName ] = useState();
  const [ catList, setCatList ] = useState([]);

  useEffect(() => {
    axios.get(_apiurlcategory + "fetch").then((response) => {
      setCatList(response.data);
      // console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
  });

  const handleChange = (event) => {
    setFile(event.target.files[ 0 ])
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    var formData = new FormData();
    formData.append('catnm', catName);
    formData.append('subcatnm', subCatName);
    formData.append('subcaticon', file);
    const config = {
      'content-type': 'multipart/form-data'
    };
    axios.post(_apiurlsubcategory + "save", formData, config).then((response) => {
      setCatName("");
      setSubCatName("");
      toast.success("Sub Category Added Successfully.");
    });
  }

  return (
    <>
      <div className="container-fluid bg-secondary p-0">
        <div className="container">
          <div className="col-lg-12 py-5 px-5">
            <h1 className="display-5 mb-4">Add SubCategory <span className="text-primary">Here!!!</span></h1>
            <form>
              <div className="form-group">
                <label for="catnm" className='mb-2'>Category Name</label>
                <select className="form-control" value={catName} onChange={e => setCatName(e.target.value)}>
                  <option>Select Category</option>
                  {
                    catList.map((row) => (
                      <option>{row.catnm}</option>
                    ))
                  }
                </select>
              </div>
              <br />
              <div className="form-group">
                <label for="subcatnm" className='mb-2'>SubCategory Name</label>
                <input type="text" className="form-control" value={subCatName} onChange={e => setSubCatName(e.target.value)} />
              </div>
              <br />
              <div className="form-group">
                <label for="file" className='mb-2'>SubCategory Icon</label>
                <input type="file" className="form-control" onChange={handleChange} />
              </div>
              <br />
              <button onClick={handleSubmit} type="submit" className="btn btn-danger mt-3">Add SubCategory</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddSubCategory;
