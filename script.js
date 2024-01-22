

function factorial() {

    let input = document.getElementById("inputNumber").value;
    let fact =1;
 
    for(let i = 1; i <= input; i++) {
        fact = fact * i;
    }
    document.getElementById("outputNumber").value = fact;
    console.log(fact);
}