document.getElementById('clientForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const errors = {};
  
    const clientCode = document.getElementById('clientCode').value.trim();
    const clientName = document.getElementById('clientName').value.trim();
    const clientAddress = document.getElementById('clientAddress').value.trim();
    const contactPerson = document.getElementById('contactPerson').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const email = document.getElementById('email').value.trim();
  
    const nameRegex = /^[A-Za-z\s-]+$/;
    const addressRegex = /^[A-Za-z0-9\s-]+$/;
    const contactPhoneRegex = /^62\d{10}$/;
    const emailRegex = /^\S+@\S+\.\S+$/;
  
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
  
    if (!clientCode) {
      errors.clientCode = "Client Code is required.";
    }
  
    if (!clientName || !nameRegex.test(clientName)) {
      errors.clientName = "Client Name is required and must contain only letters, spaces, and hyphens.";
    }
  
    if (!clientAddress || !addressRegex.test(clientAddress)) {
      errors.clientAddress = "Client Address is required and must be alphanumeric with spaces or hyphens.";
    }
  
    if (!contactPerson || !nameRegex.test(contactPerson)) {
      errors.contactPerson = "Contact Person is required and must contain only letters, spaces, and hyphens.";
    }
  
    if (!phoneNumber || !contactPhoneRegex.test(phoneNumber)) {
      errors.phoneNumber = "Phone Number is required and must start with 62 and be 12 digits total.";
    }
  
    if (!email || !emailRegex.test(email)) {
      errors.email = "Valid Email is required.";
    }
  
    if (Object.keys(errors).length > 0) {
        for (let key in errors) {
          document.getElementById(`${key}Error`).textContent = errors[key];
        }
      } else {
        alert("Form submitted successfully!");
  
      }
    });