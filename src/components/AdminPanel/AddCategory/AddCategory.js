import './AddCategory.css';
import { useState } from 'react';
import axios from 'axios';
import { _apiurlcategory } from '../../../Api.url';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function AddCategory() {
  const navigate = useNavigate();
  const [ file, setFile ] = useState();
  const [ catName, setCatName ] = useState();

  const handleChange = (event) => {
    setFile(event.target.files[ 0 ])
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    var formData = new FormData();
    formData.append('catnm', catName);
    formData.append('caticon', file);
    const config = {
      'content-type': 'multipart/form-data'
    };
    axios.post(_apiurlcategory + "save", formData, config).then((response) => {
      setCatName("");
      navigate("/addCategory")
      toast.success("Category Added Successfully.");
    });
  }

  return (
    <>
      <div className="container-fluid bg-secondary p-0">
        <div className="container">
          <div className="col-lg-12 px-5 py-5">
            <h1 className="display-5 mb-4">Add Category <span className="text-primary">Here!!!</span></h1>
            <form>
              <div className="form-group pt-4">
                <label for="catnm" className='mb-2'>Category Name</label>
                <input type="text" className="form-control" value={catName} onChange={e => setCatName(e.target.value)} />
              </div>
              <br />
              <div className="form-group">
                <label for="file" className='mb-2'>Category Icon</label>
                <input type="file" className="form-control" onChange={handleChange} />
              </div>
              <br />
              <button onClick={handleSubmit} type="submit" className="btn btn-danger mt-4 mb-5">Add Category</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCategory;
