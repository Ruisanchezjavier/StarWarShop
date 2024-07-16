import React, { useEffect, useState } from 'react';
import '../../../styles/Profile.css';
import { StarBackground } from '../../component/StarBackground';
import 'bootstrap/dist/css/bootstrap.min.css';


export function Profile() {
const [profile, setProfile] = useState({});

useEffect(() => {
fetch('http://127.0.0.1:5000/api/profile')
.then(response => response.json())
.then(data => setProfile(data));
}, []);

const handleChange = (e) => {
setProfile({
...profile,
[e.target.id]: e.target.value,
});
};

const handleSubmit = () => {
fetch('http://127.0.0.1:5000/api/profile', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(profile),
})
.then(response => response.json())
.then(data => console.log(data));
};

return (
<div>
<StarBackground />
<div className="container-xl px-4 mt-4">
<nav className="nav nav-borders">
<a className="nav-link active" href="/Profile" target="__blank">Profile</a>
<a className="nav-link" href="/billing" target="__blank">Billing</a>
<a className="nav-link" href="/security" target="__blank">Security</a>

</nav>
<hr className="mt-0 mb-4" />
<div className="row">
<div className="col-xl-4">
<div className="card mb-4 mb-xl-0">
<div className="card-header">Profile Picture</div>
<div className="card-body text-center">
<img className="img-account-profile rounded-circle mb-2" src="https://via.placeholder.com/150" alt="" />
<div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
<button className="btn btn-primary" type="button">Upload new image</button>
</div>
</div>
</div>
<div className="col-xl-8">
<div className="card mb-4">
<div className="card-header">Account Details</div>
<div className="card-body">
<form>
<div className="mb-3">
<label className="small mb-1" htmlFor="inputUsername">Username (how your name will appear to other users on the site)</label>
<input className="form-control" id="inputUsername" type="text" placeholder="Enter your username" value={profile.username || ''} onChange={handleChange} />
</div>
<div className="row gx-3 mb-3">
<div className="col-md-6">
<label className="small mb-1" htmlFor="inputFirstName">First name</label>
<input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" value={profile.first_name || ''} onChange={handleChange} />
</div>
<div className="col-md-6">
<label className="small mb-1" htmlFor="inputLastName">Last name</label>
<input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" value={profile.last_name || ''} onChange={handleChange} />
</div>
</div>
<div className="mb-3">
<label className="small mb-1" htmlFor="inputOrgName">Address</label>
<input className="form-control" id="inputOrgName" type="text" placeholder="Enter your address" value={profile.org_name || ''} onChange={handleChange} />
</div>


<div className="mb-3">
<div className="col-md-6">
<label className="small mb-1" htmlFor="inputEmailAddress">Email address</label>
<input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value={profile.email || ''} onChange={handleChange} />
</div>
</div>

<button className="btn btn-primary" type="button" onClick={handleSubmit}>Save changes</button>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
);
}

