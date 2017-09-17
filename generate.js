(function(){
    function $(id){
        return document.getElementById(id);
    }
    var type = $('type');
    var length = $('length');
    var hmac = $('hmac');
    var hmac2 = $('hmac2');
    var content = $('content');
    var content2 = $('content2');
    function getLen(){
        return Math.max(parseInt(length.value) || 14, 4);
    }
    window.gen = function(){
        var t = type.value;
        if(typeof Hashes[t] === 'function'){
            var encrpty = new Hashes[t];
            var str = (content.value || content2.value || '').trim().toLowerCase();
            if(str){
                var value = getLen();
                var key = (hmac.value || hmac2.value || '').trim();
                if(key){
                    var pwd = encrpty.b64_hmac(key, str);
                    $('result').innerHTML = pwd.replace(/\W/g, '').substring(0, value);
                    localStorage.setItem('_1pwd_type_', t);
                    localStorage.setItem('_1pwd_leng_', value);
                } else {
                    alert('missing 1password');
                    hmac.focus();
                    hmac.select();
                }
            } else {
                alert('missing content');
                content.focus();
                content.select();
            }
        } else {
            alert('Invalid type');
        }
    };
    window.range = function(){
        $('length-show').innerHTML = getLen();
    }
    try {
        var lastType = localStorage.getItem('_1pwd_type_');
        if(lastType){
            var options = document.getElementsByTagName('option');
            for(var i = 0, len = options.length; i < len; i++){
                var opt = options[i];
                if(opt.value === lastType){
                    opt.setAttribute('selected', 'selected');
                }
            }
        }
        var lastLength = localStorage.getItem('_1pwd_leng_');
        if(lastLength){
            length.value = lastLength;
            range();
        }
    } catch(e) {}
})();