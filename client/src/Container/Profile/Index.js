import React, { useEffect, useState } from 'react'
import './style.css'
import Navbar from '../Dashboard/Navbars';
import Sidebar from '../Dashboard/Sidebar'
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../actions/profile.action';

export const Profile = (props) => {

    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [userId, setUserId] = useState('');
    const [address, setAddress] = useState('');
    const [dob, setDob] = useState('');
    const userDetails = useSelector((state) => state.userDetails);
    console.log("👉👉👉 ~~ file: Index.js:21 ~~ Profile ~~ userDetails:", userDetails)


    useEffect(() => {
        if (userDetails) {
            setFirstName(userDetails.userDetails.firstName);
            setLastName(userDetails.userDetails.lastName);
            setEmail(userDetails.userDetails.email);
            setContactNumber(userDetails.userDetails.contactNumber);
            setAddress(userDetails.userDetails.address)
            setUserId(userDetails.userDetails._id);
            setDob(userDetails.userDetails.dob)
        }
    }, [userDetails]);
    console.log(userDetails.userDetails.firstName)

    const handleUpdate = () => {
        const updatedUser = {
            _id: userId,
            firstName,
            lastName,
            email,
            contactNumber,
            address,
            dob,
        };

        dispatch(updateUser(updatedUser));
    };



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
                                            <label className="small mb-1" htmlFor="inputUsername">Username (how your name will appear to other users on the site)</label>
                                            <input
                                                className="form-control"
                                                id="inputUsername"
                                                type="text"
                                                placeholder="Enter your username"
                                                onChange={(e) => setUserId(e.target.value)}
                                                value={userId} />
                                        </div>
                                        <div className="row gx-3 mb-3">
                                            <div className="col-md-6">
                                                <label className="small mb-1" htmlFor="inputFirstName">First name</label>
                                                <input
                                                    className="form-control"
                                                    id="inputFirstName"
                                                    type="text"
                                                    placeholder="Enter your first name"
                                                    onChange={(e) => setFirstName(e.target.value)}
                                                    value={firstName} />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="small mb-1" htmlFor="inputLastName">Last name</label>
                                                <input
                                                    className="form-control"
                                                    id="inputLastName"
                                                    type="text"
                                                    placeholder="Enter your last name"
                                                    onChange={(e) => setLastName(e.target.value)}
                                                    value={lastName} />
                                            </div>
                                        </div>
                                        <div className="row gx-3 mb-3">
                                            <div className="col-md-6">
                                                <label className="small mb-1" htmlFor="inputOrgName">Organization name</label>
                                                <input
                                                    className="form-control"
                                                    id="inputOrgName" type="text"
                                                    placeholder="Enter your organization name"
                                                    value="Start Bootstrap" />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="small mb-1" htmlFor="inputLocation">Location</label>
                                                <input
                                                    className="form-control"
                                                    id="inputLocation"
                                                    type="text"
                                                    placeholder="Enter your location"
                                                    onChange={(e) => setAddress(e.target.value)}
                                                    value={address} />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="small mb-1" htmlFor="inputEmailAddress">Email address</label>
                                            <input
                                                className="form-control"
                                                id="inputEmailAddress"
                                                type="email"
                                                placeholder="Enter your email address"
                                                onChange={(e) => setEmail(e.target.value)}
                                                value={email} />
                                        </div>
                                        <div className="row gx-3 mb-3">
                                            <div className="col-md-6">
                                                <label className="small mb-1" htmlFor="inputPhone">Phone number</label>
                                                <input
                                                    className="form-control"
                                                    id="inputPhone" type="tel"
                                                    placeholder="Enter your phone number"
                                                    onChange={(e) => setContactNumber(e.target.value)}
                                                    value={contactNumber} />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="small mb-1" htmlFor="inputBirthday">Birthday</label>
                                                <input
                                                    className="form-control"
                                                    id="inputBirthday" type="text"
                                                    name="birthday"
                                                    onChange={(e) => setDob(e.target.value)}
                                                    placeholder="Enter your birthday"
                                                    value={dob} />
                                            </div>
                                        </div>
                                        <button onClick={handleUpdate} className="btn btn-primary" type="button">Save changes</button>
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
