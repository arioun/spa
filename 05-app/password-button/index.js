$(function () {
    var getpd=$("#getp");
    var pwdbox=[];
    $('#pwdbtn').click(function (e) {
        e.preventDefault();
        var pwd=new pwdtext({
            'container': 'div.main'
        });
        pwdbox.push(pwd);
    })
    getpd.click(function(){
        pwdbox.forEach(function(pwd) {
            alert(pwd.getPwd());
        });
    })
})