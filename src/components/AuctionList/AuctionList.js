import { useNavigate } from 'react-router-dom'
import './auctionPage.css'
import React from 'react'

function AuctionList() {
	const Navigate = useNavigate()
	const backPage = () => {
		Navigate(-1);
	}
	return (
		<>
			<div className='auctionPage'>
				<h1 className='heading'>Auction List</h1>
				<div className='tableArea'>
					<table className='table'>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Mobile</th>
							<th>Address</th>
							<th>Gender</th>
							<th>Price</th>
						</tr>
						<tr>
							<td>

							</td>
						</tr>
					</table>
				</div>
				<button className='back' onClick={backPage}>Back</button>
			</div>
		</>
	)
}

export default AuctionList;