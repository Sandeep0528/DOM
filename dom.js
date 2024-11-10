// var k = document.getElementById("p");
// k.style.backgroundColor = "red"
// k.style.fontSize = "40px"
// console.log(k.textContent)
// k.textContent = "hi how are you boy"
// k.innerHTML = `hi how are <span style="background-color:yellow;font-size:20px">you</span> boy <a href="">youtube</a> `
// console.log(k)


// let k = document.getElementById("p")
// let a = document.getElementById("btn");
// function b() {
//     k.textContent = "Im p but clicked by button"
//     k.style.backgroundColor = "red"
//     k.style.fontSize = "60px"
//     k.innerHTML = `Im p but clicked by button <img src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg " width="100"/>`
// }

// let allP = document.getElementsByTagName("p");
let a = document.getElementById("btn")
let allP = document.getElementsByClassName("hey");
function b() {
    a.style.backgroundColor = "red"
    a.style.fontSize = "60px"
    a.style.borderRadius = "50 %"
    a.innerHTML = `<p>Descriptive passages provide detail about people, places, things, or events. They are used to help the reader see, feel, and experience what is being described.

Descriptive passages can be found in both narrative and expository passages. However, they are usually more common in narrative passages because they help create a vivid picture for the reader.</p>`
}

let card = document.getElementById("btn1")
card.id = "image"
function c() {
    card.style.display = "flex"
    card.style.gap = "10px"
    card.innerHTML = `<img src="https://www.shutterstock.com/image-photo/calm-weather-on-sea-ocean-260nw-2212935531.jpg" width="350" id="img"/> 
    <img src="https://th.bing.com/th/id/OIG1.wQ7nqzXG6LLji1s3MrOP" width="350" id="img1"/>
    <img src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg" width="350" id="img2"/>`
}


