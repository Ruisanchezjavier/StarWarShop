import React, { useState } from 'react';
import '../../styles/Profile.css';
import { StarBackground } from '../component/StarBackground';
import 'bootstrap/dist/css/bootstrap.min.css';


export function Profile() {

return (
<div>
<link
rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA="
crossOrigin="anonymous"
/>

<div className="container">
<div className="row">
<div className="col-12">
<div className="my-5">
<h3>My Profile</h3>
<hr />
</div>

<form className="file-upload">
<div className="row mb-5 gx-5">
<div className="col-xxl-8 mb-5 mb-xxl-0">
<div className="bg-secondary-soft px-4 py-5 rounded">
<div className="row g-3">
<h4 className="mb-4 mt-0">Contact detail</h4>

<div className="col-md-6">
<label className="form-label">First Name *</label>
<input
type="text"
className="form-control"
placeholder=""
aria-label="First name"
defaultValue="Scaralet"
/>
</div>

<div className="col-md-6">
<label className="form-label">Last Name *</label>
<input
type="text"
className="form-control"
placeholder=""
aria-label="Last name"
defaultValue="Doe"
/>
</div>

<div className="col-md-6">
<label className="form-label">Phone number *</label>
<input
type="text"
className="form-control"
placeholder=""
aria-label="Phone number"
defaultValue="(333) 000 555"
/>
</div>

<div className="col-md-6">
<label className="form-label">Mobile number *</label>
<input
type="text"
className="form-control"
placeholder=""
aria-label="Phone number"
defaultValue="+91 9852 8855 252"
/>
</div>

<div className="col-md-6">
<label htmlFor="inputEmail4" className="form-label">Email *</label>
<input
type="email"
className="form-control"
id="inputEmail4"
defaultValue="example@homerealty.com"
/>
</div>

<div className="col-md-6">
<label className="form-label">Skype *</label>
<input
type="text"
className="form-control"
placeholder=""
aria-label="Phone number"
defaultValue="Scaralet D"
/>
</div>
</div>
</div>
</div>

<div className="col-xxl-4">
<div className="bg-secondary-soft px-4 py-5 rounded">
<div className="row g-3">
<h4 className="mb-4 mt-0">Upload your profile photo</h4>
<div className="text-center">
<div className="square position-relative display-2 mb-3">
<i className="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary"></i>
</div>

<input type="file" id="customFile" name="file" hidden />
<label className="btn btn-success-soft btn-block" htmlFor="customFile">Upload</label>
<button type="button" className="btn btn-danger-soft">Remove</button>

<p className="text-muted mt-3 mb-0">
<span className="me-1">Note:</span>Minimum size 300px x 300px
</p>
</div>
</div>
</div>
</div>
</div>

<div className="row mb-5 gx-5">
<div className="col-xxl-6 mb-5 mb-xxl-0">
<div className="bg-secondary-soft px-4 py-5 rounded">
<div className="row g-3">
<h4 className="mb-4 mt-0">Social media detail</h4>

<div className="col-md-6">
<label className="form-label">
<i className="fab fa-fw fa-facebook me-2 text-facebook"></i>Facebook *
</label>
<input
type="text"
className="form-control"
placeholder=""
aria-label="Facebook"
defaultValue="http://www.facebook.com"
/>
</div>

<div className="col-md-6">
<label className="form-label">
<i className="fab fa-fw fa-twitter text-twitter me-2"></i>Twitter *
</label>
<input
type="text"
className="form-control"
placeholder=""
aria-label="Twitter"
defaultValue="http://www.twitter.com"
/>
</div>

<div className="col-md-6">
<label className="form-label">
<i className="fab fa-fw fa-linkedin-in text-linkedin me-2"></i>Linkedin *
</label>
<input
type="text"
className="form-control"
placeholder=""
aria-label="Linkedin"
defaultValue="http://www.linkedin.com"
/>
</div>

<div className="col-md-6">
<label className="form-label">
<i className="fab fa-fw fa-instagram text-instagram me-2"></i>Instagram *
</label>
<input
type="text"
className="form-control"
placeholder=""
aria-label="Instragram"
defaultValue="http://www.instagram.com"
/>
</div>

<div className="col-md-6">
<label className="form-label">
<i className="fas fa-fw fa-basketball-ball text-dribbble me-2"></i>Dribble *
</label>
<input
type="text"
className="form-control"
placeholder=""
aria-label="Dribble"
defaultValue="http://www.dribble.com"
/>
</div>

<div className="col-md-6">
<label className="form-label">
<i className="fab fa-fw fa-pinterest text-pinterest"></i>Pinterest *
</label>
<input
type="text"
className="form-control"
placeholder=""
aria-label="Pinterest"
defaultValue="http://www.pinterest.com"
/>
</div>
</div>
</div>
</div>

<div className="col-xxl-6">
<div className="bg-secondary-soft px-4 py-5 rounded">
<div className="row g-3">
<h4 className="my-4">Change Password</h4>

<div className="col-md-6">
<label htmlFor="exampleInputPassword1" className="form-label">Old password *</label>
<input type="password" className="form-control" id="exampleInputPassword1" />
</div>

<div className="col-md-6">
<label htmlFor="exampleInputPassword2" className="form-label">New password *</label>
<input type="password" className="form-control" id="exampleInputPassword2" />
</div>

<div className="col-md-12">
<label htmlFor="exampleInputPassword3" className="form-label">Confirm Password *</label>
<input type="password" className="form-control" id="exampleInputPassword3" />
</div>
</div>
</div>
</div>
</div>

<div className="gap-3 d-md-flex justify-content-md-end text-center">
<button type="button" className="btn btn-danger btn-lg">Delete profile</button>
<button type="button" className="btn btn-primary btn-lg">Update profile</button>
</div>
</form>
</div>
</div>
</div>
</div>
);
}


