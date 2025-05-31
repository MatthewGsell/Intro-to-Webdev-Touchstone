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

window.addEventListener("resize", closenav)