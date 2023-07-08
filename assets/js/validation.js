/* main function to validate the form */
function validation(e) {
    e.preventDefault();
    /* variables for each form elements */
            // document.formName.fieldName.value
            
    var name = document.cForm.name.value;
    var email = document.cForm.email.value;
    var mobile = document.cForm.mobile.value;
    var city = document.cForm.city.value;
    var gender = document.cForm.gender.value;
    var lang = [];
    var checkOpt = document.getElementsByName("lang");
    // console.log(checkOpt)
    for(var i=0; i<checkOpt.length; i++) {
        if(checkOpt[i].checked) {
            // populate lang array with selected input values
            lang.push(checkOpt[i].value);
        }
    }

    /* Define an error variables */
    var nameErr = emailErr = mobileErr = cityErr = genderErr = langErr = true;

    /* Name Validation */
    if(name === "") {
        printError("nameErr", "Name Field cannot be empty");
        return false;
    } else {
        let regex = /^[a-zA-Z\s]+$/;
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
            return false;
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    /* Email Validation */
    if(email === "") {
        printError("emailErr", "Email Field cannot be empty");
        return false;
    } else {
        let regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Invalid Email ID");
            return false;
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    /* Mobile Validation */
    if(mobile === "") {
        printError("mobileErr", "Mobile Field cannot be empty");
        return false;
    } else {
        let regex = /^[6-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Invalid Mobile Number");
            return false;
        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

    /* City Validation */
    if(city === "null") {
        printError("cityErr", "Please Select city name");
        return false;
    } else {
        printError("cityErr", "");
        cityErr = false;
    }

    /* Gender Validation */
    if(gender === "") {
        printError("genderErr", "Please Select gender");
        return false;
    } else {
        printError("genderErr", "");
        genderErr = false;
    }

    /* Language Validation */
    if(lang.length === 0) {
        printError("langErr", "Please Select Your Langauge");
        return false;
    } else {
        printError("langErr", "");
        langErr = false;
    }

    return true;
}

/* Defining a function to display the error message */ 
function printError(eleId,msg) {
    document.getElementById(eleId).innerText = msg;
}
