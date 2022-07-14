// window.open("Contact.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
// alert("Hi");
const fname = document.getElementById("name");
const email = document.getElementById("email");
const dob = document.getElementById("dob");
const interest = document.getElementById("interest");
const individual = document.getElementById("individual");
const organization = document.getElementById("organization");
const about = document.getElementById("about");
const errorElement = document.getElementById("error");
const form = document.getElementById("form");

// Preventing from submitting bofore error identification

form.addEventListener("submit", (e) => {

    let messages = [];
    if (fname.value === " " || fname.value == null) {
        messages.push("Name is required");
    }
    if (fname.value.length < 6) {
        messages.push("Name is too short");
    }
    if (fname.value.length > 20) {
        messages.push("Name is too long");
    }
    if (email.value === "" || email.value == null) {
        messages.push("email is required");
    }
    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(',');
    }
})
// new




// Next Method
// function ValidateInput() {
// 	const fname = document.getElementById("name");
// 	var txtUser = document.getElementById("txtUser");
// 	try {
// 		if (x == "") throw "empty";
// 	}
// 	catch (err) {
// 		divJs.innerHTML = "Input is " + err;
// 	}

// }



































// function setError(id,error) {
//     element = document.getElementById('id');
//     element.getElementsbyClassName('formerror')[0].innerHTML = error;
// }


// function validateForm() {
//     var name = document.forms['myForm']['name'].value;
//     console.log(name);
//     if (name.lenght<6) {
//         // setError("name","The Lenght of namr is too short")
//         alert('The lenght of name is too short');
//         return false;
//     }
//     return false;
// }