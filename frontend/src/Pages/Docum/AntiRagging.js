import React, { useState } from 'react';
import axios from 'axios';

function ProformaForm() {
  const [formData, setFormData] = useState({
    studentFullName: '',
    admissionNo: '',
    parentName: '',
    instituteName: '',
    declarationDay: '',
    declarationMonth: '',
    declarationYear: '',
    parentGuardianFullName: '',
    parentAddress: '',
    parentMobileNo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

//   same as willpower, see if changes
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the form data to the backend API
      const response = await axios.post('http://localhost:5000/submit_proforma', formData, {
        responseType: 'blob', // Receive a binary response (e.g., a document file)
      });

      // Create a blob URL to display the document (optional)
      const blob = new Blob([response.data], {
        type: 'application/pdf', // Change the MIME type as needed
      });
      const url = window.URL.createObjectURL(blob);

      // Create an anchor element for downloading the file
      const a = document.createElement('a');
      a.href = url;
      a.download = 'proforma.pdf'; // Change the file name as needed
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      // Revoke the blob URL to release resources
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error submitting the proforma:', error);
    }
  };

  return (
    <div>
      <h2>Proforma Submission</h2>
      <form onSubmit={handleSubmit}>
        {/* Student's Full Name */}
        <div className="form-group">
          <label htmlFor="studentFullName">Student's Full Name:</label>
          <input
            type="text"
            className="form-control"
            id="studentFullName"
            name="studentFullName"
            value={formData.studentFullName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Admission Number */}
        <div className="form-group">
          <label htmlFor="admissionNo">Admission Number:</label>
          <input
            type="text"
            className="form-control"
            id="admissionNo"
            name="admissionNo"
            value={formData.admissionNo}
            onChange={handleChange}
            required
          />
        </div>

        {/* Parent's Name */}
        <div className="form-group">
          <label htmlFor="parentName">Parent's Name:</label>
          <input
            type="text"
            className="form-control"
            id="parentName"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Institute Name */}
        <div className="form-group">
          <label htmlFor="instituteName">Institute Name:</label>
          <input
            type="text"
            className="form-control"
            id="instituteName"
            name="instituteName"
            value={formData.instituteName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Declaration Date */}
        <div className="form-group">
          <label>Date of Declaration:</label>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Day"
                name="declarationDay"
                value={formData.declarationDay}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Month"
                name="declarationMonth"
                value={formData.declarationMonth}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Year"
                name="declarationYear"
                value={formData.declarationYear}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Parent/Guardian's Full Name */}
        <div className="form-group">
          <label htmlFor="parentGuardianFullName">Parent/Guardian's Full Name:</label>
          <input
            type="text"
            className="form-control"
            id="parentGuardianFullName"
            name="parentGuardianFullName"
            value={formData.parentGuardianFullName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Parent Address */}
        <div className="form-group">
          <label htmlFor="parentAddress">Parent Address:</label>
          <input
            type="text"
            className="form-control"
            id="parentAddress"
            name="parentAddress"
            value={formData.parentAddress}
            onChange={handleChange}
            required
          />
        </div>

        {/* Parent Mobile No */}
        <div className="form-group">
          <label htmlFor="parentMobileNo">Parent Mobile No:</label>
          <input
            type="text"
            className="form-control"
            id="parentMobileNo"
            name="parentMobileNo"
            value={formData.parentMobileNo}
            onChange={handleChange}
            required
          />
        </div>
        <br/>

        {/* Submit Button */}
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Submit Proforma</button>
        </div>
      </form>
    </div>
  );
}

export default ProformaForm;
