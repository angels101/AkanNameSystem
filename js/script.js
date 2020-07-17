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

