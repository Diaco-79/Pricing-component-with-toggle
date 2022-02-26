const toggle = document.querySelector(".pricing__toggle")
const toggleCircle = document.querySelector(".toggle__circle")
const buttonSelector = document.querySelectorAll("button")
const price = document.querySelectorAll('.card__price h1')
const toggleText = document.querySelectorAll('.pricing__text ')
console.log(price[1])



let count = 0
let i = 0
toggle.addEventListener("click", ()=>{
    if (count === 0){
    toggleCircle.style.marginLeft = "unset"
    toggleCircle.style.marginRight = "50%"
    toggle.classList.remove("fade")

    buttonSelector[0].classList.remove("transparent")
    buttonSelector[2].classList.remove("transparent")
    buttonSelector[1].classList.remove("transparent--pro")

    for(i = 0; i<1;i++){
        price[i].textContent = "199.99"
        price[i+1].textContent = "249.99"
        price[i+2].textContent="399.99"
    }

    toggleText[0].classList.remove('fade')
    toggleText[1].classList.add('fade')
   


    count = 1
}else{
    toggleCircle.style.marginLeft = "50%"
    toggleCircle.style.marginRight = "unset"

    buttonSelector[0].classList.add("transparent")
    buttonSelector[2].classList.add("transparent")
    buttonSelector[1].classList.add("transparent--pro")

    for(i = 0; i<1;i++){
        price[i].textContent = "19.99"
        price[i+1].textContent = "24.99"
        price[i+2].textContent="39.99"
    }

    toggleText[0].classList.add('fade')
    toggleText[1].classList.remove('fade')
   

    count = 0
}
    
})