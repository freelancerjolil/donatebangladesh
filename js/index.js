function goToPage() {
  window.location.href = "blog.html";
}

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("bg-white", "shadow-lg", "backdrop-blur-md");
    header.classList.remove("bg-transparent", "backdrop-blur-0");
  } else {
    header.classList.add("bg-transparent", "backdrop-blur-0");
    header.classList.remove("bg-white", "shadow-lg", "backdrop-blur-md");
  }
});

const donateNowButton = document.getElementById("donate-now");

donateNowButton.addEventListener("click", function () {
  const inputbox = parseFloat(document.getElementById("input-box1").value);
  const donateBox1 = document.getElementById("donate-box-1");
  donateBox1.innerText = inputbox.toFixed(2);
});

const donateBtn2 = document.getElementById("donateBtn2");
donateBtn2.addEventListener("click", function () {
  const inputbox = parseFloat(document.getElementById("input-box2").value);
  const donateBox2 = document.getElementById("donate-box-2");
  donateBox2.innerText = inputbox.toFixed(2);
});

const donateBtn3 = document.getElementById("donateBtn3");
donateBtn3.addEventListener("click", function () {
  const inputbox = parseFloat(document.getElementById("input-box3").value);
  const donateBox3 = document.getElementById("donate-box-3");
  donateBox3.innerText = inputbox.toFixed(2);
});

const historyTab = document.getElementById("history-tab");
const donationTab = document.getElementById("donation-tab");
historyTab.addEventListener("click", function () {
  historyTab.classList.add("bg-color-primary");
  donationTab.classList.remove("bg-color-primary");

  document.getElementById("gayeb-ul").classList.add("hidden");
});

donationTab.addEventListener("click", function () {
  donationTab.classList.add("bg-color-primary");
  historyTab.classList.remove("bg-color-primary");
  document.getElementById("gayeb-ul").classList.remove("hidden");
});
