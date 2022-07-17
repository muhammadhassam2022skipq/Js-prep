const fname = document.getElementById("name");
const email = document.getElementById("email");
const dob = document.getElementById("dob");
const interest = document.getElementById("interest");
const individual = document.getElementById("individual");
const organization = document.getElementById("organization");
const about = document.getElementById("about");
const form = document.getElementById("form");

// Preventing from submitting bofore error identification
//form validation function

validateForm = () => {
    if (fname.value === "" || fname.value == null) {
        document.getElementById("username").innerHTML =
            "  *** Please fill the username";
        return false;
    }
    if (email.value === "" || email.value == null) {
        document.getElementById("emailid").innerHTML =
            "  *** Please fill the email";
        return false;
    }
    if (!dob.value) {
        document.getElementById("dobs").innerHTML = "  *** Select the date";
        return false;
    }
    if (interest.value==="" || interest.value===null) {
        document.getElementById("interests").innerHTML= "*** please select one of your interest"
        return false;
    }
    if (document.getElementById("organization").checked == true && document.getElementById("individual").checked == true) {
        document.getElementById("organizations").innerHTML =
            "  *** Cannot select both";
        return false;
    }
    if (about.value.length==0) {
        document.getElementById("aboutus").innerHTML= "*** please write something about yourself";
        return false;
    }
    if (document.getElementById("organization").checked == true && document.getElementById("individual").checked == false || document.getElementById("organization").checked == false && document.getElementById("individual").checked == true) {
        return true;
    }
    if (document.getElementById("organization").checked == false && document.getElementById("individual").checked == false) {
        document.getElementById("organizations").innerHTML =
            "  *** Select Either organization or individual";
        return false;
    }

else {
    return true;
}
};


//Using querry selector to send my form data to the next tab after validation

let url = window.location.search;
let queries = new URLSearchParams(url);
let name1 = queries.get("name");
let email1 = queries.get("email");
let dob1 = queries.get("dob");
let interest1 = queries.get("interest");
let about1 = queries.get("about");
let organization1 = queries.get("organization");
let individual1 = queries.get("individual");
let A = [name1, email1, dob1, interest1, organization1, individual1, about1];
openWindow = window.open(
  "Contact.html",
  "_blank",
  "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400"
);
for (i = 0; i < 1; i++) {
  openWindow.document.write(A + "   \n");
};
