function playSample(level) {      
    audioElement.addEventListener('ended', function() {
        playOrNot = false;
        console.log('stop');
        $('.play').html('<img src="icon/play.png"><p>Jouer le sample</p>')
    }, false);
    audioElement.play();
    playOrNot = true;
    console.log('play');
    $('.play').html('<img src="icon/pause.png"><p>Pause</p>')
}

function showhide(level) {
    /* $('#level'+(level-1)).hide(); */
    for (var j = 1; j < 8; j++) {
        $('#level'+j).hide();
    }
    $('#level'+level).show();
}

function setMp3(level) {
    if (level < 10) {
        mp3 = "0"+level+".mp3";
    } else {
        mp3 = level+".mp3";
    }
    console.log(mp3)
    audioElement.removeAttribute('src');
    audioElement.setAttribute('src', 'mp3/'+mp3);
}

function winPuch() {
    random = Math.floor(Math.random() * winPunchline.length);
    return winPunchline[random];
}

function loosePuch() {
    random = Math.floor(Math.random() * loosePunchline.length);
    return loosePunchline[random];
}

var level = 1;
var mp3 = "0"+level+".mp3";
var playOrNot = false;
var audioElement = document.createElement('audio');
var winPunchline = ["Ouais ouais ouais !",
                    "T'es chaud ma gueule !", 
                    "Bien vu !",
                    "Si si tu connais !",
                    "T'es un bon !"]
var loosePunchline = ["Retourne réviser tes classiques !",
                    "Va péta les cassettes de ton oncle !",
                    "T'es un 2000 ou quoi ?", 
                    "T'écoutais pas de rap avant les RC !",]
var random = 0;
var score = 40;

showhide(level);
setMp3(level);

$('.play').click(function () {
    if (playOrNot) {
        audioElement.pause();
        playOrNot = false;
        console.log('stop');
        $('.play').html('<img src="icon/play.png"><p>Jouer le sample</p>')
    } else {
        playSample(level);
    }       
});

$('.win').click(function () {
    if (playOrNot) {
        audioElement.pause();
        playOrNot = false;
        console.log('stop');
        $('.play').html('<img src="icon/play.png"><p>Jouer le sample</p>')
    }
    $('.message').html('<p class="bounceIn green">'+winPuch()+'</p>')
    level++;
    score += 10;
    showhide(level);
    console.log('niveau '+level)
    setMp3(level);
});

$('.loose').click(function () {
    if (playOrNot) {
        audioElement.pause();
        playOrNot = false;
        console.log('stop');
        $('.play').html('<img src="icon/play.png"><p>Jouer le sample</p>')
    }
    score -= 10;
    $('.message').html('<p class="bounceIn red">'+loosePuch()+'</p>')
});

$('.fin').click(function () {
    level++;
    score += 10;
    showhide(level);
    console.log('niveau '+level)
    $('.score').html(score+'/100')
});

