$(function() {
  $("#navbar-container").load("partials/navbar.html");
  $("#footer-container").load("partials/footer.html");
});

/* date updated */
document.getElementById("year").textContent = new Date().getFullYear();
