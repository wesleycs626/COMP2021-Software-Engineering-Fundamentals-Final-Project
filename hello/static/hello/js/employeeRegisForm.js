document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const errors = {};
  
    const fullName = document.getElementById('fullName').value.trim();
    const address = document.getElementById('address').value.trim();
    const contactPhone = document.getElementById('contactPhone').value.trim();
    const mobilePhone = document.getElementById('mobilePhone').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
  
    const nameRegex = /^[A-Za-z\s-]+$/;
    const addressRegex = /^[A-Za-z0-9\s-]+$/;
    const contactPhoneRegex = /^62\d{10}$/;
    const mobilePhoneRegex = /^62\d{13}$/;
    const passwordRegex = /^(?=.[A-Za-z])(?=.\d)(?=.[!@#$%^&()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
  
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
  
    if (!fullName || !nameRegex.test(fullName)) {
      errors.fullName = "Full name is required and must contain only letters, spaces, and hyphens.";
    }
  
    if (!address || !addressRegex.test(address)) {
      errors.address = "Address is required and must be alphanumeric with spaces or hyphens.";
    }
  
    if (!contactPhone && !contactPhoneRegex.test(contactPhone)) {
      errors.contactPhone = "Contact phone must start with 62 and be 12 digits total.";
    }
  
    if (!mobilePhone || !mobilePhoneRegex.test(mobilePhone)) {
      errors.mobilePhone = "Mobile phone is required and must start with 62 and be 15 digits.";
    }
  
    if (!dob) {
      errors.dob = "Invalid date."
    }
  
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = "Valid email is required.";
    }
  
    if (!password || !passwordRegex.test(password)) {
      errors.password = "Password must be at least 8 characters, include letters, numbers and symbols.";
    }
  
    if (Object.keys(errors).length > 0) {
      for (let key in errors) {
        document.getElementById(`${key}Error`).textContent = errors[key];
      }
    } else {
      alert("Form submitted successfully!");
    }
  });