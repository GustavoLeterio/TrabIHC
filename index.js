let header = document.getElementById('header');
console.log(header);
window.addEventListener("scroll", event => {
    if(window.scrollY>100) header.classList.add("unstick");
    else header.classList.remove("unstick");
}, { passive: true });