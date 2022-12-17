// About
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for(let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for(let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Responsiveness
const sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

// email submission

const scriptURL = 'https://script.google.com/macros/s/AKfycbwV2oKGQQa7ybs2euYrJeTBwnXHBxhs2LmtttPL8Ob73PGHN7T94TG_gnih-7O8Fs--AA/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Your message has been sent successfully!"
        setTimeout(function() {
            msg.innerHTML = "";
        }, 50000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
});