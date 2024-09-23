function goToPage() {
  window.location.href = "faq.html"; // Replace with the HTML page you want to navigate to
}

// Get the navbar
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.classList.add("bg-white", "shadow-lg", "backdrop-blur-md");
    header.classList.remove("bg-transparent", "backdrop-blur-0");
  } else {
    header.classList.add("bg-transparent", "backdrop-blur-0");
    header.classList.remove("bg-white", "shadow-lg", "backdrop-blur-md");
  }
});
