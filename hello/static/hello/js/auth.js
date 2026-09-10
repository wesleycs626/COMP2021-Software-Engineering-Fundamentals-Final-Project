(function() {
  var currentUser = sessionStorage.getItem("username");
  var admins = ['admin1', 'admin2'];

  if (!currentUser) {
    alert("Please login first.");
    window.location.href = "/login/";
    return;
  }

  if (!admins.includes(currentUser)) {
    document.querySelectorAll('.admin-only').forEach(el => el.style.display = 'none');
  }

  var logoutBtn = document.getElementById("logout-btn");
  if(logoutBtn) {
    logoutBtn.addEventListener("click", function(e) {
      e.preventDefault();
      if(confirm("Are you sure you want to log out?")) {
        sessionStorage.removeItem("username");
        window.location.href = "/login/";
      }
    });
  }
})();
