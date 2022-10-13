function verdoppel() {
    let input = document.getElementById("doppel").value;
    let output = input * 2;
    console.log(output);
    document.getElementById("output").innerHTML = output;
}