//------------For Random Facts about Cats--------------
let btn =  document.querySelector("button");
let para = document.querySelector("p");

btn.addEventListener("click",()=>{
    let url = "https://catfact.ninja/fact";
    fetch(url)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log("Data = ",data);
        para.innerText = data.fact;
    })
    .catch((err)=>{
        console.log(err);
    })
})

//-------------------For image of random breeds dog----------------
let randImg = document.querySelector(".random-img");
let imgBtn = document.querySelector(".img-btn");

imgBtn.addEventListener("click",()=>{
    let url = "https://dog.ceo/api/breeds/image/random";
    fetch(url)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        let msg = data.message;
        console.log("data2's Message = ",msg);
        randImg.setAttribute("src",msg);
    })
    .catch((err)=>{
        console.log("error = ",err);
    })
})