var Btn =  document.querySelector(".drawer-btn");
var Drawer = document.querySelector(".drawer-close");
var cards = Array.from(document.querySelectorAll(".card"))

Btn.addEventListener("click",() => {
    if(Drawer.classList.contains("drawer-open")){
        Drawer.classList.remove("drawer-open")
    }else{
        Drawer.classList.add("drawer-open")
    }
})

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            setTimeout(() => {
                entry.target.classList.add("card-show")
            },500)
        }
    })
},{
    threshold:.9,
})

cards.forEach(el => {
    observer.observe(el)
})

console.log(cards)