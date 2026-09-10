document.getElementById('itemForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const errors = {};
  
    const clientCode = document.getElementById('clientCode').value.trim();
    const clientName = document.getElementById('clientName').value.trim();
    const itemCode = document.getElementById('itemCode').value.trim();
    const itemName = document.getElementById('itemName').value.trim();
  
    const codeRegex = /^[A-Za-z0-9\s-]+$/;
    const nameRegex = /^[A-Za-z\s-]+$/;
    const itemRegex = /^[A-Za-z0-9\s-]+$/;
  
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
  
    if (!clientCode || !codeRegex.test(clientCode)) {
      errors.clientCode = 'Client Code is required and must contain only letters, numbers, spaces, or hyphens.';
    }
  
    if (!clientName || !nameRegex.test(clientName)) {
      errors.clientName = 'Client Name is required and must contain only letters, spaces, or hyphens.';
    }
  
    if (!itemCode || !itemRegex.test(itemCode)) {
      errors.itemCode = 'Item Code is required and must contain only letters, numbers, spaces, or hyphens.';
    }
  
    if (!itemName || !itemRegex.test(itemName)) {
      errors.itemName = 'Item Name is required and must contain only letters, numbers, spaces, or hyphens.';
    }
  
    if (Object.keys(errors).length > 0) {
      for (let key in errors) {
        const errorEl = document.getElementById(`${key}Error`);
        if (errorEl) errorEl.textContent = errors[key];
      }
    } else {
      alert("Form submitted successfully!");
      document.getElementById('itemForm').reset(); 
    }
  });
  