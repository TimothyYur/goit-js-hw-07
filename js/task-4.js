const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (email === "" || password === "") {alert('All form fields must be filled in');}
    else{
        const userInfo = {};
        userInfo['email'] = email.trim();
        userInfo['password'] = password.trim();
        console.log(userInfo)
    }
    form.reset();
});