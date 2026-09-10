function populateStockData() {
    const stocktakingNumber = document.getElementById("stocktaking-number").value;
    const tableBody = document.getElementById("stock-table-body");
  
    tableBody.innerHTML = "";
  
    if (stocktakingNumber === "123") { 
      const stockData = [
        { no: 1, code: "A4-001", name: "A4 paper carton", quantity: 55, unit: "Carton", location: "Rack A1" },
        { no: 2, code: "BPL-500", name: "500ml plastic bottle", quantity: 250, unit: "Pcs", location: "Shelf B2" },
        { no: 3, code: "PLT-K001", name: "Wooden pallet", quantity: 15, unit: "Unit", location: "Floor Storage" }
      ];
  
      stockData.forEach(item => {
        const row = document.createElement("tr");
        row.style.backgroundColor = "white";
  
        row.innerHTML = `
          <td>${item.no}</td>
          <td>${item.code}</td>
          <td>${item.name}</td>
          <td>${item.quantity}</td>
          <td>${item.unit}</td>
          <td>${item.location}</td>
        `;
  
        tableBody.appendChild(row);
      });
    }
  }
  