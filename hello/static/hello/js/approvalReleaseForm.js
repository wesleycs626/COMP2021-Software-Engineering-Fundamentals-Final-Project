function fillData() {
  const releaseFormNumber = document.getElementById("releaseFormNumber").value;
  if (releaseFormNumber === "123") {
      document.getElementById("warehouseLocation").value = "Surabaya";
      document.getElementById("clientName").value = "Johnson";
      document.getElementById("clientAddress").value = "Jalan Tunjungan No. 1";
      document.getElementById("date").valueAsDate = new Date();

      const stockData = [
          { no: 1, code: "A4-001", name: "A4 paper carton", quantity: 55, unit: "Carton", location: "Rack A1" },
          { no: 2, code: "BPL-500", name: "500ml plastic bottle", quantity: 250, unit: "Pcs", location: "Shelf B2" },
          { no: 3, code: "PLT-K001", name: "Wooden pallet", quantity: 15, unit: "Unit", location: "Floor Storage" }
      ];

      const tbody = document.querySelector("#goodsTable tbody");
      tbody.innerHTML = "";
      stockData.forEach(item => {
          const row = `
              <tr>
                  <td>${item.no}</td>
                  <td>${item.code}</td>
                  <td>${item.name}</td>
                  <td>${item.quantity}</td>
                  <td>${item.unit}</td>
                  <td>${item.location}</td>
              </tr>
          `;
          tbody.insertAdjacentHTML("beforeend", row);
      });
  } else {
      alert("Data Not Found.");
  }
}