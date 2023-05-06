document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const feedback = document.getElementById("feedback").value;
  
  const nameRegex = /^[a-zA-Z]+$/;
  if (!nameRegex.test(name)) {
  document.getElementById("nameError").innerHTML = "Name can only contain alphabets";
  return false;
  } else {
  document.getElementById("nameError").innerHTML = "";
  }
  
  const emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
  document.getElementById("emailError").innerHTML = "Enter a valid email address";
  return false;
  } else {
  document.getElementById("emailError").innerHTML = "";
  }

  
  
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
  document.getElementById("phoneError").innerHTML = "Phone number must contain 10 numbers only";
  return false;
  } else {
  document.getElementById("phoneError").innerHTML = "";
  }
  
  const feedbackRegex = /\S/;
  if (!feedbackRegex.test() || feedback.split(" ").length < 5) {
  document.getElementById("feedbackError").innerHTML = "message must contain at least 5 words";
  return false;
  } else {
  document.getElementById("feedbackError").innerHTML = "";
  }
  
  alert("Form submitted successfully!");
  document.getElementById("form").reset();
  });
