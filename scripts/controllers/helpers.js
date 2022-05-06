const userValidationClassName = 'validation-user-exists';
let index = {};

//checks if the username already exists
function validateUsernameInput(element) {
    index = model.data.users.findIndex(user => {
        return user.username.toLowerCase() === element.value.toLowerCase();
    });
    setRedBorder(element);
}

//checks if the email already exists
function validateEmailInput(element) {
    index = model.data.users.findIndex(user => {
        return user.email.toLowerCase() === element.value.toLowerCase();
    });
    setRedBorder(element);
}

//puts a red border on functions returning false
function setRedBorder(element) {
    if (index < 0) {
        element.classList.remove(userValidationClassName);
        return;
    }
    element.classList.add(userValidationClassName);
}


//checks if both passwords match and returns a true or false
function validatePasswordInput() {

}

function comparePassword() {

}

//creates a new user and pushes it to users
function createNewUser() {

    // 1 plastre sammen alle funksjonene til å sjekke alt
    // 2 hvis alt over stemmer, push new user til users array
    let newUser = {
            username: model.inputs.userSignup.username,
            email: model.inputs.userSignup.email,
            password: model.inputs.userSignup.password,
            confirmPassword: model.inputs.userSignup.confirmPassword,
        }
        model.data.users.push(newUser);
        model.state.page = "loginPage"
        render();
}