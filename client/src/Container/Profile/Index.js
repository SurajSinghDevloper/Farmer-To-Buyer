import React from 'react'
import './style.css'
import Navbar from '../Dashboard/Navbars';
import Sidebar from '../Dashboard/Sidebar'
import { Link } from 'react-router-dom/cjs/react-router-dom';

export const Profile = (props) => {
    return (
        <>
            <Navbar />
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <div className="container-xl px-4 mt-4" style={{ flex: 1, padding: '20px' }}>
                    <nav className="nav nav-borders">
                        <Link to='/profile' className="nav-link active ms-0">Profile</Link>
                        <Link to='/bank-account' className="nav-link" >Billing</Link>
                        <Link to='/security' className="nav-link" >Security</Link>
                        <Link to='/verify-Account' className="nav-link" >Account-Varification</Link>
                    </nav>
                    <hr className="mt-0 mb-4" />
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="card mb-4 mb-xl-0">
                                <div className="card-header">Profile Picture</div>
                                <div className="card-body text-center">
                                    <img className="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
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
                                            <label className="small mb-1" for="inputUsername">Username (how your name will appear to other users on the site)</label>
                                            <input className="form-control" id="inputUsername" type="text" placeholder="Enter your username" value="username" />
                                        </div>
                                        <div className="row gx-3 mb-3">
                                            <div className="col-md-6">
                                                <label className="small mb-1" for="inputFirstName">First name</label>
                                                <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" value="Valerie" />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="small mb-1" for="inputLastName">Last name</label>
                                                <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" value="Luna" />
                                            </div>
                                        </div>
                                        <div className="row gx-3 mb-3">
                                            <div className="col-md-6">
                                                <label className="small mb-1" for="inputOrgName">Organization name</label>
                                                <input className="form-control" id="inputOrgName" type="text" placeholder="Enter your organization name" value="Start Bootstrap" />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="small mb-1" for="inputLocation">Location</label>
                                                <input className="form-control" id="inputLocation" type="text" placeholder="Enter your location" value="San Francisco, CA" />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="small mb-1" for="inputEmailAddress">Email address</label>
                                            <input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value="name@example.com" />
                                        </div>
                                        <div className="row gx-3 mb-3">
                                            <div className="col-md-6">
                                                <label className="small mb-1" for="inputPhone">Phone number</label>
                                                <input className="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" value="555-123-4567" />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="small mb-1" for="inputBirthday">Birthday</label>
                                                <input className="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter your birthday" value="06/10/1988" />
                                            </div>
                                        </div>
                                        <button className="btn btn-primary" type="button">Save changes</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
