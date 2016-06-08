var $line1;
var $line2;
var next1;
var next2;
var index = 0;

$('.next').on('click', function () {
    //temporary
    if (index <= 0) {
        $line1.textillate("out");
        $line2.textillate('out');
        $line1.find('.texts li:first').text(next1);
        $line2.find('.texts li:first').text(next2);
        $line1.textillate("in");
        index++;
    }
});

window.speakToMe = function () {
    $(document).ready(function () {
        bitsOfDialogue();
    });
}

window.resetSpeech = function () {
    document.getElementById("l1").innerHTML = "";
    document.getElementById("l2").innerHTML = "";
    bitsOfDialogue();
    $tlt.textillate('in');
}

function bitsOfDialogue() {
    $.get("speech.php", function (r) {
        var result = JSON.parse(r);
        document.getElementById("l1").innerHTML += result[0][0]["content"];
        document.getElementById("l2").innerHTML += result[1][0]["content"];
        next1 = result[2][0]["content"];
        next2 = result[3][0]["content"];
        //  var x = Math.floor((Math.random() * 2));
        var x = 1;
        document.getElementById('diaporama').style.backgroundImage = "url(\"css/images/diapositives/" + x + ".jpg\")";
        document.getElementById('diaporama').style.backgroundSize = "cover";
        textillateAll();
    });


}
function textillateAll() {
    $line1 = $('#l1').textillate({
        loop: false,
        minDisplayTime: 6000,
        in: {
            delay: 50,
            effect: 'fadeIn',
            sequence: true,
            callback: function () {
                $line2.textillate('start');
            }
        },
        out: {
            effect: 'fadeOut',
            sync: true,
        }
    });
    $line2 = $('#l2').textillate({
        loop: false,
        autoStart: false,
        minDisplayTime: 6000,
        in: {
            delay: 50,
            effect: 'fadeIn',
            sequence: true

        },
        out: {
            effect: 'fadeOut',
            sync: true
        }
    });
}


