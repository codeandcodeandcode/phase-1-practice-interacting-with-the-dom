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

//on decrease
dec.addEventListener("click", ()=>{
    c.innerHTML = cr--
})

//added an event for the hear button
heart.addEventListener("click", r=>{
    clicked.push(cr);
    let li;
    //looked for any current li with the the current number 
let t = document.querySelector(`li[data-rep='${cr}']`);
//if found, updated the li's html otherwise created a new one for the next number
t ? t.innerHTML =  `${cr} has been clicked ${clicked.length} times` : (
    li = document.createElement("li"),
    li.dataset.rep=cr,
    li.innerHTML = `${cr} has been clicked ${clicked.length} times`,
    like.appendChild(li)
    )
    });

//comment form to create and append a comment
f.addEventListener("submit", e=>{
    e.preventDefault();
    let dc = document.createElement("p");
    dc.innerText= av.value;
    d.appendChild(dc)
    f.reset();
})    
