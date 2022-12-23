const createAccount = async (event) => {
    event.preventDefault();
    console.log('r u working')
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if ( email && password) {
        const response = await fetch('/api/user' , {
            method: 'POST',
            body: JSON.stringify({email , password}),
            headers: { 'Content-Type': 'application/json'},
        });
        if (response.ok) {
            document.location.replace('/account');
        } else {
            alert("Account creation failed. Please try again.");
        }
    }
};
const registerForm = document.querySelector('.form-signup')
console.log('yo yo')
registerForm.addEventListener('submit' , createAccount);