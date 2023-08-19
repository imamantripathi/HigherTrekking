// Contact Form Validation
function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var phone = document.forms["myForm"]["phone"].value;
    var num_of_person = document.forms["myForm"]["num_of_person"].value;
    var trip_date = document.forms["myForm"]["trip_date"].value;
    var message = document.forms["myForm"]["message"].value;

    document.getElementById("error-msg").style.opacity = 0;
    document.getElementById("error-msg").innerHTML = "";

    if (name == "" || name == null) {
        document.getElementById("error-msg").innerHTML = "<div class='alert alert-warning error_message'>*Please enter your Name*</div>";
        fadeIn();
        return false;
    }

    if (email == "" || email == null) {
        document.getElementById("error-msg").innerHTML = "<div class='alert alert-warning error_message'>*Please enter your Email*</div>";
        fadeIn();
        return false;
    }

    if (phone == "" || phone == null) {
        document.getElementById("error-msg").innerHTML = "<div class='alert alert-warning error_message'>*Please enter your Phone No.*</div>";
        fadeIn();
        return false;
    }

    if (num_of_person == "" || num_of_person == null) {
        document.getElementById("error-msg").innerHTML = "<div class='alert alert-warning error_message'>*Please enter the No. of persons*</div>";
        fadeIn();
        return false;
    }

    if (trip_date == "" || trip_date == null) {
        document.getElementById("error-msg").innerHTML = "<div class='alert alert-warning error_message'>*Please select the Trip Planning Date*</div>";
        fadeIn();
        return false;
    }

    if (message == "" || message == null) {
        document.getElementById("error-msg").innerHTML = "<div class='alert alert-warning error_message'>*Please enter your Message*</div>";
        fadeIn();
        return false;
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("simple-msg").innerHTML = this.responseText;
            document.forms["myForm"]["name"].value = "";
            document.forms["myForm"]["email"].value = "";
            document.forms["myForm"]["phone"].value = "";
            document.forms["myForm"]["num_of_person"].value = "";
            document.forms["myForm"]["trip_date"].value = "";
            document.forms["myForm"]["message"].value = "";
        }
    };
    xhttp.open("POST", "php/contact.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(
        "name=" + name +
        "&email=" + email +
        "&phone=" + phone +
        "&num_of_person=" + num_of_person +
        "&trip_date=" + trip_date +
        "&message=" + message
    );
    return false;
}

function fadeIn() {
    var fade = document.getElementById("error-msg");
    var opacity = 0;
    var intervalID = setInterval(function () {
        if (opacity < 1) {
            opacity = opacity + 0.5;
            fade.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 200);
}
