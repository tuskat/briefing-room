
window.speakToMe = function () {

    $(document).ready(function () {
        bitsOfDialogue();

    });
}

function textillateAll() {
    $('#l1').textillate({
        initialDelay: 500,

        in: {
            delay: 20,
            effect: 'fadeIn',
            sequence: true
        },
        out: {
            effect: 'fadeOut',
            sync: true
        }
    });
    $('#l2').textillate({
        initialDelay: 2000,
        in: {
            delay: 20,
            effect: 'fadeIn',
            sequence: true

        },
        out: {
            effect: 'fadeOut',
            sync: true
        }
    });
    $('#l3').textillate({
        initialDelay: 4000,
        in: {
            delay: 20,
            effect: 'fadeIn',
            sequence: true

        },
        out: {
            effect: 'fadeOut',
            sync: true
        }
    });
    $('#l4').textillate({
        initialDelay: 6000,
        in: {
            delay: 20,
            effect: 'fadeIn',
            sequence: true
        },
        out: {
            effect: 'fadeOut',
            sync: true
        }
    });

}


function bitsOfDialogue() {



    $.get("speech.php", function (r) {
       var result = JSON.parse(r);
        //console.dir( result[0][0]["content"] );
    
       
        document.getElementById("l1").innerHTML += result[0][0]["content"];
        document.getElementById("l2").innerHTML += result[1][0]["content"];
        document.getElementById("l3").innerHTML += result[2][0]["content"];
        document.getElementById("l4").innerHTML += result[3][0]["content"];


        var x = Math.floor((Math.random() * 3));
        document.getElementById('diaporama').style.backgroundImage = "url(\"css/images/diapositives/" + x + ".jpg\")";
        document.getElementById('diaporama').style.backgroundSize = "cover";
        textillateAll();


    });
 
    // document.getElementById("dialogText").innerHTML += snippet[i][0]; 
}
    
    
    
   
    