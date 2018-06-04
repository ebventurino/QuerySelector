const el = document.querySelector(".article__header");
console.log(el)
el.textContent = ("Welcome to Emily's Blog")

const headers = document.querySelectorAll(".article__header")
for(let i=0; i < headers.length; i++) {
    headers[i].classList.add("important");
    console.log(headers[i])
}