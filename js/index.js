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

// Donate Button 1
let mainBalance = document.getElementById("main-balance");
const donateModal = document.getElementById("donateModal");
const donateNowButton = document.getElementById("donate-now");
let totalDonation1 = 0;
donateNowButton.addEventListener("click", function () {
  const inputbox1 = parseFloat(document.getElementById("input-box1").value);
  if (!isNaN(inputbox1) && inputbox1 > 0) {
    document.getElementById(
      "modalDonationAmount"
    ).innerText = `Amount: $${inputbox1.toFixed(2)}`;
    donateModal.showModal();

    document.getElementById("confirmDonation").onclick = function () {
      totalDonation1 += inputbox1;
      const mainAmount = parseFloat(mainBalance.innerText);
      mainBalance.innerText = (mainAmount - inputbox1).toFixed(2);
      const donateBox1 = document.getElementById("donate-box-1");
      donateBox1.innerText = totalDonation1.toFixed(2);
      donateModal.close();
    };
  } else {
    alert("Please enter a valid number greater than 0");
  }
  document.getElementById("input-box1").value = "";
});

// Donate Button 2
const donateBtn2 = document.getElementById("donateBtn2");
let totalDonation2 = 0;
donateBtn2.addEventListener("click", function () {
  const inputbox2 = parseFloat(document.getElementById("input-box2").value);
  if (!isNaN(inputbox2) && inputbox2 > 0) {
    document.getElementById(
      "modalDonationAmount"
    ).innerText = `Amount: $${inputbox2.toFixed(2)}`;
    donateModal.showModal();
    document.getElementById("confirmDonation").onclick = function () {
      totalDonation2 += inputbox2;
      const mainAmount = parseFloat(mainBalance.innerText);
      mainBalance.innerText = (mainAmount - inputbox2).toFixed(2);
      const donateBox2 = document.getElementById("donate-box-2");
      donateBox2.innerText = totalDonation2.toFixed(2);
      donateModal.close();
    };
  } else {
    alert("Please enter a valid number");
  }
  document.getElementById("input-box2").value = "";
});
const donateBtn3 = document.getElementById("donateBtn3");
let totalDonation3 = 0;

donateBtn3.addEventListener("click", function () {
  const inputbox3 = parseFloat(document.getElementById("input-box3").value);
  if (!isNaN(inputbox3) && inputbox3 > 0) {
    document.getElementById(
      "modalDonationAmount"
    ).innerText = `Amount: $${inputbox3.toFixed(2)}`;
    donateModal.showModal();
    document.getElementById("confirmDonation").onclick = function () {
      totalDonation3 += inputbox3;
      const mainAmount = parseFloat(mainBalance.innerText);
      mainBalance.innerText = (mainAmount - inputbox3).toFixed(2);
      const donateBox3 = document.getElementById("donate-box-3");
      donateBox3.innerText = totalDonation3.toFixed(2);
      donateModal.close();
    };
  } else {
    alert("Please enter a valid number");
  }
  document.getElementById("input-box3").value = "";
});
// Toogle Button Function
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
