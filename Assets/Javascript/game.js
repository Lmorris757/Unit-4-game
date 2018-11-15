// activate program with start button
var randomGemAssignment = 0;
var wins = 0;
var losses = 0;
var userTotal = 0;
var gameOver = false;
var gemArray = [0, 0, 0, 0];
var randomTotal = Math.floor((Math.random() * 100) + 15);
console.log(randomTotal);
$('#randomTotal').text("Your Goal is: " + randomTotal);
// reset();

$("#begin").click(function () {
    $("randomTotal").show();
    $("#gem1").show();
    $("#gem2").show();
    $("#gem3").show();
    $("#gem4").show();
    $("#userTotal").show();
    $("#wins").show();
    $("#losses").show();
    gameOver = false;

    $("#begin").text("Reset").removeClass('btn-success').removeClass('btn-light').addClass('btn-primary');


    for (var i = 0; i < 4; i++) {

        var randomGemAssignment = Math.floor((Math.random() * 25) + 1);
        console.log(randomGemAssignment);

        gemArray[i] = randomGemAssignment;


    }

    $('#gem1').on('click', function () {
        userTotal = userTotal + gemArray[0];
        console.log("New userTotal= " + userTotal);
        losscounter();
        wincounter();
        $('#userTotal').text("Your Total: " + userTotal);
    });

    $('#gem2').on('click', function () {
        userTotal = userTotal + gemArray[1];
        console.log("New userTotal= " + userTotal);
        losscounter();
        wincounter();
        $('#userTotal').text("Your Total: " + userTotal);
    });

    $('#gem3').on('click', function () {
        userTotal = userTotal + gemArray[2];
        console.log("New userTotal= " + userTotal);
        losscounter();
        wincounter();
        $('#userTotal').text("Your Total: " + userTotal);
    });

    $('#gem4').on('click', function () {
        userTotal = userTotal + gemArray[3];
        console.log("New userTotal= " + userTotal);
        losscounter();
        wincounter();
        $('#userTotal').text("Your Total: " + userTotal);
    });

    function losscounter() {
        if (userTotal > randomTotal) {
            losses++;
            reset();
            console.log("Losses: " + losses);
            $('#losses').text("Losses: " + losses);
        }
    }
    function wincounter() {
        if (userTotal === randomTotal) {
            wins++;
            reset();
            console.log("Wins: " + wins);
            $('#wins').text("Wins: " + wins);
        }
    }
    function reset() {
        userTotal = 0;
        randomTotal = Math.floor((Math.random() * 100) + 15);
        for (var i = 0; i < 4; i++) {
            var randomGemAssignment = Math.floor((Math.random() * 25) + 1);
            console.log(randomGemAssignment);
            gemArray[i] = randomGemAssignment;
        }
        $('#randomTotal').text("Your Goal is: " + randomTotal);

    }
    $('.btn-primary').on('click', function() {
        wins=0;
        $('#wins').text("Wins: " + wins);
        losses=0;
        $('#losses').text("Losses: " + losses);
        userTotal=0;
        $('#userTotal').text("Your Total: " + userTotal);
        reset();
    });
});
