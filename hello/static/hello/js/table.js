function addNewItem(table, itemCode, itemName) {
    const rowLength = table.rows.length;
    const row = table.insertRow(rowLength);
  
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
  
    cell1.innerHTML = rowLength; 
    cell2.innerHTML = itemCode.value;
    cell3.innerHTML = itemName.value;
  
    itemCode.value = "";
    itemName.value = "";
  }