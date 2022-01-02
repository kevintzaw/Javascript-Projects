function myFunction(){
    let age = document.getElementById("age").value;
    let voteable = (age<18) ? "Too young ":"Old enough ";
    document.getElementById("demo").innerHTML = voteable + "to vote.";
}

function person (first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English";
}

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}
