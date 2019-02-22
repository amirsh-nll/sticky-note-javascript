
function isUnicode(str) {
    var letters = [];
    for (var i = 0; i <= str.length; i++) {
        letters[i] = str.substring((i - 1), i);
        if ( (letters[i].charCodeAt() > 64 && letters[i].charCodeAt() < 90) || (letters[i].charCodeAt() > 96 && letters[i].charCodeAt() > 123)  ){
            return true;
        }
    }
    return false;
}

function autodir() {
    $('.auto_direction').each(function(index, obj) {
        var dir = $(this);
        if (isUnicode(dir.val())) {
            dir.css('direction', 'rtl');
        }
        else {
            dir.css('direction', 'ltr');
        }
    });
}