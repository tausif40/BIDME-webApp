import React, { useEffect, useState } from "react";
import "./addProduct.css";
import axios from "axios";
import { _apiurlproduct, _apiurlcategory, _apiurlsubcategory } from "../../Api.url";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

function AddProduct() {
	const navigate = useNavigate();

	const [ ptitle, setptitle ] = useState()
	const [ description, setdescription ] = useState()
	const [ catnm, setcatnm ] = useState()
	const [ baseprice, setbaseprice ] = useState()
	const [ image, setimage ] = useState()
	const [ catList, setcatList ] = useState([])
	const [ subcatnm, setsubcatnm ] = useState()
	const [ subCatList, setsubCatList ] = useState([])

	useEffect(() => {
		axios.get(_apiurlcategory + "fetch").then((response) => {
			setcatList(response.data)
		}).catch((error) => {
			console.log(error);
		})
	})

	const fetchSubCategory = (catnm) => {
		setcatnm(catnm)
		axios.get(_apiurlsubcategory + "fetch?catnm=" + catnm).then((response) => {
			setsubCatList(response.data)
		}).catch((error) => {
			console.log(error);
		})
	}

	const fileHandel = (event) => {
		setimage(event.target.files[ 0 ])
	}
	const handelSubmit = (e) => {
		e.preventDefault();
		FormData = new FormData();
		FormData.append('ptitle', ptitle)
		FormData.append('description', description)
		FormData.append('catnm', catnm)
		FormData.append('subcatnm', subcatnm)
		FormData.append('baseprice', baseprice)
		FormData.append('picon', image)
		FormData.append('uid', localStorage.getItem("email"));

		const config = {
			'content-type': 'multipart/form-data'
		};

		axios.post(_apiurlproduct + "save", FormData, config)
			.then((response) => {
				toast.success("Product added success.");
				setptitle("");
				setdescription("")
				setcatnm("")
				setsubcatnm("")
				setbaseprice("")
				navigate("/addProduct")
			}).catch((error) => {
				toast.error("Add product failed.");
				console.log(error)
			})
	}

	return (
		<>
			<div className="container p-t-80">
				<h2 className="title">Add Product</h2>
				<form>
					<div className="mb-4">
						<label for="exampleFormControlInput1" className="form-label" >Product Name</label>
						<input type="email" className="form-control" id="exampleFormControlInput1" value={ptitle} onChange={(e) => { setptitle(e.target.value) }} />
					</div>
					<div className="mb-4">
						<label for="exampleFormControlTextarea1" className="form-label">Product Description</label>
						<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={description} onChange={(e) => { setdescription(e.target.value) }}></textarea>
					</div>
					<div className="mb-4">
						<div className="row">
							<div className="col">
								<div className="mb-1">Select Category</div>
								<select className="form-select" aria-label="Default select example"
									value={catnm} onChange={(e) => { fetchSubCategory(e.target.value) }}>
									<option selected disabled>Select one</option>
									{
										catList.map((value) => (
											<option>{value.catnm}</option>
										))
									}
								</select>
							</div>
							<div className="col">
								<div className="mb-1">select Sub Category</div>
								<select className="form-select" aria-label="Default select example"
									value={subcatnm} onChange={(e) => { setsubcatnm(e.target.value) }}>
									<option selected disabled>Select one</option>
									{
										subCatList.map((value) => (
											<option>{value.subcatnm}</option>
										))
									}

								</select>
							</div>

							<div className="col">Price
								<input type="text" className="form-control" value={baseprice} onChange={(e) => { setbaseprice(e.target.value) }} />
							</div>
						</div>
					</div>

					<div className="mb-5">
						<label for="formFileMultiple" className="form-label">Product image</label>
						<input className="form-control" type="file" id="formFileMultiple" multiple onChange={fileHandel} />
					</div>

					<div className="mb-5">
						<div className="d-grid gap-2">
							<button className="btn button" type="button" onClick={handelSubmit}>Add Product</button>
						</div>
					</div>
				</form >
			</div >
		</>
	);
}

export default AddProduct;
