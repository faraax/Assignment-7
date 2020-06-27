function getNumber(num){
    var result = document.getElementById("result"); 

    result.value += num;
}
function cleanScreen () {
    var result = document.getElementById("result"); 
    
    result.value = "";
}
function getAns() {
    var result = document.getElementById("result"); 
    result.value = eval(result.value);
}
function getPer() {
    var result = document.getElementById("result"); 
    result.value = eval(result.value /100);
}
function getValue() {
    var result = document.getElementById("result"); 
    result.value = eval(result.value);
    if (result.value > 0) {
        var a = "-"
    result.value = eval(a + result.value);
    }else {
    var a = "+"
    result.value = eval(a + result.value);
    }
}