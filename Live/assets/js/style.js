// let myName = "Mo";
// const pi = "3.141";


// console.log(myName, pi);


// myName = "Steffi";


// console.log(myName);

// let x = 10;
// x--;
// console.log(x);

// // x += 1;
// // Ist das gleich wie
// // x = x + 1;

// console.log(x);

// console.log(10 % 3);

// // Usecase Modulu: Ist eine Zahl gerade oder ungerade ?

// // Vergleiche;


// console.log(3 == 3);

// //Checkt den Typ (ob Zahl oder String)
// console.log(3 === 3);

// console.log(1 == true);


// console.log(1 != 1);
// console.log(1 !== 1);


// console.log(1 > 2);

// console.log(1 < 1);

// console.log(1 >= 1);

// console.log(1 <= 1);


// const headline = document.getElementById("headline");
// headline.innerHTML = "Hello";
// headline.style.color = "red";



// document.write("test");


// // document.getElementsByClassName("classname");
// // const headline2 = sdocument.querySelector(".headlineclass");


// function sayhello(name) {
//     console.log("hello" + name);
// }


// // sayhello(" Peter");

// function logInputValue(event) {
//     event.preventDefault(); //Verhindert das der Browser neu Lädt
//     const name = document.getElementById("feldname").value;
//     console.log("Name: " + name + "");
// }


// function logInputValue(event) {
//     event.preventDefault(); //Verhindert das der Browser neu Lädt
//     const name = document.getElementById("feldname").value;
//     const age = document.getElementById("number").value;

//     console.log("Name: " + name + " " + age);
// }


function big(event) {
    event.preventDefault();
    let big = document.getElementById("tag");
    tag.classList.add("big");
}

// event ist hier nicht nötig, da es sich nicht um eine Form handelt und der Browser nicht automatische reloeaded
function small(event) {
    event.preventDefault();
    let big = document.getElementById("tag");
    tag.classList.remove("big");
}


function toggle(event) {
    let big = document.getElementById("tag");
    tag.classList.toggle("big");
}