// import React, { useState } from 'react';
// import axios from 'axios';

// function WillForm() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   sonOf: '',
  //   residence: '',
  //   age: '',
  //   religion: '',
  //   occupation: '',
  //   willReceiverName: '',
  //   willReceiverAddress: '',
  //   willReceiverAge: '',
  //   willReceiverReligion: '',
  //   willReceiverOccupation: '',
  //   willReceiver2Name: '',
  //   willReceiver2Address: '',
  //   willReceiver2Age: '',
  //   willReceiver2Religion: '',
  //   willReceiver2Occupation: '',
  //   willReceiver3Name: '',
  //   willReceiver3Address: '',
  //   willReceiver3Age: '',
  //   willReceiver3Religion: '',
  //   willReceiver3Occupation: '',

  //   familyMembers: '',
  //   property: '',

  //   userWife: '',

  //   child1Name: '',
  //   child2Name: '',
  //   child3Name: '',

  //   date: '',
    
  //   witness1Name: '',
  //   witness2Name: '',
  // });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Send the form data to the backend API
//       const response = await axios.post('http://localhost:5000/generate_will', formData, {
//         responseType: 'blob', // Receive a binary response (e.g., a document file)
//       });

//       // Create a blob URL to display the document (optional)
//       const blob = new Blob([response.data], {
//         type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
//       });
//       const url = window.URL.createObjectURL(blob);

//       // Create an anchor element for downloading the file
//       const a = document.createElement('a');
//       a.href = url;
//       a.download = 'filled_legal_document.docx';
//       document.body.appendChild(a);
//       a.click();
//       document.body.removeChild(a);

//       // Revoke the blob URL to release resources
//       window.URL.revokeObjectURL(url);
//     } catch (error) {
//       console.error('Error generating the will document:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Last Will and Testament</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//         </label><br /><br />
//         <label>
//           Son Of:
//           <input type="text" name="sonOf" value={formData.sonOf} onChange={handleChange} required />
//         </label><br /><br />
//         <label>
//           Residence:
//           <input type="text" name="residence" value={formData.residence} onChange={handleChange} required />
//         </label><br /><br />
//         <label>
//           Age:
//           <input type="text" name="age" value={formData.age} onChange={handleChange} required />
//         </label><br /><br />
//         <label>
//           Religion:
//           <input type="text" name="religion" value={formData.religion} onChange={handleChange} required />
//         </label><br /><br />
//         <label>
//           Occupation:
//           <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} required />
//         </label><br /><br />
//         <label>
//           Property:
//           <textarea name="property" value={formData.property} onChange={handleChange} required />
//         </label><br /><br />
//         <label>
//           Family Members:
//           <textarea name="familyMembers" value={formData.familyMembers} onChange={handleChange} required />
//         </label><br /><br />
//         <label>
//           Will Receiver Name:
//           <input type="text" name="willReceiverName" value={formData.willReceiverName} onChange={handleChange} required />
//         </label><br /><br />
//         <label>
//           Will Receiver Age:
//           <input type="text" name="willReceiverAge" value={formData.willReceiverAge} onChange={handleChange} required />
//         </label><br /><br />
//         <label>
//           Will Receiver Religion:
//           <input type="text" name="willReceiverReligion" value={formData.willReceiverReligion} onChange={handleChange} required />
//         </label><br /><br />
//         <label>
//           Will Receiver Occupation:
//           <input type="text" name="willReceiverOccupation" value={formData.willReceiverOccupation} onChange={handleChange} required />
//         </label><br /><br />
//         <label>
//           Will Receiver Address:
//           <input type="text" name="willReceiverAddress" value={formData.willReceiverAddress} onChange={handleChange} required />
//         </label><br /><br />
//         <label>
//           Will Receiver 2 Name:
//           <input type="text" name="willReceiver2Name" value={formData.willReceiver2Name} onChange={handleChange} required />
//         </label><br /><br />
//         <label>
//           Will Receiver 2 Age:
//           <input type="text" name="willReceiver2Age" value={formData.willReceiver2Age} onChange={handleChange} required />
//         </label><br /><br />
//         <label>
//           Will Receiver 2 Religion:
//           <input type="text" name="willReceiver2Religion" value={formData.willReceiver2Religion} onChange={handleChange} required />
//         </label><br /><br />
//         <label>
//           Will Receiver 2 Occupation:
//           <input type="text" name="willReceiver2Occupation" value={formData.willReceiver2Occupation} onChange={handleChange} required />
//         </label><br /><br />
//         <label>
//           Will Receiver 2 Address:
//           <input type="text" name="willReceiver2Address" value={formData.willReceiver2Address} onChange={handleChange} required />
//         </label><br /><br />
//         <label>
//           Will Receiver 3 Name:
//           <input type="text" name="willReceiver3Name" value={formData.willReceiver3Name} onChange={handleChange} required />
//         </label><br /><br />
//         <label>
//           Will Receiver 3 Age:
//           <input type="text" name="willReceiver3Age" value={formData.willReceiver3Age} onChange={handleChange} required />
//         </label><br /><br />
//         <label>
//           Will Receiver 3 Religion:
//           <input type="text" name="willReceiver3Religion" value={formData.willReceiver3Religion} onChange={handleChange} required />
//         </label><br /><br />
//         <label>
//           Will Receiver 3 Occupation:
//           <input type="text" name="willReceiver3Occupation" value={formData.willReceiver3Occupation} onChange={handleChange} required />
//         </label><br /><br />
//         <label>
//           Will Receiver 3 Address:
//           <input type="text" name="willReceiver3Address" value={formData.willReceiver3Address} onChange={handleChange} required />
//         </label><br /><br />
//         <label>
//           User's Wife:
//           <input type="text" name="userWife" value={formData.userWife} onChange={handleChange} required />
//         </label><br /><br />
//         <label>
//           Child 1 Name:
//           <input type="text" name="child1Name" value={formData.child1Name} onChange={handleChange} required />
//         </label><br /><br />
//         <label>
//           Child 2 Name:
//           <input type="text" name="child2Name" value={formData.child2Name} onChange={handleChange} required />
//         </label><br /><br />
//         <label>
//           Child 3 Name:
//           <input type="text" name="child3Name" value={formData.child3Name} onChange={handleChange} required />
//         </label><br /><br />

