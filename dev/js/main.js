$(function() {
  $("#navbar-container").load("partials/navbar.html");
  $("#footer-container").load("partials/footer.html");
    $("#navbar-container-fr").load("../partials/navbar-fr.html");
  $("#footer-container-fr").load("../partials/footer-fr.html");
});

/* date updated */
document.getElementById("year").textContent = new Date().getFullYear();

