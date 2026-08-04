// Dynamic Greeting
const hour = new Date().getHours();
let greeting = "";

if (hour < 12) {
    greeting = "Good Morning 🌅";
} else if (hour < 17) {
    greeting = "Good Afternoon ☀️";
} else {
    greeting = "Good Evening 🌙";
}

const heading = document.querySelector("header h1");
heading.innerHTML = `${greeting}<br>I'm Harshitha S Yadhav🙋‍♀️`;


// Smooth Scroll
document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// Welcome Message
window.onload = function() {

    alert("Welcome to Harshitha's Portfolio!");

};