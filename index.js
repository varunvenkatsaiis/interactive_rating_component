let val;
let ele = document.querySelectorAll(".rate");
for(let i = 0 ; i < ele.length ; i++){
    ele[i].addEventListener("mouseover" , function(){
        event.target.classList.add("color");
        ele[i-1].classList.add("white");
    })
    ele[i].addEventListener("mouseleave" , function(){
            event.target.classList.toggle("color"); 
            ele[i-1].classList.toggle("white");
    })
    ele[i].addEventListener("click" , function(){
        val = this.innerHTML;
        document.querySelector(".final_rating").innerHTML = val;
    })
}
