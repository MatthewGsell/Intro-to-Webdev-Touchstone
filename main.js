window.addEventListener("resize", closenav)


function opennav() {
    const hamburger = document.querySelector("#hamburger");
    const dropdown = document.querySelector("#hamburgerdropdown")
    
    hamburger.classList.add("invisible");
    dropdown.classList.remove("invisible");
  
}

function closenav() {
    const hamburger = document.querySelector("#hamburger");
    const dropdown = document.querySelector("#hamburgerdropdown")
    
    hamburger.classList.remove("invisible");
    dropdown.classList.add("invisible");
}

function subscribe() {
    const email = document.querySelector("#subscribeinput");


    if (email.value == "") {
        alert("Error: no email entered!");
    } else {
        alert(email.value + " has subscribed!");
    }

}

function addtocart(e) {
    if (localStorage.getItem("cart") == null) {
        localStorage.setItem("cart", JSON.stringify([]));
    }

    const itemarray = JSON.parse(localStorage.getItem("cart"));

    itemarray.push(e.target.previousSibling.innerText);

    localStorage.setItem("cart", JSON.stringify(itemarray));


}

function viewcart() {
    if (localStorage.getItem("cart") == null || JSON.parse(localStorage.getItem("cart")) == []) {
        alert("Cart is empty!");
    } else {
        alert("Your cart consists of " + localStorage.getItem("cart"));
    }
}

function clearcart() {
    localStorage.removeItem("cart")
}

function submitform() {

    const firstnameinput = document.querySelector("#firstnameinput");
    const lastnameinput = document.querySelector("#lastnameinput");
    const emailinput = document.querySelector("#emailinput");
    const questioninput = document.querySelector("#questioninput");

    firstnameinput.value = "";
    lastnameinput.value = "";
    emailinput.value = "";
    questioninput.value = "";

    alert("Your question has been submitted you will receive an email with feedback shortly!");
}

function clearform() {
    const firstnameinput = document.querySelector("#firstnameinput");
    const lastnameinput = document.querySelector("#lastnameinput");
    const emailinput = document.querySelector("#emailinput");
    const questioninput = document.querySelector("#questioninput");

    firstnameinput.value = "";
    lastnameinput.value = "";
    emailinput.value = "";
    questioninput.value = "";


}

