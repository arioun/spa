$(function () {
    var $width = $("#rect-width");
    var $height = $("#rect-height");
    var per = $("#rect-per");
    var area = $("#rect-area");
    var $cal = $("#rect-button");
    $cal.click(function () {
        var width = Number($width.val());
        var height = Number($height.val());


        per.val(((width + height) * 2).toFixed(3));
        area.val((width * height).toFixed(3));
    });
    $width.keypress(function (e) {
        verifyKey(e);
    })
    $height.keypress(function (e) {
        verifyKey(e);
    })
    $width.focusout(function () {
        verify("rect-width");
    })
    $height.focusout(function () {
        verify("rect-height");
    })

    function verifyKey(e) {
        var regkey = /[abcdf-zABCDF-Z`~!@#$%^&*()=_+\[\]{}|;:'",<>/?\\]/;
        if (regkey.test(e.key)) {
            e.preventDefault();
        }
    }

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