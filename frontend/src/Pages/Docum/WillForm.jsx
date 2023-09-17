import React, { useState } from 'react';
import axios from 'axios';

function WillForm() {
  const [formData, setFormData] = useState({
    name: '',
    sonOf: '',
    residence: '',
    age: '',
    religion: '',
    occupation: '',
    willReceiverName: '',
    willReceiverAddress: '',
    willReceiverAge: '',
    willReceiverReligion: '',
    willReceiverOccupation: '',
    willReceiver2Name: '',
    willReceiver2Address: '',
    willReceiver2Age: '',
    willReceiver2Religion: '',
    willReceiver2Occupation: '',
    willReceiver3Name: '',
    willReceiver3Address: '',
    willReceiver3Age: '',
    willReceiver3Religion: '',
    willReceiver3Occupation: '',
    familyMembers: '',
    property: '',
    userWife: '',
    child1Name: '',
    child2Name: '',
    child3Name: '',
    date: '',
    witness1Name: '',
    witness2Name: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the form data to the backend API
      const response = await axios.post('http://localhost:5000/generate_will', formData, {
        responseType: 'blob', // Receive a binary response (e.g., a document file)
      });

      // Create a blob URL to display the document (optional)
      const blob = new Blob([response.data], {
        type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      });
      const url = window.URL.createObjectURL(blob);

      // Create an anchor element for downloading the file
      const a = document.createElement('a');
      a.href = url;
      a.download = 'filled_legal_document.docx';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      // Revoke the blob URL to release resources
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating the will document:', error);
    }
  };

  return (
    <div>
      <h2>Last Will and Testament</h2>
      <div className='container'>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Son Of */}
        <div className="form-group">
          <label htmlFor="sonOf">Son Of:</label>
          <input
            type="text"
            className="form-control"
            id="sonOf"
            name="sonOf"
            value={formData.sonOf}
            onChange={handleChange}
            required
          />
        </div>

        {/* Residence */}
        <div className="form-group">
          <label htmlFor="residence">Residence:</label>
          <input
            type="text"
            className="form-control"
            id="residence"
            name="residence"
            value={formData.residence}
            onChange={handleChange}
            required
          />
        </div>

        {/* Age */}
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            className="form-control"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        {/* Religion */}
        <div className="form-group">
          <label htmlFor="religion">Religion:</label>
          <input
            type="text"
            className="form-control"
            id="religion"
            name="religion"
            value={formData.religion}
            onChange={handleChange}
            required
          />
        </div>

        {/* Occupation */}
        <div className="form-group">
          <label htmlFor="occupation">Occupation:</label>
          <input
            type="text"
            className="form-control"
            id="occupation"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            required
          />
        </div>

        {/* Property */}
        <div className="form-group">
          <label htmlFor="property">Property:</label>
          <textarea
            className="form-control"
            id="property"
            name="property"
            value={formData.property}
            onChange={handleChange}
            required
          />
        </div>

        {/* Family Members */}
        <div className="form-group">
          <label htmlFor="familyMembers">Family Members:</label>
          <textarea
            className="form-control"
            id="familyMembers"
            name="familyMembers"
            value={formData.familyMembers}
            onChange={handleChange}
            required
          />
        </div>

        {/* Will Receiver Name */}
        <div className="form-group">
          <label htmlFor="willReceiverName">Will Receiver Name:</label>
          <input
            type="text"
            className="form-control"
            id="willReceiverName"
            name="willReceiverName"
            value={formData.willReceiverName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Will Receiver Age */}
        <div className="form-group">
          <label htmlFor="willReceiverAge">Will Receiver Age:</label>
          <input
            type="text"
            className="form-control"
            id="willReceiverAge"
            name="willReceiverAge"
            value={formData.willReceiverAge}
            onChange={handleChange}
            required
          />
        </div>

        {/* Will Receiver Religion */}
        <div className="form-group">
          <label htmlFor="willReceiverReligion">Will Receiver Religion:</label>
          <input
            type="text"
            className="form-control"
            id="willReceiverReligion"
            name="willReceiverReligion"
            value={formData.willReceiverReligion}
            onChange={handleChange}
            required
          />
        </div>

        {/* Will Receiver Occupation */}
        <div className="form-group">
          <label htmlFor="willReceiverOccupation">Will Receiver Occupation:</label>
          <input
            type="text"
            className="form-control"
            id="willReceiverOccupation"
            name="willReceiverOccupation"
            value={formData.willReceiverOccupation}
            onChange={handleChange}
            required
          />
        </div>

        {/* Will Receiver Address */}
        <div className="form-group">
          <label htmlFor="willReceiverAddress">Will Receiver Address:</label>
          <input
            type="text"
            className="form-control"
            id="willReceiverAddress"
            name="willReceiverAddress"
            value={formData.willReceiverAddress}
            onChange={handleChange}
            required
          />
        </div>

        {/* Will Receiver 2 Name */}
        <div className="form-group">
          <label htmlFor="willReceiver2Name">Will Receiver 2 Name:</label>
          <input
            type="text"
            className="form-control"
            id="willReceiver2Name"
            name="willReceiver2Name"
            value={formData.willReceiver2Name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Will Receiver 2 Age */}
        <div className="form-group">
          <label htmlFor="willReceiver2Age">Will Receiver 2 Age:</label>
          <input
            type="text"
            className="form-control"
            id="willReceiver2Age"
            name="willReceiver2Age"
            value={formData.willReceiver2Age}
            onChange={handleChange}
            required
          />
        </div>

        {/* Will Receiver 2 Religion */}
        <div className="form-group">
          <label htmlFor="willReceiver2Religion">Will Receiver 2 Religion:</label>
          <input
            type="text"
            className="form-control"
            id="willReceiver2Religion"
            name="willReceiver2Religion"
            value={formData.willReceiver2Religion}
            onChange={handleChange}
            required
          />
        </div>

        {/* Will Receiver 2 Occupation */}
        <div className="form-group">
          <label htmlFor="willReceiver2Occupation">Will Receiver 2 Occupation:</label>
          <input
            type="text"
            className="form-control"
            id="willReceiver2Occupation"
            name="willReceiver2Occupation"
            value={formData.willReceiver2Occupation}
            onChange={handleChange}
            required
          />
        </div>

        {/* Will Receiver 2 Address */}
        <div className="form-group">
          <label htmlFor="willReceiver2Address">Will Receiver 2 Address:</label>
          <input
            type="text"
            className="form-control"
            id="willReceiver2Address"
            name="willReceiver2Address"
            value={formData.willReceiver2Address}
            onChange={handleChange}
            required
          />
        </div>

        {/* Will Receiver 3 Name */}
        <div className="form-group">
          <label htmlFor="willReceiver3Name">Will Receiver 3 Name:</label>
          <input
            type="text"
            className="form-control"
            id="willReceiver3Name"
            name="willReceiver3Name"
            value={formData.willReceiver3Name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Will Receiver 3 Age */}
        <div className="form-group">
          <label htmlFor="willReceiver3Age">Will Receiver 3 Age:</label>
          <input
            type="text"
            className="form-control"
            id="willReceiver3Age"
            name="willReceiver3Age"
            value={formData.willReceiver3Age}
            onChange={handleChange}
            required
          />
        </div>

        {/* Will Receiver 3 Religion */}
        <div className="form-group">
          <label htmlFor="willReceiver3Religion">Will Receiver 3 Religion:</label>
          <input
            type="text"
            className="form-control"
            id="willReceiver3Religion"
            name="willReceiver3Religion"
            value={formData.willReceiver3Religion}
            onChange={handleChange}
            required
          />
        </div>

        {/* Will Receiver 3 Occupation */}
        <div className="form-group">
          <label htmlFor="willReceiver3Occupation">Will Receiver 3 Occupation:</label>
          <input
            type="text"
            className="form-control"
            id="willReceiver3Occupation"
            name="willReceiver3Occupation"
            value={formData.willReceiver3Occupation}
            onChange={handleChange}
            required
          />
        </div>

        {/* Will Receiver 3 Address */}
        <div className="form-group">
          <label htmlFor="willReceiver3Address">Will Receiver 3 Address:</label>
          <input
            type="text"
            className="form-control"
            id="willReceiver3Address"
            name="willReceiver3Address"
            value={formData.willReceiver3Address}
            onChange={handleChange}
            required
          />
        </div>

        {/* User's Wife */}
        <div className="form-group">
          <label htmlFor="userWife">User's Wife:</label>
          <input
            type="text"
            className="form-control"
            id="userWife"
            name="userWife"
            value={formData.userWife}
            onChange={handleChange}
            required
          />
        </div>

        {/* Child 1 Name */}
        <div className="form-group">
          <label htmlFor="child1Name">Child 1 Name:</label>
          <input
            type="text"
            className="form-control"
            id="child1Name"
            name="child1Name"
            value={formData.child1Name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Child 2 Name */}
        <div className="form-group">
          <label htmlFor="child2Name">Child 2 Name:</label>
          <input
            type="text"
            className="form-control"
            id="child2Name"
            name="child2Name"
            value={formData.child2Name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Child 3 Name */}
        <div className="form-group">
          <label htmlFor="child3Name">Child 3 Name:</label>
          <input
            type="text"
            className="form-control"
            id="child3Name"
            name="child3Name"
            value={formData.child3Name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Date */}
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        {/* Witness 1 Name */}
        <div className="form-group">
          <label htmlFor="witness1Name">Witness 1 Name:</label>
          <input
            type="text"
            className="form-control"
            id="witness1Name"
            name="witness1Name"
            value={formData.witness1Name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Witness 2 Name */}
        <div className="form-group">
          <label htmlFor="witness2Name">Witness 2 Name:</label>
          <input
            type="text"
            className="form-control"
            id="witness2Name"
            name="witness2Name"
            value={formData.witness2Name}
            onChange={handleChange}
            required
          />
        </div>
        <br/>
        {/* Submit Button */}
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Generate Will</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default WillForm;