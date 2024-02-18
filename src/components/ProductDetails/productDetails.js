import './ProductDetails.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _apiurlproduct, _apiurlbid } from '../../Api.url';
import { Link, useParams, useNavigate, Outlet } from 'react-router-dom';
import { MdDelete } from "react-icons/md";


function ProductDetails() {

	const params = useParams();
	const navigate = useNavigate();

	const [ productDetails, setProductDetails ] = useState([]);
	const [ auctionTime, setAuctionTime ] = useState();
	const [ remainingTime, setRemainingTime ] = useState();
	const [ countdown, setCountdown ] = useState()
	const [ enterYourPrice, setEnterYourPrice ] = useState();
	const [ currentPrice, setCurrentPrice ] = useState();
	const [ showYourPrice, setShowYourPrice ] = useState();
	const [ priceError, setPriceError ] = useState();
	const [ bidDetails, setBidDetails ] = useState();


	useEffect(() => {
		axios.get(_apiurlproduct + "fetch?_id=" + params._id).then((response) => {
			setProductDetails(response.data);
			setCurrentPrice(response.data[ 0 ].baseprice);
			setAuctionTime(response.data[ 0 ].info);

		}).catch((error) => {
			console.log(error);
		});

		axios.get(_apiurlbid + "fetch?_id=" + localStorage.getItem("_id")).then((response) => {
			// setBidDetails(response.data[ 0 ]);
			setShowYourPrice(response.data[ 0 ].bidprice);
		}).catch((error) => {
			console.log(error);
		})
		axios.get(_apiurlbid + "fetch?").then((response) => {
			const len = response.data.length;
			setCurrentPrice(response.data[ len ].bidprice);
		}).catch((error) => {
			console.log(error);
		})
	}, []);

	const deleteProduct = (id) => {
		const conformation = window.confirm('Are you sure!!');

		let deleteProduct = { data: { _id: id } };

		if (conformation) {
			axios.delete(_apiurlproduct + "delete", deleteProduct).then((response) => {
				alert("deleted successfully")
				navigate(-1)
			}).catch((error) => {
				console.log(error);
			})
		}
	}

	setInterval(() => {
		const time = Date.now() - auctionTime;
		let rmc = 172800000 - time;

		const seconds = Math.floor((rmc / 1000) % 60);
		const minutes = Math.floor((rmc / (1000 * 60)) % 60);
		const hours = Math.floor(rmc / (1000 * 60 * 60));

		const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

		if (rmc > 0) {
			setRemainingTime(rmc)
			setCountdown(formattedTime)
		}
	}, 1000);



	const handelYourPrice = () => {

		if (enterYourPrice > currentPrice) {
			setCurrentPrice(enterYourPrice)
			setShowYourPrice(enterYourPrice)
			setEnterYourPrice("");
			setPriceError("");

			const BidData = { uid: localStorage.getItem("_id"), bidprice: enterYourPrice }

			axios.post(_apiurlbid + "/save", BidData).then((response) => {
			}).catch((error) => {
				console.log(error);
			})


		} else {
			setPriceError("Please enter greater than current Price")
		}
	}

	return (
		<>
			<div className="container-fluid bg-secondary p-0">
				<div className="">
					<div className="col-lg-12 pt-2 pb-4 px-5">
						{
							productDetails.map((value) => (
								<div className="my-4">
									<Link to="/viewCategory"><span className='link'>Category List </span></Link>
									<span style={{ color: "gray" }}>{' >> '}</span>
									<Link to={`/viewSubCategory/${value.catnm}`}><span className='link'>{value.catnm}</span></Link>
									<span style={{ color: "gray" }}>{' >> '}</span>
									<Link to={`/products/${value.catnm}/${params.subcatnm}`}><span className='link'>{params.subcatnm}</span></Link>
									<span style={{ color: "gray" }}>{' >> '}</span><span className='link'>{params.ptitle}</span>
								</div>
							))}
						{
							productDetails.map((value) => (
								<div className='container productDetails pt-4 d-flex'>
									<div className='Product-image'>
										<img src={`../../../assets/uploads/producticons/${value.piconnm}`} alt="img" />
									</div>
									<div className='product-description'>
										<h3>{value.ptitle}</h3>
										<p>{value.subcatnm}</p>
										<div className='price'><span>Base Price</span> - {value.baseprice.toLocaleString("en-IN")}</div>
										<div className='current-Price'><span>Current Price</span> - {value.baseprice > currentPrice ? value.baseprice.toLocaleString("en-IN") : currentPrice.toLocaleString("en-IN")}</div>
										<div className='your-Price'>Your Price - {showYourPrice == null ? "00" : showYourPrice.toLocaleString("en-IN")}</div>

										<p><span className='description'>Description</span> - {value.description}</p>
										<div className="dropdown">
											<button type="button" className={`bidding-btn dropdown-toggle ${remainingTime > 0 ? '' : 'disabled'} `} data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" style={{ cursor: remainingTime > 0 ? 'pointer' : 'not-allowed' }}>
												Are You interested for auction
											</button>
											<span className='time'>{remainingTime > 0 ? "RemainingTime - " : "TimeUp"} {countdown}</span>
											<div className="dropdown-menu pt-4 pe-2 px-4">
												<div className="mb-3">
													<label for="auctionPrice" className="form-label">Enter your auction</label><br />
													<input type="number" className="Price-input" id="auctionPrice" placeholder="00000$" value={enterYourPrice} onChange={(e) => { setEnterYourPrice(e.target.value) }} />
													<button className="auction-submit-btn" onClick={handelYourPrice}>submit</button>
													<div className='low-price-error'>{priceError}</div>
												</div>
											</div>
										</div>

										<Link to="/auctionList">
											{/* <button className='auction-list'>See Auctions List</button> */}
										</Link>
									</div>
									{value.uid == localStorage.getItem("email") ? <div className='delete' onClick={() => { deleteProduct(value._id) }}><MdDelete size={25} color='white' /></div> : ""}
								</div>
							))}
					</div>
				</div>
			</div >
			<Outlet />
		</>
	);
}

export default ProductDetails;
