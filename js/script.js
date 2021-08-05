// CODE FOR TIME IN FOOTER

let copyrightYear = document.getElementById("copyrightYear");

let date = new Date();
let currentYear = date.getFullYear();

copyrightYear.innerHTML = currentYear;

// COPY PAGE URL

function copy(){
    navigator.clipboard.writeText(window.location.href);
}