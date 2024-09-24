function goToPage() {
  window.location.href = "blog.html";
}

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("bg-white", "shadow-lg", "backdrop-blur-md");
    header.classList.remove("bg-transparent-30", "backdrop-blur-0");
  } else {
    header.classList.add("bg-transparent", "backdrop-blur-0");
    header.classList.remove("bg-white", "shadow-lg", "backdrop-blur-md");
  }
});

// Main Balance and Modal
let mainBalance = document.getElementById("main-balance");
const congratulationsModal = document.getElementById("my_modal_1");
const modalDonationAmount = document.getElementById("modalDonationAmount");

// Function to add history entry
const historyList = document.getElementById("history-list");

function addHistoryEntry(donationBoxId, amount) {
  const currentDate = new Date().toString();
  let message;
  if (donationBoxId === "donate-box-1") {
    message = `${amount.toFixed(
      2
    )} Taka is Donated for famine-2024 at Noakhali, Bangladesh`;
  } else if (donationBoxId === "donate-box-2") {
    message = `${amount.toFixed(
      2
    )} Taka is Donated for Flood Relief in Feni, Bangladesh`;
  } else if (donationBoxId === "donate-box-3") {
    message = `${amount.toFixed(
      2
    )} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh`;
  } else {
    message = `Donation Amount: $${amount.toFixed(2)}`;
  }

  const historyDiv = document.createElement("div");
  historyDiv.style.border = "1px solid #ddd";
  historyDiv.style.borderRadius = "8px";
  historyDiv.style.padding = "10px";
  historyDiv.style.margin = "10px 0";
  historyDiv.style.backgroundColor = "#f9f9f9";

  historyDiv.innerHTML = `
    <p class="text-lg font-bold text-gray-700">${message}</p>
    <p class="text-sm text-gray-500">Date: ${currentDate}</p>
  `;

  historyList.appendChild(historyDiv);
}

// Input Validation Function
function setInputValidation(inputBoxId) {
  const inputBox = document.getElementById(inputBoxId);
  inputBox.addEventListener("input", function () {
    const mainAmount = parseFloat(mainBalance.innerText);
    const inputValue = parseFloat(inputBox.value);

    // Validate input value against main balance
    if (inputValue > mainAmount) {
      alert("You cannot donate more than your available balance.");
      inputBox.value = ""; // Reset input box
    }
  });
}

// Donation Button 1
let totalDonation1 = 0;
const donateNowButton = document.getElementById("donate-now");
donateNowButton.addEventListener("click", function () {
  const inputbox1 = parseFloat(document.getElementById("input-box1").value);
  if (!isNaN(inputbox1) && inputbox1 > 0) {
    const mainAmount = parseFloat(mainBalance.innerText);
    if (mainAmount - inputbox1 < 0) {
      alert("Insufficient balance! Donation cannot be processed.");
    } else {
      totalDonation1 += inputbox1;
      mainBalance.innerText = (mainAmount - inputbox1).toFixed(2);
      document.getElementById("donate-box-1").innerText =
        totalDonation1.toFixed(2);
      addHistoryEntry("donate-box-1", inputbox1);

      // Show Congratulations Modal
      modalDonationAmount.innerText = `Amount: ${inputbox1.toFixed(2)}`;
      congratulationsModal.showModal(); // Show the Congratulations modal
    }
  } else {
    alert("Please enter a valid number greater than 0");
  }
  document.getElementById("input-box1").value = "";
});

// Donation Button 2
let totalDonation2 = 0;
const donateBtn2 = document.getElementById("donateBtn2");
donateBtn2.addEventListener("click", function () {
  const inputbox2 = parseFloat(document.getElementById("input-box2").value);
  if (!isNaN(inputbox2) && inputbox2 > 0) {
    const mainAmount = parseFloat(mainBalance.innerText);
    if (mainAmount - inputbox2 < 0) {
      alert("Insufficient balance! Donation cannot be processed.");
    } else {
      totalDonation2 += inputbox2;
      mainBalance.innerText = (mainAmount - inputbox2).toFixed(2);
      document.getElementById("donate-box-2").innerText =
        totalDonation2.toFixed(2);
      addHistoryEntry("donate-box-2", inputbox2);

      // Show Congratulations Modal
      modalDonationAmount.innerText = `Amount: ${inputbox2.toFixed(2)}`;
      congratulationsModal.showModal(); // Show the Congratulations modal
    }
  } else {
    alert("Please enter a valid number");
  }
  document.getElementById("input-box2").value = "";
});

// Donation Button 3
let totalDonation3 = 0;
const donateBtn3 = document.getElementById("donateBtn3");
donateBtn3.addEventListener("click", function () {
  const inputbox3 = parseFloat(document.getElementById("input-box3").value);
  if (!isNaN(inputbox3) && inputbox3 > 0) {
    const mainAmount = parseFloat(mainBalance.innerText);
    if (mainAmount - inputbox3 < 0) {
      alert("Insufficient balance! Donation cannot be processed.");
    } else {
      totalDonation3 += inputbox3;
      mainBalance.innerText = (mainAmount - inputbox3).toFixed(2);
      document.getElementById("donate-box-3").innerText =
        totalDonation3.toFixed(2);
      addHistoryEntry("donate-box-3", inputbox3);

      // Show Congratulations Modal
      modalDonationAmount.innerText = `Amount: ${inputbox3.toFixed(2)}`;
      congratulationsModal.showModal(); // Show the Congratulations modal
    }
  } else {
    alert("Please enter a valid number");
  }
  document.getElementById("input-box3").value = "";
});

// Input validation setup for donation input boxes
setInputValidation("input-box1");
setInputValidation("input-box2");
setInputValidation("input-box3");

// Toggle Button Function
const historyTab = document.getElementById("history-tab");
const donationTab = document.getElementById("donation-tab");

historyTab.addEventListener("click", function () {
  historyTab.classList.add("bg-color-primary");
  donationTab.classList.remove("bg-color-primary");
  document.getElementById("gayeb-ul").classList.add("hidden");
  historyList.style.display = "grid"; // Show history
});

donationTab.addEventListener("click", function () {
  donationTab.classList.add("bg-color-primary");
  historyTab.classList.remove("bg-color-primary");
  document.getElementById("gayeb-ul").classList.remove("hidden");
  historyList.style.display = "none"; // Hide history
});