//         <label>
//           Date:
//           <input type="date" name="date" value={formData.date} onChange={handleChange} required />
//         </label><br /><br />

//         <label>
//           Witness 1 Name:
//           <input type="text" name="witness1Name" value={formData.witness1Name} onChange={handleChange} required />
//         </label><br /><br />
//         <label>
//           Witness 2 Name:
//           <input type="text" name="witness2Name" value={formData.witness2Name} onChange={handleChange} required />
//         </label><br /><br />
//         <button type="submit">Generate Will</button>
//       </form>
//     </div>
//   );
// }

// export default WillForm;

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
    <div className="container">
      <h2 className="text-center">Last Will and Testament</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
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
          </div>
          <div className="col-md-6">
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
          </div>
        </div>

        {/* Repeat the above structure for other input fields */}
        <div className="row">
          <div className="col-md-6">
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
          </div>
          <div className="col-md-6">
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
          </div>
        </div>
{/* next line */}
        <div className="row">
          <div className="col-md-6">
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
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="Occupation">Occupation:</label>
              <input
                type="text"
                className="form-control"
                id="occupation"
                name="ccupation"
                value={formData.occupation}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
{/* next line */}
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="Property">Property:</label>
              <input
                type="text"
                className="form-control"
                id="property"
                name="property"
                value={formData.property}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="Family Members">Family Members:</label>
              <input
                type="text"
                className="form-control"
                id="familyMembers"
                name="familyMembers"
                value={formData.familyMembers}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
{/* next line */}
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="Property">Property:</label>
              <input
                type="text"
                className="form-control"
                id="property"
                name="property"
                value={formData.property}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="Family Members">Family Members:</label>
              <input
                type="text"
                className="form-control"
                id="familyMembers"
                name="familyMembers"
                value={formData.familyMembers}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
{/* next line */}
        <div className="row">
          <div className="col-md-6">
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
          </div>
          <div className="col-md-6">
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
          </div>
        </div>
{/* next line */}
        <div className="row">
          <div className="col-md-6">
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
          </div>
          <div className="col-md-6">
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
          </div>
        </div>
{/* next line */}
        <div className="row">
          <div className="col-md-6">
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
          </div>
          <div className="col-md-6">
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
          </div>
        </div>
{/* next line */}
        <div className="row">
          <div className="col-md-6">
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
          </div>
          <div className="col-md-6">
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
          </div>
        </div>
{/* next line */}
        <div className="row">
          <div className="col-md-6">
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
          </div>
          <div className="col-md-6">
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
          </div>
        </div>
{/* next line */}
        <div className="row">
          <div className="col-md-6">
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
          </div>
          <div className="col-md-6">
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
          </div>
        </div>
{/* next line  */}
        {/* Repeat the above structure for other input fields */}
        
        <button type="submit" className="btn btn-primary">Generate Will</button>
      </form>
    </div>
  );
}

export default WillForm;
