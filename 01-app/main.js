function round(x,n) {
    return Math.round(x*Math.pow(10,n))/Math.pow(10,n);
}
window.onload=function () {
    var width = document.getElementById("rect-width");
    var height = document.getElementById('rect-height');
    var calculate = document.getElementById('rect-button');
    var per = document.getElementById('rect-per');
    var area = document.getElementById('rect-area');
    console.log(width.value);
    
    calculate.onclick=function () {
        per.value = (round(Number(width.value)+Number(height.value),1))*2;
        area.value = round(Number(width.value) * Number(height.value),2);
    }
}