const login = async (event) => {
  event.preventDefault();
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  
  if (email && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/account");
    } else {
      alert("Invalid email or password.");
    }
  }
};
const loginForm = document.querySelector(".form-login");
loginForm.addEventListener("submit", login);
