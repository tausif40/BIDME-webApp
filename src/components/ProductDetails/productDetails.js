import './ProductDetails.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _apiurlproduct } from '../../Api.url';
import { Link, useParams } from 'react-router-dom';

function Products() {

	const params = useParams();

	const [ productDetails, setProductDetails ] = useState([]);

	useEffect(() => {
		axios.get(_apiurlproduct + "fetch?_id=" + params._id).then((response) => {
			setProductDetails(response.data[ 0 ]);
		}).catch((error) => {
			console.log(error);
		});
	});

	return (
		<>
			<div className="container-fluid bg-secondary p-0">
				<div className="row">
					<div className="col-lg-12 pt-2 pb-6 px-5">
						<div className="my-4">
							<Link to="/viewCategory"><span className='link'>Category List </span></Link>
							<span style={{ color: "gray" }}>{' >> '}</span>
							<Link to={`/viewSubCategory/${params.catnm}`}><span className='link'>{params.catnm}</span></Link>
							<span style={{ color: "gray" }}>{' >> '}</span>
							<Link to={`/viewSubCategory/${params.catnm}/${params.ptitle}`}><span className='link'>{params.ptitle}</span></Link>
							<span style={{ color: "gray" }}>{' >> '}</span>
						</div>
						<br />

						<div className="productContainer container">
							{
								productDetails.map((value) => (

									<Link to={`/productDetails/${value.catnm}/${value.subcatnm}/${value._id}`}>
										<div class="product-card">
											<div class="badge">{value.subcatnm}</div>
											<div class="product-tumb">
												<img src={`../../assets/uploads/producticons/${value.piconnm}`} alt="" />
											</div>
											<div class="product-details">
												<h4><a>{value.ptitle}</a></h4>
												<p>{value.description}</p>
												<div class="product-bottom-details">
													<div class="product-price">Base Price - {value.baseprice}</div>
												</div>
												{/* <div class="product-links">
												<a><i class="fa fa-heart"></i></a>
												<a><i class="fa fa-shopping-cart"></i></a>
											</div> */}
											</div>
										</div>
									</Link>
								))
							}
						</div>

					</div>
				</div>
			</div >

		</>
	);
}

export default Products;
