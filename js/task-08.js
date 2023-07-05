const form = document.querySelector('.login-form');
// const btnSubmit = document.querySelector('#submit');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }

    let infoObject = {
        email: email.value,
        password: password.value
    };

    console.log(infoObject);
    
    event.currentTarget.reset();

}

