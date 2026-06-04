// Create overlay element dynamically
const overlay = document.createElement("div");
overlay.classList.add("nav-overlay");
overlay.onclick = toggleMenu;
document.body.appendChild(overlay);

function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("open");
  overlay.classList.toggle("active");

  // Prevent body from scrolling when menu is open
  document.body.style.overflow = navLinks.classList.contains("open")
    ? "hidden"
    : "";
}
