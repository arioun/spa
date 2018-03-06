window.onload=function () {
    var width = document.getElementById("rect-width");
    var height = document.getElementById('rect-height');
    var calculate = document.getElementById('rect-button');
    var per = document.getElementById('rect-per');
    var area = document.getElementById('rect-area');
    console.log(width.value);
    
    calculate.onclick=function () {
        per.value = (Number(width.value)+Number(height.value))*2;
        area.value = Number(width.value) * Number(height.value)
    }
}