import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import "../../styles/shipping.css";

export const Shipping = () => {
	const { store, actions } = useContext(Context);
	const [formValues, setFormValues] = useState({
		firstName: "",
		lastName: "",
		address: "",
		address2: "",
		country: "",
		state: "",
		zip:""
	});

	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormValues({
		  ...formValues,
		  [id]: value
		});
	  };
	
	  const handleSubmit = (e) => {
		e.preventDefault();
		// Manejar el envío del formulario aquí
	  };

	return (
	<>
	<div className="space">
		<div className="container">
			<div className="row mt-1">
				<div class="col-md-3 order-md-3 mb-4 ">
					<h4 class="d-flex justify-content-between align-items-center mb-3">
						<span class="">Your cart</span>
						<span class="badge badge-secondary badge-pill">3</span>
					</h4>
					<ul class="list-group mb-3">
						<li class="list-group-item d-flex justify-content-between lh-condensed">
						<div>
							<h6 class="my-0">Product name</h6>
							<small class="text-muted">Brief description</small>
						</div>
						<span class="text-muted">$12</span>
						</li>
						<li class="list-group-item d-flex justify-content-between lh-condensed">
						<div>
							<h6 class="my-0">Second product</h6>
							<small class="text-muted">Brief description</small>
						</div>
						<span class="text-muted">$8</span>
						</li>
						<li class="list-group-item d-flex justify-content-between lh-condensed">
						<div>
							<h6 class="my-0">Third item</h6>
							<small class="text-muted">Brief description</small>
						</div>
						<span class="text-muted">$5</span>
						</li>
						<li class="list-group-item d-flex justify-content-between">
						<span>Total (USD)</span>
						<strong>$20</strong>
						</li>
					</ul>

					{/* <form class="card p-2">
						<div class="input-group">
						<input type="text" class="form-control" placeholder="Promo code"/>
						<div class="input-group-append">
							<button type="submit" class="btn btn-secondary">Redeem</button>
						</div>
						</div>
					</form> */}
					</div>
					<div className="col-md-2 order-md-2"></div>
				<div className="col-md-7 order-md-1">
					<h4 className="mb-3">Billing address</h4>
					<form onSubmit={handleSubmit}>
						<div className="row">
						<div className="col-md-6 mb-3">
							<label htmlFor="firstName">First name</label>
							<input type="text" className="form-control" id="firstName" placeholder="" value={formValues.firstName} required="" onChange={handleChange}/>
							<div className="invalid-feedback">
							Valid first name is required.
							</div>
						</div>
						<div className="col-md-6 mb-3">
							<label htmlFor="lastName">Last name</label>
							<input type="text" className="form-control" id="lastName" placeholder="" value={formValues.lastName} required="" onChange={handleChange}/>
							<div className="invalid-feedback">
							Valid last name is required.
							</div>
						</div>
						</div>

						<div className="mb-3">
						<label htmlFor="address">Address</label>
						<input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" value={formValues.address} onChange={handleChange}/>
						<div className="invalid-feedback">
							Please enter your shipping address.
						</div>
						</div>

						<div className="mb-3">
						<label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
						<input type="text" className="form-control" id="address2" placeholder="Apartment or suite" value={formValues.address2} onChange={handleChange}/>
						</div>

						<div className="row">
						<div className="col-md-5 mb-3">
							<label htmlFor="country">Country</label>
							<select className="custom-select d-block w-100" id="country" required="" value={formValues.country} onChange={handleChange}>
							<option value="">Choose...</option>
							<option>United States</option>
							</select>
							<div className="invalid-feedback">
							Please select a valid country.
							</div>
						</div>
						<div className="col-md-4 mb-3">
							<label htmlFor="state">State</label>
							<select className="custom-select d-block w-100" id="state" required="" value={formValues.state} onChange={handleChange}>
							<option value="">Choose...</option>
							<option>California</option>
							</select>
							<div className="invalid-feedback">
							Please provide a valid state.
							</div>
						</div>
						<div className="col-md-3 mb-3">
							<label htmlFor="zip">Zip</label>
							<input type="text" className="form-control" id="zip" placeholder="" required="" value={formValues.zip} onChange={handleChange}/>
							<div className="invalid-feedback">
							Zip code required.
							</div>
						</div>
						</div>
					
						<div className="custom-control custom-checkbox">
						<input type="checkbox" className="custom-control-input" id="save-info"/>
						<label className="custom-control-label" htmlFor="save-info">Save this information for next time</label>
						</div>    
						<button className="btn btn-primary btn-lg btn-block" type="submit">Continue to payment</button>
					</form>
					</div>
			</div>
		</div>
	</div>

    </>
	);
};