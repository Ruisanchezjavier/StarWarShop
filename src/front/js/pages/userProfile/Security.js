import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../../styles/Profile.css";
import { StarBackground } from "../../component/StarBackground";
import "bootstrap/dist/css/bootstrap.min.css";

export function Security() {
const { store, actions } = useContext(Context);
const [access, setAccess] = useState("unverified");
const [messages, setMessages] = useState([]);
const navigate = useNavigate();
const [profile, setProfile] = useState({
new_password: "",
confirm_password: "",
});

const handleChange = (e) => {
const { name, value } = e.target;
setProfile({
...profile,
[name]: value,
});
};

const handleSubmit = async (e) => {
setMessages([]);
e.preventDefault();
if (profile.new_password != profile.confirm_password) {
setMessages(
messages.concat({
name: "confirm",
msg: "New password and confirm password do not match",
})
);
return;
}
try {
const token = store.token;
if (!token) {
setMessages(messages.concat({ name: "token", msg: "Token not found" }));
return;
}
const response = await fetch(
`${process.env.BACKEND_URL}/api/change_password`,
{
method: "PUT",
headers: {
"Content-Type": "application/json",
Authorization: `Bearer ${token}`,
},
body: JSON.stringify({
new_password: profile.new_password,
}),
}
);
if (response.ok) {
setMessages([]);

alert("Password updated successfully"), navigate("/profile"); 
} else {
const errorData = await response.json();
setMessages(
messages.concat({
name: "passwordChange",
msg: `Error updating password: ${errorData.msg}`,
})
);
}
} catch (error) {
setMessages(
messages.concat({ name: "catchError", msg: `Network error: ${error}` })
);
}
};

const deleteAccount = async () => {
let success = await actions.deleteAccount()
if (success) {
actions.logout()
navigate("/")
}
}


return (


<div className="container-xl px-4 mt-4">
<div>
<StarBackground />
<nav className="nav nav-borders">
<Link className="nav-link" to="/Profile">
Profile
</Link>

<Link className="nav-link active" to="/security">
Security
</Link>
</nav>
<hr className="mt-0 mb-4 " />
<div className="row">
<div className="col-lg-8">
<div className="card mb-4">
<div className="card-header">Change Password</div>
<div className="card-body">
<form onSubmit={handleSubmit}>
<div className="mb-3">
<label className="small mb-1" htmlFor="newPassword">
New Password
</label>
<input
className="form-control"
id="newPassword"
name="new_password"
type="password"
placeholder="Enter new password"
value={profile.new_password}
onChange={handleChange}
/>
</div>
<div className="mb-3">
<label className="small mb-1" htmlFor="confirmPassword">
Confirm Password
</label>
<input
className="form-control"
id="confirmPassword"
name="confirm_password"
type="password"
placeholder="Confirm new password"
value={profile.confirm_password}
onChange={handleChange}
/>
{messages
.filter((m) => m.name === "confirm")
.map((m) => (
<div>
<p className="text-danger-emphasis bg-danger-subtle border border-danger">
{m.msg}
</p>
</div>
))}
</div>
<button className="btn btn-primary" type="submit">
Save
</button>
</form>
</div>
</div>

<div className="card mb-4">
<div className="card-header">Delete Account</div>
<div className="card-body">
<p>
Deleting your account is a permanent action and cannot be
undone. If you are sure you want to delete your account,
select the button below.
</p>

<button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
Delete Account
</button>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog">
<div className="modal-content">
<div className="modal-header">
<h1 className="modal-title fs-5 text-black" id="exampleModalLabel">Account Deletion</h1>
<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>

<div className="modal-body text-black">
Are you sure you want to delete your account?
</div>

<div className="modal-footer">
<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
<button type="button" onClick={() => deleteAccount()} className="btn btn-danger" data-bs-dismiss="modal">Delete Account</button>

</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>     
);
}