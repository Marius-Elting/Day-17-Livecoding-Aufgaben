function age(event) {
    event.preventDefault();
    let input = document.getElementById("date").value;
    let heute = new Date();
    let year = heute.getFullYear();
    console.log(year);
    let output = year - input;
    document.getElementById("alter").innerHTML = output;
}


function changeHeadline(event) {
    event.preventDefault();
    let big = document.getElementById("tag");
    tag.classList.add("big");
}

function resetHeadline(event) {
    event.preventDefault();
    let big = document.getElementById("tag");
    tag.classList.remove("big");
}