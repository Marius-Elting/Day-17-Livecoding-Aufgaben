function rechnen() {
    let age1 = document.getElementById('age1').value;
    let age2 = document.getElementById('age2').value;
    console.log(age1, age2);
    let diff = age1 - age2;
    document.getElementById("differenz").innerHTML = diff;
}