//initialised all variables 
let c = document.querySelector("#counter"), p=document.getElementById("pause"), active = true, dec = document.getElementById("minus"),add = document.getElementById("plus"), heart = document.getElementById("heart"), like = document.querySelector(".likes"), clicked = [];
let f = document.querySelector("form"), av = document.querySelector("#comment-input");
let d = document.querySelector(".comments");
let cr = 0, cl = 1;

// interval to update every time 
let il = setInterval(() => {
    active ? c.innerHTML = cr++ : null;
    clicked = []
    heart.dataset.curr=cr
 }, 1000);
 
 // on pause or resume
p.addEventListener("click", pc=>{
    active ? (p.innerText="Resume", active = false) : (p.innerText = "Pause", active = true);
})

//an add
add.addEventListener("click", ()=>{
    c.innerHTML = cr++
})

