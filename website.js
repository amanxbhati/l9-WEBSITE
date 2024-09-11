function fun(){
    document.getElementById("a").style.color="white";
    setTimeout(sum, 1000);  
}
function sum(){
    document.getElementById("a").style.color="green";
    setTimeout(aum, 1000);
}
function aum(){
    document.getElementById("a").style.color="red";
    setTimeout(hum, 1000);
}
function hum(){
    document.getElementById("a").style.color="yellow";
    setTimeout(fun, 1000);
}
