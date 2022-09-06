const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();
    const formEl = event.currentTarget.elements;


    const email = formEl.email;
    const password = formEl.password;

    if(email.value === "" || password.value === ""){
        return alert('Заповніть форму')
    }
    console.log({email: email.value, password: password.value})

}
