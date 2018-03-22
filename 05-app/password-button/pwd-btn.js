
var pwdtext = function (config) {
    var cfg = config;
    var $pwd = $('<input type="password">'),
        $pwdText = $('<input type="text">'),
        $eye = $('<div class="icon"></div>'),
        $div = $('<div class="pwd">密码：</div>');

    $div.append($pwd);
    $div.append($eye);
    $div.append($pwdText);
    $(cfg.container).append($div);

    $pwd.on('input', function () {
        $pwdText.val($pwd.val());
        console.log($pwdText.val());
        
    });

    $eye.mouseover(function () {
        $pwdText.css('z-index', '10');
    });

    $eye.mouseout(function () {
        $pwdText.css('z-index', '-10');
    });

    this.getPwd = function () {
        return $pwdText.val();
    };
};