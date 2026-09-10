function checkEmptyInput(input) {
  const label = input.previousElementSibling;
  const parent = input.parentElement;
  let errorMsg = parent.querySelector(".error-message");

  if (!errorMsg) {
    errorMsg = document.createElement("div");
    errorMsg.className = "error-message";
    parent.appendChild(errorMsg);
  }

  const fieldName = input.getAttribute("name")?.toLowerCase();

  if (input.value.trim() === "") {
    input.classList.add("input-error");
    if (label) label.classList.add("label-error");

    switch (fieldName) {
      case "warehouse-location":
        errorMsg.textContent = "Please fill out warehouse location";
        break;
      case "client-name":
        errorMsg.textContent = "Please fill out client name";
        break;
      case "client-address":
        errorMsg.textContent = "Please fill out client address";
        break;
      case "receipt-by":
        errorMsg.textContent = "Please fill out receipt by";
        break;
      default:
        errorMsg.textContent = "* This field is required";
    }

    return false;
  } else {
    input.classList.remove("input-error");
    if (label) label.classList.remove("label-error");
    errorMsg.textContent = "";
    return true;
  }
}
