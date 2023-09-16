import React, { useState } from 'react';
import axios from 'axios';
import './Lawyerform.css';

const url = "http://localhost:8800/api/lawyer/";

function LawyerForm() {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        phone: '',
        yoe: '',
        id_card: '',
    });
    const [idCardImage, setIdCardImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // console.log(formData);
            // Prepare the complete user data including the image
            const userData = {
                ...formData,
                id_card: idCardImage, // Assign the image data
            };
            console.log(userData);

            // Send the user data to your API
            const response = await axios.post(url, userData);
            console.log(response.data);

            // Reset the form after successful submission
            setFormData({
                email: '',
                name: '',
                phone: '',
                yoe: '',
                id_card: '', // Reset the image data
            });
            setIdCardImage(''); // Reset the image preview

            console.log('User data submitted successfully:', userData);
        } catch (error) {
            console.log('Error submitting user data:', error);
        }
    };

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setIdCardImage(base64);

        // Do not update formData here; it will be updated when the form is submitted
    };


    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="registration-box p-4 shadow">
                <h2 className="mb-4">Advocate Registration</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
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
                    <div className='my-4 mb-3 uploads-pic'>
                        <label htmlFor="myfile" className='mx-4'><u>Upload your Profile Picture:</u></label>
                        <input id="myfile" type="file"
                            name="profile_img"
                            accept="image/*"
                        />
                    </div>
                    <br/>
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
                            type="number"
                            name="yearofexp"
                            value={formData.yoe}
                            onChange={(e) => setFormData({ ...formData, yoe: e.target.value })}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className='my-4 mb-3 uploads'>
                        <label htmlFor="myfile" className='mx-4'><u>Upload your ID:</u></label>
                        <input id="myfile" type="file"
                            name="id_card"
                            accept=".jpeg, .png, .jpg"
                            onChange={(e) => handleFileUpload(e)} 
                        />
                    </div>
                    <br/>
                    <img src={idCardImage} alt="ID Card" />
                    <br/>
                    <br/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default LawyerForm;

function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
            reject(error);
        };
    });
}
