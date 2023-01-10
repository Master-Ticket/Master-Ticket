const register = async (event) => {
  event.preventDefault();
  console.log();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const name = document.querySelector("#name-signup").value.trim();
  if (name && email && password)
   {
    const response = await fetch("/api/user", {
      
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    
    if (response.ok) {
      document.location.replace("/account");
    } else {
      alert("Account creation failed. Please try again.");
    }
  }
};
const registerForm = document.querySelector(".form-signup");
console.log();
registerForm.addEventListener("submit", register);
