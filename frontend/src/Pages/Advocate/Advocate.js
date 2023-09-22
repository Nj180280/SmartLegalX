import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios library

import "./Advocate.css";

const Advocate = () => {
    const navigate = useNavigate();
    const [lawyers, setLawyers] = useState([]); // store fetched lawyers

    useEffect(() => {
        fetchLawyers();
    }, []);

    const handleClick = (name) => {
        // Handle click as needed
    };

    const fetchLawyers = async () => {
        try {
            const response = await axios.get("http://localhost:8800/api/lawyer/");
            setLawyers(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };


    return (
        <div className="container">
            <div className="advocate-cont">
                {lawyers.map((item) => (
                    <div className="advocateItem" key={item._id} onClick={() => handleClick(item.idCard)}>
                        <img src={item.profileImage} alt={`advocate ${item.name}`} className="advocateImg" />
                        <div className="advocateTitles">
                            <h2>{item.name}</h2>
                            <h4>{item.email}</h4>
                            <h4>{item.phone}</h4>
                            <h4>{item.yearOfExperience} years</h4>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default Advocate;
