import './bidding.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _apiurlproduct } from '../../Api.url';
import { Link, useParams } from 'react-router-dom';

function Bidding() {

	const params = useParams();

	const [ productDetails, setProductDetails ] = useState([]);

	useEffect(() => {
		axios.get(_apiurlproduct + "fetch?_id=" + params._id).then((response) => {
			setProductDetails(response.data);
		}).catch((error) => {
			console.log(error);
		});
	});

	const handelBedding = () => {
		console.log(productDetails);
	}

	return (
		<>
			<div className="container-fluid bg-secondary p-0">
				<div className="row">
					<div className="col-lg-12 pt-2 pb-6 px-5">
						{
							productDetails.map((value) => (
								<div className="my-4">
									<Link to="/viewCategory"><span className='link'>Category List </span></Link>
									<span style={{ color: "gray" }}>{' >> '}</span>
									<Link to={`/viewSubCategory/${value.catnm}`}><span className='link'>{value.catnm}</span></Link>
									<span style={{ color: "gray" }}>{' >> '}</span>
									<Link to={`/products/${value.catnm}/${params.subcatnm}`}><span className='link'>{params.subcatnm}</span></Link>
									<span style={{ color: "gray" }}>{' >> '}</span>
									<Link to={`/productDetails/${params.subcatnm}/${params._id}/${params.ptitle}`}><span className='link'>{params.ptitle}</span></Link>

									<span style={{ color: "gray" }}>{' >> '}</span>
								</div>
							))}
						<div className='pt-5'>
							<h1>bidd</h1>
						</div>
					</div>
				</div>
			</div >

		</>
	);
}

export default Bidding;
