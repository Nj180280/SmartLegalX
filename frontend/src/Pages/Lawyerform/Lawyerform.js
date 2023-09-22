import React, { useState } from 'react';
import axios from 'axios';
import './Lawyerform.css';

const url = "http://localhost:8800/api/lawyer/";

function LawyerForm() {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        phone: '',
        yearOfExperience: '',
    });
    const [profileImage, setProfileImage] = useState(null);
    const [idCard, setIdCard] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userData = new FormData();
            userData.append('email', formData.email);
            userData.append('name', formData.name);
            userData.append('phone', formData.phone);
            userData.append('yearOfExperience', formData.yearOfExperience);
            userData.append('profileImage', profileImage); // Append the file
            userData.append('idCard', idCard); // Append the file

            // Send the user data to your API
            const response = await axios.post(url, userData);
            console.log(response.data);

            // Reset the form after successful submission
            setFormData({
                email: '',
                name: '',
                phone: '',
                yearOfExperience: '', // Reset the form fields
            });
            setProfileImage(null); // Reset the file objects
            setIdCard(null); // Reset the file objects

            console.log('User data submitted successfully:', userData);
        } catch (error) {
            console.log('Error submitting user data:', error);
        }
    };

    const handleFileUpload = (e, type) => {
        const file = e.target.files[0];
        if (type === 'profileImage') {
            setProfileImage(file); // Store the file object
        } else if (type === 'idCard') {
            setIdCard(file); // Store the file object
        }
    };


    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="registration-box p-4 shadow">
                <h2 className="mb-4">Advocate Registration</h2>
                <form onSubmit={handleSubmit} enctype="multipart/form-data">
                    <div className="mb-3">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder='enter email'
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label>Phone:</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label>Year of Experience:</label>
                        <input
                            type="text"
                            name="yearOfExperience"
                            value={formData.yearOfExperience}
                            onChange={(e) => setFormData({ ...formData, yearOfExperience: e.target.value })}
                            className="form-control"
                            placeholder='Eg : 2011 - present'
                            required
                        />
                    </div>
                    <div className='my-4 mb-3 uploads'>
                        <label htmlFor="profileImage" className='mx-4'><u>Upload your Profile Picture:</u></label>
                        <input
                            id="profileImage"
                            type="file"
                            name="profileImage"
                            onChange={(e) => handleFileUpload(e, 'profileImage')}
                            required
                        />
                    </div>
                    <br />

                    <div className='my-4 mb-3 uploads'>
                        <label htmlFor="idCard" className='mx-4'><u>Upload your ID:</u></label>
                        <input
                            id="idCard"
                            type="file"
                            name="idCard"
                            onChange={(e) => handleFileUpload(e, 'idCard')}
                            required
                        />
                    </div>
                    <br />
                    <br />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default LawyerForm;
