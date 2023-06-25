import React from 'react'
import './style.css'
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Navbars from '../Dashboard/Navbars';
import Sidebar from '../Dashboard/Sidebar';
export const BankAccount = () => {
    return (
        <>
            <Navbars />
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <div className="container-xl px-4 mt-4" style={{ flex: 1, padding: '20px' }}>
                    {/* <!-- Account page navigation--> */}
                    <nav className="nav nav-borders">
                        <Link to='/profile' className="nav-link active ms-0">Profile</Link>
                        <Link to='/bank-account' className="nav-link" >Billing</Link>
                        <Link to='/security' className="nav-link" >Security</Link>
                        <Link to='/verify-Account' className="nav-link" >Account-Varification</Link>
                    </nav>
                    <hr className="mt-0 mb-4" />
                    <div className="row">
                        <div className="col-lg-4 mb-4">
                            {/* <!-- Billing card 1--> */}
                            <div className="card h-100 border-start-lg border-start-primary">
                                <div className="card-body">
                                    <div className="small text-muted">Current monthly bill</div>
                                    <div className="h3">₹ 20.00</div>
                                    <a className="text-arrow-icon small" href="#!">
                                        Switch to yearly billing
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            {/* <!-- Billing card 2--> */}
                            <div className="card h-100 border-start-lg border-start-secondary">
                                <div className="card-body">
                                    <div className="small text-muted">Next payment due</div>
                                    <div className="h3">July 15</div>
                                    <a className="text-arrow-icon small text-secondary" href="#!">
                                        View payment history
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            {/* <!-- Billing card 3--> */}
                            <div className="card h-100 border-start-lg border-start-success">
                                <div className="card-body">
                                    <div className="small text-muted">Current plan</div>
                                    <div className="h3 d-flex align-items-center">Freelancer</div>
                                    <a className="text-arrow-icon small text-success" href="#!">
                                        Upgrade plan
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Payment methods card--> */}
                    <div className="card card-header-actions mb-4">
                        <div className="card-header">
                            Payment Methods
                            <button className="btn btn-sm btn-primary" type="button">Add Payment Method</button>
                        </div>
                        <div className="card-body px-0">
                            {/* <!-- Payment method 1--> */}
                            <div className="d-flex align-items-center justify-content-between px-4">
                                <div className="d-flex align-items-center">
                                    <i className="fab fa-cc-visa fa-2x cc-color-visa"></i>
                                    <div className="ms-4">
                                        <div className="small">Visa ending in 1234</div>
                                        <div className="text-xs text-muted">Expires 04/2024</div>
                                    </div>
                                </div>
                                <div className="ms-4 small">
                                    <div className="badge bg-light text-dark me-3">Default</div>
                                    <a href="#!">Edit</a>
                                </div>
                            </div>
                            <hr />
                            {/* <!-- Payment method 2--> */}
                            <div className="d-flex align-items-center justify-content-between px-4">
                                <div className="d-flex align-items-center">
                                    <i className="fab fa-cc-mastercard fa-2x cc-color-mastercard"></i>
                                    <div className="ms-4">
                                        <div className="small">Mastercard ending in 5678</div>
                                        <div className="text-xs text-muted">Expires 05/2022</div>
                                    </div>
                                </div>
                                <div className="ms-4 small">
                                    <a className="text-muted me-3" href="#!">Make Default</a>
                                    <a href="#!">Edit</a>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                    {/* <!-- Billing history card--> */}
                    <div className="card mb-4">
                        <div className="card-header">Billing History</div>
                        <div className="card-body p-0">
                            {/* <!-- Billing history table--> */}
                            <div className="table-responsive table-billing-history">
                                <table className="table mb-0">
                                    <thead>
                                        <tr>
                                            <th className="border-gray-200" scope="col">Transaction ID</th>
                                            <th className="border-gray-200" scope="col">Date</th>
                                            <th className="border-gray-200" scope="col">Amount</th>
                                            <th className="border-gray-200" scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#39201</td>
                                            <td>06/15/2021</td>
                                            <td>$29.99</td>
                                            <td><span className="badge bg-light text-dark">Pending</span></td>
                                        </tr>
                                        <tr>
                                            <td>#38125</td>
                                            <td>03/15/2021</td>
                                            <td>$29.99</td>
                                            <td><span className="badge bg-success">Paid</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
