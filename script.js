function showOptions() {
  const userType = prompt("Please select your role:\n1. Government Official\n2. Stakeholder\n3. Startup");

  if (userType == 1) {
    window.location.href = "registration/govt.html";
  } else if (userType == 2) {
    window.location.href = "registration/stakehold.html";
  } else if (userType == 3) {
    window.location.href = "registration/startup.html";
  } else {
    alert("Invalid selection. Please try again.");
  }
}