function loadPartial(id, url) {
  fetch(url)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
}

document.addEventListener("DOMContentLoaded", function() {
  loadPartial("navbar-container", "/partials/navbar.html");
  loadPartial("footer-container", "/partials/footer.html");
});

/* date updated */
document.getElementById("year").textContent = new Date().getFullYear();
