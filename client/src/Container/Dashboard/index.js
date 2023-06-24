import React from 'react'
import Navbar from './Navbars';
import Sidebar from './Sidebar';
export const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <div style={{ flex: 1, padding: '20px' }}>
                    <h2>Welcome to the Dashboard</h2>
                    <p>This is the main content area of the dashboard.</p>
                </div>
            </div>
        </div>
    );
}
