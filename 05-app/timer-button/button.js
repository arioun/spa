var timerButton=function (config) {
    var cfg=config;
    var t = cfg.tlength;
    var $btn = $('<input type="button" class="timer-button">');
    var timer;
    var enabled=cfg.enabled;
    var alertmessage=cfg.message;
    $(cfg.container).append($btn);

    if (cfg.enabled) {
        enableBtn();
    } else {
        disableBtn();
    }

    function enableBtn(){
        enabled=true;
        clearInterval(timer);
        btnCotent();
        $btn.removeAttr('disabled');
    }

    function disableBtn() {
        enabled=false;
        $btn.attr('disabled', 'disabled');
        btnCotent();
        timer = window.setInterval(function () {

            t--;
            btnCotent();
            if (t === 0) {
                enableBtn();
            }
        }, 1000);
    }

    function btnCotent(){
        var text;
        if(enabled==true){
            text=cfg.text;
        }else{
            text=cfg.text+'('+t+'s)';
        }
        $btn.val(text);
    }

    $btn.click(function () {
        alert(alertmessage);
        if(cfg.enabled){disableBtn()}
    });

    return $btn;
    
}