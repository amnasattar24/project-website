function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill all fields");
    return false;
  }

  let mailtoLink = `mailto:amnasattar216@gmail.com
    ?subject=New Message from ${name}
    &body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

  window.location.href = mailtoLink;

  return false; // page reload na ho
}
// card section
let paymentType = "";
let selectedPlan = "";
let selectedAmount = 0;

function openPaymentCard(type) {
  paymentType = type;
  document.getElementById("paymentCard").style.display = "flex";

  document.getElementById("cardTitle").innerText = `${type} Payment`;

  if (type === "WhatsApp") {
    document.getElementById("paymentInfo").style.display = "none";
    document.getElementById("qrCode").style.display = "none";
    document.getElementById("confirmForm").style.display = "block";
  } else {
    document.getElementById("paymentInfo").style.display = "block";
    document.getElementById("qrCode").style.display = "block";
    document.getElementById("confirmForm").style.display = "block";

    // Add QR Image for each type
    if (type === "NayaPay") {
      document.getElementById("qrImg").src = "nayapay.jpeg";
    } else {
      document.getElementById("qrImg").src = "easypaisa.jpeg";
    }
  }
}

function closePaymentCard() {
  document.getElementById("paymentCard").style.display = "none";
}

function selectPlan(plan, amount) {
  selectedPlan = plan;
  selectedAmount = amount;
  alert(`You selected ${plan} ($${amount})\nNow click "Send Confirmation".`);
}

function sendConfirmation() {
  if (selectedPlan === "") {
    alert("Please select a plan first");
    return;
  }
  let name = document.getElementById("confName").value;
  let email = document.getElementById("confEmail").value;
  let msg = document.getElementById("confMsg").value;

  if (name === "" || email === "" || msg === "") {
    alert("Please fill all fields");
    return;
  }

  let subject = `Payment Confirmation: ${selectedPlan}`;
  let body = 
   `Name: ${name}\n` +
   `Email: ${email}\n` +
   `Plan: ${selectedPlan} ($${selectedAmount})\n` +
   `Payment Method: ${paymentType}\n` +
   `Message: ${msg}`;

  // Email Notification
  window.location.href =
   `mailto:amnasattar216@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  closePaymentCard();
}
