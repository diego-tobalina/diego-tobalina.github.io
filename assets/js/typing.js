var captionLength = 0;
var caption = '';
var erased = 0;


$(document).ready(function () {
    setInterval('cursorAnimation()', 600);
    captionEl = $('#caption');

    testTypingEffect();

});

function testTypingEffect() {
    //caption = $('input#user-caption').val();
    caption = "Hola! Me llamo <b><i>Diego Tobalina</i></b>, y soy ";
    type();
}

function type() {
    captionEl.html(caption.substr(0, captionLength++));
    if (captionLength < caption.length + 1) {
        setTimeout('type()', 100);
        if (captionLength == 18) {
            captionLength = 24;
        }
        // if (captionLength == 28){
        //   captionLength = 36;
        // }
    } else {
        captionLength = 0;
        caption = '';
    }
}

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}
