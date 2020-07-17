fucntion fn(){
var d = new Date();


var date = parseInt(document.getElementById("day").value);
var month = parseInt(document.getElementById("month").value) -1;
var year = parseInt(document.getElementById("year").value);


if (day < 0 ||day > 31 ) {
    document.getElementsByClassName("dayerror").innerHtml ="Enter valid date";
    return false;
} else if (date == "") {
    document.getElementsByClassName("dayerror").innerHtml = "This feild canot be empty";
    return false;
} else{
    d.setDate(date);
}

if (month < 0 || day > 12) {
    document.getElementsByClassName("montherror").innerHtml = "Enter valid month";
    return false;
} else if (month == "") {
    document.getElementsByClassName("montherror").innerHtml ="This field canot be empty"
    return false;
} else {
    d.setMonth(month);
}

if (month < 0) {
    document.getElementsByClassName("yearerror").innerHtml = "Enter valid year";
    return false;
} else if (month == "") {
        document.getElementsByClassName("yearerror") .innerHtml = "This field cannot be empty";
    }
}



var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

function getAkan() {}
