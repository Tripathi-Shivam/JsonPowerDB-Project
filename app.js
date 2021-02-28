const button = document.querySelector(".btn-lg");

button.addEventListener("click", () => {
    registerUser();
});

function registerUser() {
    var jsonStr = validateInput();
    if (jsonStr === "") {
        return;
    }
    var putReqStr = createPUTRequest(
        "90935325|-31948798485511681|90934427",
        jsonStr,
        "SAMPLE",
        "USER-REL"
    );
    alert(putReqStr);
    jQuery.ajaxSetup({ async: false });
    var resultObj = executeCommandAtGivenBaseUrl(
        putReqStr,
        "http://api.login2explore.com:5577",
        "/api/iml"
    );
    alert(JSON.stringify(resultObj));
    jQuery.ajaxSetup({ async: true });
    resetForm();
}

// Validation
function validateInput() {
    const usernameVar = document.getElementById("username").value;
    //console.log(usernameVar);
    if (usernameVar === "") {
        alert("Username is Required");
        document.getElementById("username").focus();
        return "";
    }

    const emailVar = document.getElementById("email").value;
    if (emailVar === "") {
        alert("Email is Required");
        document.getElementById("email").focus();
        return "";
    }

    const passwordVar = document.getElementById("password").value;
    console.log(passwordVar);
    if (passwordVar === "") {
        alert("Password is Required");
        document.getElementById("password").focus();
        return "";
    }

    var jsonStrObj = {
        username: usernameVar,
        email: emailVar,
        password: passwordVar,
    };

    return JSON.stringify(jsonStrObj);
}

// Reset Form
function resetForm() {
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}
