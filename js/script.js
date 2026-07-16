

// (Optional) small fade-in animation
window.addEventListener("load", () => {
    document.querySelector(".hero").style.opacity = "1";
});


//navigation hamburger
const hamburger = document.getElementById("hamburger");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active"); // make hamburger turn to X
  overlay.classList.toggle("show");     // show/hide overlay
});



//hero bg
const hero = document.querySelector(".hero");

hero.addEventListener("mousemove", (e) => {
    hero.style.setProperty("--x", e.clientX + "px");
    hero.style.setProperty("--y", e.clientY + "px");
});




const toggleBtn = document.querySelector('.contact-toggle');
const sidebar = document.querySelector('.sidebar-contact');
const closeBtn = document.querySelector('.close-btn');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
});

const form = document.getElementById('sidebarForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Message sent! Thanks for reaching out.");
  form.reset();
  sidebar.classList.remove('active');
});

