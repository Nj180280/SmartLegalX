import React, { useState } from 'react';
import axios from 'axios';

const url = "http://localhost:8800/api/lawyer/";

function LawyerForm() {
   const [formData, setFormData] = useState({
      email: '',
      name: '',
      phone: '',
      password: '',
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
            password: '',
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
      <div>
         <h2>User Registration</h2>
         <form onSubmit={handleSubmit}>
            <div>
               <label>Email:</label>
               <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
               />
            </div>
            <div>
               <label>Name:</label>
               <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
               />
            </div>
            <div>
               <label>Phone:</label>
               <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
               />
            </div>
            <div>
               <label>Password:</label>
               <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
               />
            </div>
            <div>
               <label>ID Card:</label>
               <img src={idCardImage} alt="ID Card" />
               <input
                  type="file"
                  name="id_card"
                  accept=".jpeg, .png, .jpg"
                  onChange={(e) => handleFileUpload(e)}
               />
            </div>
            <button type="submit">Submit</button>
         </form>
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
