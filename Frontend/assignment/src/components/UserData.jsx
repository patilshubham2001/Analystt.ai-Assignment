
import React from 'react'
import { useState } from 'react';
import './UserData.css'
import { Pagination } from '@mui/material';


const UserData = ({Data, page, setPage, perPage}) => {              // Destructure

    // Use useState hook for showing Details
    const [showDetails, setShowDetails] = useState({});

    // arrow function to handle onclick button
    const handleViewDetails = (userId) => {
        setShowDetails((prev) => ({
            ...prev,
            [userId]: !prev[userId]
        }));
    }

    //  divided data length for pagination how much pages required to show data
    const totalPages = Math.ceil(Data.length / perPage);

    return (
        <div>       
            <div className="main-container">
                {
                    Data.length > 0 &&
                    Data
                        .slice((page - 1) * perPage, page * perPage).map((item) => {        // mapping to fecth data
                        const userId = item.id;
                        return (
                            <div className="card-container" key={userId}>
                                <div className="list-container">
                                    <ul>
                                        <li>name <br></br><span>{item.name}</span></li>
                                        <li>userName <br></br><span>{item.username}</span></li>
                                        <li>email <br></br><span>{item.email}</span></li>
                                        <button className='btn-details' onClick={() => handleViewDetails(userId)}>{showDetails[userId] ? 'Hide Details' : 'View Details'}</button>
                                    </ul>
                                </div>
                                {
                                    showDetails[userId] &&
                                    <div className="sub-card-container">
                                        <div className="list-container">
                                            <ul className='sub-list'>
                                                <div>
                                                    <h3>Personal Details</h3>
                                                    <li>Phone <br></br><span>{item.phone}</span></li>
                                                    <li>website <br></br><span>{item.website}</span></li>
                                                    <li>Company Name <br></br><span>{item.company.name}</span></li>
                                                    <li>catchPhrase <br></br><span>{item.company.catchPhrase}</span></li>
                                                </div>

                                                <div>
                                                    <h3>Address</h3>
                                                    <li>street <br></br><span>{item.address.street}</span></li>
                                                    <li>suite <br></br><span>{item.address.suite}</span></li>
                                                    <li>city <br></br><span>{item.address.city}</span></li>
                                                    <li>zipcode <br></br><span>{item.address.zipcode}</span></li>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                }
                            </div>
                        )
                    })
                }
                 {/* pagination */}
                <Pagination className='pagination' count={totalPages} variant="outlined" shape="rounded" defaultPage={page} onChange={(e, value)=>setPage(value)} />
            </div>
        </div>
    )
}

export default UserData




