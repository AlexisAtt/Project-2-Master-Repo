$(document).ready(function() {
    var playing = false;

    $('#musicbutton').click(function() {
        $(this).toggleClass("down");

        if (playing == false) {
            document.getElementById('player').play();
            playing = true;
            $(this).removeClass('soundIcnPlay');
            $(this).addClass('soundIcnPause');

        } else {
            document.getElementById('player').pause();
            playing = false;
            $(this).removeClass('soundIcnPause');
            $(this).addClass('soundIcnPlay');
        }


    });
});