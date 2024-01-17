
import React, { useState,useRef } from 'react';

import axios from 'axios';
import './caselogin.css';

const Caselogin = () => {
  const [formData, setFormData] = useState({
    dateOfLogin:'',
    employeeIdOfCaseOwner: '',
    employeeName: '',
    managerName: '',
    employementType: '',
    branchName: '',
    customerName: '',
    customerContact: '',
    mailId: '',
    customerPan: '',
    customerDateOfBirth: '',
    customerPermanentAddress: '',
    officeAddressWithPin: '',
    state: '',
    city: '',
    customerOccupation: '',
    requiredLoanType: '',
    requiredLoanAmount: '',
    uploadFiles: '',
    latestCIBILScore: '',
    bankingPassAndOtherDocPass: '',
    toBeLoggedInFromWhichLender: '',
    remarks: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      uploadFiles: e.target.files,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      const fileFormData = new FormData();
      for (let i = 0; i < formData.uploadFiles.length; i++) {
        fileFormData.append('files', formData.uploadFiles[i]); // Make sure the key is 'files'
      }
  
      // Append other form data to the FormData if needed
      
      fileFormData.append('dateOfLogin', formData.dateOfLogin);
    fileFormData.append('employeeIdOfCaseOwner', formData.employeeIdOfCaseOwner);
    fileFormData.append('employeeName', formData.employeeName);
    fileFormData.append('managerName', formData.managerName);
    fileFormData.append('employementType', formData.employementType);
    fileFormData.append('branchName', formData.branchName);
    fileFormData.append('customerName', formData.customerName);
    fileFormData.append('customerContact', formData.customerContact);
    fileFormData.append('mailId', formData.mailId);
    fileFormData.append('customerPan', formData.customerPan);
    fileFormData.append('customerDateOfBirth', formData.customerDateOfBirth);
    fileFormData.append('customerPermanentAddress', formData.customerPermanentAddress);
    fileFormData.append('officeAddressWithPin', formData.officeAddressWithPin);
    fileFormData.append('state', formData.state);
    fileFormData.append('city', formData.city);
    fileFormData.append('customerOccupation', formData.customerOccupation);
    fileFormData.append('requiredLoanType', formData.requiredLoanType);
    fileFormData.append('requiredLoanAmount', formData.requiredLoanAmount);
    fileFormData.append('latestCIBILScore', formData.latestCIBILScore);
    fileFormData.append('bankingPassAndOtherDocPass', formData.bankingPassAndOtherDocPass);
    fileFormData.append('toBeLoggedInFromWhichLender', formData.toBeLoggedInFromWhichLender);
    fileFormData.append('remarks', formData.remarks);
      // ... append other fields similarly
  
      await axios.post('http://localhost:8072/savecaselogin', fileFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Data saved successfully');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  return (
    <>
      <h1>Case Login Form</h1>
      {/* <form className='loanApplicationForm'/> */}
      <form className='loanApplicationForm' onSubmit={handleSubmit} encType='multipart/form-data'>
        <div className='column'>
        <div className="form-group">
            <label>
              Date Of Login:
              <input
                type="date"
                name="dateOfLogin"
                value={formData.dateOfLogin}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Employee Id Of Case Owner:
              <input
                type="text"
                name="employeeIdOfCaseOwner"
                value={formData.employeeIdOfCaseOwner}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Employee Name:
              <input
                type="text"
                name="employeeName"
                value={formData.employeeName}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Manager Name:
              <input
                type="text"
                name="managerName"
                value={formData.managerName}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              EmployementType:
              <input
                type="text"
                name="employementType"
                value={formData.employementType}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <div className='column'>
         
        <div className="form-group">
          <label>
            Upload Documents:
            <input
              type="file"
              name="uploadFiles"
              onChange={handleFileChange}
              multiple
            />
          </label>
        </div>

        {/* Add other form fields here */}

        <div className="form-group">
          <label>
            BranchName:
            <input
              type="text"
              name="branchName"
              value={formData.branchName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
            <label>
        CustomerName:
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
          />
        </label>
        </div>
        <div className="form-group">
        <label>
        CustomerContact:
          <input
            type="text"
            name="customerContact"
            value={formData.customerContact}
            onChange={handleChange}
          />
        </label>
        </div>
        </div>
        <div className='column'>
            <div className='form-group'>
            <label>
        Customer Mail:
          <input
            type="email"
            name="mailId"
            value={formData. mailId}
            onChange={handleChange}
          />
        </label>
            </div>
            <div className='form-group'>
            <label>
        CustomerPan:
          <input
            type="text"
            name="customerPan"
            value={formData. customerPan}
            onChange={handleChange}
          />
        </label>

        </div>
        <div className='form-group'>
        <label>
        CustomerPermanentAddress:
          <input
            type="text"
            name="customerPermanentAddress"
            value={formData. customerPermanentAddress}
            onChange={handleChange}
          />
        </label>
        </div>
        <div className='form-group'>
        <label>
        OfficeAddressWithPin:
          <input
            type="text"
            name="officeAddressWithPin"
            value={formData. officeAddressWithPin}
            onChange={handleChange}
          />
        </label>
        </div>
        </div>
        <div className='column'>
            <div className='form-group'>
            <label>
           State:
          <input
            type="text"
            name="state"
            value={formData. state}
            onChange={handleChange}
          />
        </label>
            </div>
            <div className='form-group'>
            <label>
        City:
          <input
            type="text"
            name="city"
            value={formData. city}
            onChange={handleChange}
          />
        </label>
            </div>
         <div className='form-group'>
         <label>
        CustomerOccupation:
          <input
            type="text"
            name="customerOccupation"
            value={formData. customerOccupation}
            onChange={handleChange}
          />
        </label>
        </div>
        <div className='form-group'>
         <label>
         CustomerDateOfBirth:
          <input
            type="date"
            name="customerDateOfBirth"
            value={formData. customerDateOfBirth}
            onChange={handleChange}
          />
        </label>
        </div>
        <label>
        RequiredLoanType:
          <input
            type="text"
            name="requiredLoanType"
            value={formData. requiredLoanType}
            onChange={handleChange}
          />
        </label>
        </div>
        <div className='column'>
            <div className='form-group'>
            <label>
        RequiredLoanAmount:
          <input
            type="text"
            name="requiredLoanAmount"
            value={formData. requiredLoanAmount}
            onChange={handleChange}
          />
        </label>
     </div>
     <div className='form-group'>
     <label>
        LatestCIBILScore:
          <input
            type="text"
            name="latestCIBILScore"
            value={formData. latestCIBILScore}
            onChange={handleChange}
          />
        </label>
        </div>
        <div className='form-group'>
        <label>
        BankingPassAndOtherDocPass:
          <input
            type="text"
            name="bankingPassAndOtherDocPass"
            value={formData. bankingPassAndOtherDocPass}
            onChange={handleChange}
          />
        </label>
        </div>
        <div className="form-group">
        <label>
        ToBeLoggedInFromWhichLender:
          <input
            type="text"
            name="toBeLoggedInFromWhichLender"
            value={formData. toBeLoggedInFromWhichLender}
            onChange={handleChange}
          />
          </label>
        </div>
        <div className="form-group">
        <label>
        Remarks:
          <input
            type="text"
            name="remarks"
            value={formData. remarks}
            onChange={handleChange}
          />
        </label>
        </div>
        </div>
        
    
        <button type="submit">Submit</button>
      </form>
      </>
   
  );
};

export default Caselogin;
