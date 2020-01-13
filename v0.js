var niveau = 1;

for (var j = 1; j < 7; j++) {
$('#niveau'+j).hide();
}

if (niveau === 1) {
    showhide(niveau);
    $('#play').click(function () {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'mp3/iam.mp3');
        audioElement.play();

        $('#play').click(function() {
            audioElement.pause();
        });
        $('#win').click(function () {
            audioElement.pause();
        });
    });

    $('.loose').click(function () {
        loose();
    });

    $('#win').click(function () {
        alert('Ouais ouais ouais !');
        niveau = 2;
        showhide(niveau);
        return niveau2();
    });
}

function niveau2() {
    $('#play2').click(function () {
        var audioElement2 = document.createElement('audio');
        audioElement2.setAttribute('src', 'mp3/lunatic.mp3');
        audioElement2.play();

        $('#play2').click(function() {
            audioElement2.pause();
        });
        $('#win2').click(function () {
            audioElement2.pause();
        });
    });

    $('.loose2').click(function () {
        loose();
    });

    $('#win2').click(function () {
        alert('Ouais ouais ouais !');
        niveau = 3;
        showhide(niveau);
        return niveau3();
    });
}

function niveau3() {
    $('#play3').click(function () {
        var audioElement3 = document.createElement('audio');
        audioElement3.setAttribute('src', 'mp3/113.mp3');
        audioElement3.play();

        $('#play3').click(function() {
            audioElement3.pause();
        });
        $('#win3').click(function () {
            audioElement3.pause();
        });
    });

    $('.loose3').click(function () {
        loose();
    });

    $('#win3').click(function () {
        alert('Ouais ouais ouais !');
        niveau = 4;
        showhide(niveau);
        return niveau4();
    });
}

function niveau4() {
    $('#play4').click(function () {
        var audioElement4 = document.createElement('audio');
        audioElement4.setAttribute('src', 'mp3/rohff.mp3');
        audioElement4.play();

        $('#play4').click(function() {
            audioElement4.pause();
        });
        $('#win4').click(function () {
            audioElement4.pause();
        });
    });

    $('.loose4').click(function () {
        loose();
    });

    $('#win4').click(function () {
        alert('Ouais ouais ouais !');
        niveau = 5;
        showhide(niveau);
        return niveau5();
    });
}

function niveau5() {
    $('#play5').click(function () {
        var audioElement5 = document.createElement('audio');
        audioElement5.setAttribute('src', 'mp3/scred.mp3');
        audioElement5.play();

        $('#play5').click(function() {
            audioElement5.pause();
        });
        $('#win5').click(function () {
            audioElement5.pause();
        });
    });

    $('.loose5').click(function () {
        loose();
    });

    $('#win5').click(function () {
        alert('Ouais ouais ouais !');
        niveau = 6;
        showhide(niveau);
        return niveau6();
    });
}

function niveau6() {
    $('#play6').click(function () {
        var audioElement6 = document.createElement('audio');
        audioElement6.setAttribute('src', 'mp3/oxmo.mp3');
        audioElement6.play();

        $('#play6').click(function() {
            audioElement6.pause();
        });
        $('#win6').click(function () {
            audioElement6.pause();
        });
    });

    $('.loose6').click(function () {
        loose();
    });

    $('#win6').click(function () {
        alert('Ouais ouais ouais !');
        niveau = 7;
        showhide(niveau);
        return niveau7();
    });
}

function niveau7() {}

function niveau(niveau) {
    $('#play'+niveau).click(function () {
        var audioElement6 = document.createElement('audio');
        audioElement6.setAttribute('src', 'mp3/oxmo.mp3');
        audioElement6.play();

        $('#play'+niveau).click(function() {
            audioElement6.pause();
        });
        $('#win'+niveau).click(function () {
            audioElement6.pause();
        });
    });

    $('.loose'+niveau).click(function () {
        loose();
    });

    $('#win'+niveau).click(function () {
        alert('Ouais ouais ouais !');
        niveau++;
        showhide(niveau);
        return niveau(niveau);
    });
}

function showhide(niveau) {
    $('#niveau'+(niveau-1)).hide();
    $('#niveau'+niveau).show();
}

function loose() {
    return alert('Perdu ! Va reviser tes classiques !');
}

/*     if (niveau === 2) {
        $('#niveau1').hide();
        $('#niveau2').show();
        $('#niveau3').hide();
        $('#niveau4').hide();
        $('#niveau5').hide();
        $('#niveau6').hide();
        $('#niveau7').hide();
    }
    if (niveau === 3) {
        $('#niveau1').hide();
        $('#niveau2').hide();
        $('#niveau3').show();
        $('#niveau4').hide();
        $('#niveau5').hide();
        $('#niveau6').hide();
        $('#niveau7').hide();
    }
    if (niveau === 4) {
        $('#niveau1').hide();
        $('#niveau2').hide();
        $('#niveau3').hide();
        $('#niveau4').show();
        $('#niveau5').hide();
        $('#niveau6').hide();
        $('#niveau7').hide();
    }
    if (niveau === 5) {
        $('#niveau1').hide();
        $('#niveau2').hide();
        $('#niveau3').hide();
        $('#niveau4').hide();
        $('#niveau5').show();
        $('#niveau6').hide();
        $('#niveau7').hide();
    }
    if (niveau === 6) {
        $('#niveau1').hide();
        $('#niveau2').hide();
        $('#niveau3').hide();
        $('#niveau4').hide();
        $('#niveau5').hide();
        $('#niveau6').show();
        $('#niveau7').hide();
    }
    if (niveau === 7) {
        $('#niveau1').hide();
        $('#niveau2').hide();
        $('#niveau3').hide();
        $('#niveau4').hide();
        $('#niveau5').hide();
        $('#niveau6').hide();
        $('#niveau7').show();
    } */
