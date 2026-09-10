function addNewItem(table, itemCode, itemName) {
    const rowLength = table.rows.length;
    const row = table.insertRow(rowLength);
  
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
  
    cell1.innerHTML = rowLength +1;
    cell2.innerHTML = itemCode.value;
    cell3.innerHTML = itemName.value;
  
    itemCode.value = "";
    itemName.value = "";
  }
  
  function validateAndAddItem() {
    const clientCode = document.getElementById("clientCode");
    const clientName = document.getElementById("clientName");
    const itemCode = document.getElementById("itemCode");
    const itemName = document.getElementById("itemName");
    const itemUnit = document.getElementById("itemUnit");
  
    const fields = [
      { input: clientCode, name: "Client Code" },
      { input: clientName, name: "Client Name", pattern: /^[A-Za-z\s-]+$/ },
      { input: itemCode, name: "Item Code" },
      { input: itemName, name: "Item Name" },
      { input: itemUnit, name: "Item Unit" }
    ];
  
    let isValid = true;
  
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    fields.forEach(f => f.input.classList.remove("error-input"));
  
    for (let field of fields) {
      const value = field.input.value.trim();
  
      if (!value) {
        field.input.classList.add("error-input");
        document.getElementById(`${field.input.id}Error`).textContent = `${field.name} is required.`;
        isValid = false;
        continue;
      }
  
      if (field.pattern && !field.pattern.test(value)) {
        field.input.classList.add("error-input");
        document.getElementById(`${field.input.id}Error`).textContent = `${field.name} format is invalid.`;
        isValid = false;
      }
    }
  
    if (isValid) {
      addNewItem(document.getElementById("goodsTable").getElementsByTagName("tbody")[0], itemCode, itemName);
    }
  }