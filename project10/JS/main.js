//While Loops//
function whileLoops () {
    let text = "";
    let i = 0;
    while (i < 10) {
        text += "<br>The number is " + i;
        i++;
    }
    document.getElementById("demoWhile").innerHTML = text;
}

//For Loops//
function forLoops () {
    const heroes = ["Thor", "Spiderman", "Ironman", "Captain Amerca"];

    let text = "";
    for (let i = 0; i < heroes.length; i++) {
    text += heroes[i] + "<br>";
    }
    document.getElementById("demoFor").innerHTML = text;
}

//Array//
function createArray(){
    const phones = ["iphone", "blackberry", "galaxy"];
    document.getElementById("demoArray").innerHTML = phones;
}

//Declaring Let Object//
let person={
    firstName : "John",
    lastname : "Doe",
    age : 50,
    eyeColor : "blue"
};