//Global Attribute//
var mainName = "Volvo";

//internal Attribute//
function myFunction1() {
    var diffCar = "Toyota";
    //Connection to HTML//
    document.getElementById("demo1").innerHTML = diffCar + " " + mainName;
}

//If and Else Test//
function movieTest(){
    var x, text;

    // Get the value of input field with id="numb"//

    x = document.getElementById("myText").value;
    // If and Then statement //
    if(x == "Avengers") {
        text="Yes! Avengers Assemble";
    } else {
        text="Try Again";
    }
    //Connection to HTML//
    document.getElementById("demo2").innerHTML = text;

}

//Intentional Error//
function myFunction1() {
    var testError
    //Connection to HTML//
    document.getElementById("demo3").innerHTML =  testError
}