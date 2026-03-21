const form = document.getElementById("myForm");
const message = document.getElementById("message");


let greeting = document.getElementById("greeting");
let hour = new Date().getHours();

if (greeting) {
    if (hour < 12) greeting.innerHTML = "Good Morning!";
    else if (hour < 18) greeting.innerHTML = "Good Afternoon!";
    else greeting.innerHTML = "Good Evening!";
}

const note = document.getElementById("note").value.trim();

// Optional: make note required
if (note === "") {
    message.style.color = "red";
    message.textContent = "Please enter a message or note.";
    return;
}

function toggleMenu() {
    let menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}


if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const age = Number(document.getElementById("age").value);
        const email = document.getElementById("email").value.trim();
        const cellphone = document.getElementById("cellphone").value.trim();

        if (age < 0) {
            message.style.color = "red";
            message.textContent = "Age cannot be negative.";
            return;
        }

        if (isNaN(age)) {
            message.style.color = "red";
            message.textContent = "Please enter a valid age.";
            return;
        }

        if (cellphone.length !== 11 || !/^\d{11}$/.test(cellphone)) {
            message.style.color = "red";
            message.textContent = "Cellphone number must be exactly 11 digits.";
            return;
        }

        if (!email.includes("@")) {
            message.style.color = "red";
            message.textContent = "Please enter a valid email address.";
            return;
        }

        message.style.color = "green";
        message.textContent = "Form submitted successfully!";
        form.reset();
    });
}