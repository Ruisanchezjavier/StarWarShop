import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import '../../../styles/Profile.css';
import { StarBackground } from '../../component/StarBackground';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Security() {
    const { store } = useContext(Context);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const [profile, setProfile] = useState({
        current_password: "",
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
        e.preventDefault();
        if (profile.new_password !== profile.confirm_password) {
            setMessage("New password and confirm password do not match");
            return;
        }
        try {
            const token = store.token;
            if (!token) {
                setMessage("Token not found");
                return;
            }
            const response = await fetch(`${process.env.BACKEND_URL}/api/change_password`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    current_password: profile.current_password,
                    new_password: profile.new_password,
                }),
            });
            if (response.ok) {
                setMessage("Password updated successfully");
                navigate('/profile'); // Redirige al perfil u otra página
            } else {
                const errorData = await response.json();
                setMessage(`Error updating password: ${errorData.msg}`);
            }
        } catch (error) {
            setMessage(`Network error: ${error}`);
        }
    };
    

    return (
        <div className="container-xl px-4 mt-4">
            <StarBackground />
            <nav className="nav nav-borders">
                <Link className="nav-link" to="/Profile">Profile</Link>
                <Link className="nav-link" to="/billing">Billing</Link>
                <Link className="nav-link active" to="/security">Security</Link>
            </nav>
            <hr className="mt-0 mb-4"/>
            <div className="row">
                <div className="col-lg-8">
                    <div className="card mb-4">
                        <div className="card-header">Change Password</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="small mb-1" htmlFor="currentPassword">Current Password</label>
                                    <input 
                                        className="form-control" 
                                        id="currentPassword" 
                                        name="current_password" 
                                        type="password" 
                                        placeholder="Enter current password"  
                                        value={profile.current_password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="small mb-1" htmlFor="newPassword">New Password</label>
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
                                    <label className="small mb-1" htmlFor="confirmPassword">Confirm Password</label>
                                    <input 
                                        className="form-control" 
                                        id="confirmPassword"
                                        name="confirm_password" 
                                        type="password" 
                                        placeholder="Confirm new password"
                                        value={profile.confirm_password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <button className="btn btn-primary" type="submit">Save</button>
                            </form>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-header">Security Preferences</div>
                        <div className="card-body">
                            <h5 className="mb-1">Personal data management:</h5>
                            <p className="small text-muted"></p>
                            <form>
                                <div className="form-check">
                                    <input className="form-check-input" id="radioPrivacy1" type="radio" name="radioPrivacy" defaultChecked/>
                                    <label className="form-check-label" htmlFor="radioPrivacy1">Editing personal information (Allow users to update their personal information (name, address, email, etc.).)</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" id="radioPrivacy2" type="radio" name="radioPrivacy"/>
                                    <label className="form-check-label" htmlFor="radioPrivacy2">Data deletion (Option to delete specific information or the entire profile and associated data)</label>
                                </div>
                            </form>
                            <hr className="my-4"/>
                            <h5 className="mb-1">Data sharing with third parties</h5>
                            <p className="small text-muted"></p>
                            <form>
                                <div className="form-check">
                                    <input className="form-check-input" id="radioUsage1" type="radio" name="radioUsage" defaultChecked/>
                                    <label className="form-check-label" htmlFor="radioUsage1">Explicit consent (Ask users if they want to share their data with third parties for additional promotions or services.)</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" id="radioUsage2" type="radio" name="radioUsage"/>
                                    <label className="form-check-label" htmlFor="radioUsage2">View and revoke permissions (Show which third parties have access to your data and allow you to revoke those permissions.)</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card mb-4">
                        <div className="card-header">Two-Factor Authentication</div>
                        <div className="card-body">
                            <p>Add another level of security to your account by enabling two-factor authentication. We will send you a text message to verify your login attempts on unrecognized devices and browsers.</p>
                            <form>
                                <div className="form-check">
                                    <input className="form-check-input" id="twoFactorOn" type="radio" name="twoFactor" defaultChecked/>
                                    <label className="form-check-label" htmlFor="twoFactorOn">On</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" id="twoFactorOff" type="radio" name="twoFactor"/>
                                    <label className="form-check-label" htmlFor="twoFactorOff">Off</label>
                                </div>
                                <div className="mt-3">
                                    <label className="small mb-1" htmlFor="twoFactorSMS">SMS Number</label>
                                    <input className="form-control" id="twoFactorSMS" type="tel" placeholder="Enter a phone number" defaultValue="555-123-4567"/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-header">Delete Account</div>
                        <div className="card-body">
                            <p>Deleting your account is a permanent action and cannot be undone. If you are sure you want to delete your account, select the button below.</p>
                            <button className="btn btn-danger-soft text-danger" type="button">I understand, delete my account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


