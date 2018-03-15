$(function () {
    var $width = $("#rect-width");
    var $height = $("#rect-height");
    var per = $("#rect-per");
    var area = $("#rect-area");
    var $cal = $("#rect-button");
    var bln = false;
    $cal.click(function () {
        if (!bln) { return; }
        var width = Number($width.val());
        var height = Number($height.val());
        bln =verify("rect-width");
        bln =verify("rect-height");
        per.val(((width + height) * 2).toFixed(3));
        area.val((width * height).toFixed(3));

    });

    

    function verify(val) {
        var $data = $('#' + val);
        var data = $data.val();
        var message = $('#' + val + '-ver');
        var $label = $('#' + val + '-label');
        var label = $label.attr('value');

        var reg = /^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/;
        if (data === '' || data == null) {
            message.html(label + '不能为空!');
            $data.select();
            return false;
        }
        if (!reg.test(data)) {
            message.html('<p id="' + val + '-ver' + '">' + label + '必须为大于0的数值！</a>');
            $data.select();
            return false;

        }
        if (window.Number(data) < 0) {
            message.html('<p id="' + val + '-ver' + '">' + label + '不能为负！</a>');
            $data.select();
            return false;

        }
        message.html('');
        return true;

    }
})