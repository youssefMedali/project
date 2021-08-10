var check = $('#checkBtn');
check.click(function(){
 if($('#inp').val() === "Happy Death Day" || $('#inp').val() === "happy death day" ){

$('#result').text("Congratulation! Correct Answer!");
$('#result').append('<img class="movieImg" src="https://upload.wikimedia.org/wikipedia/en/a/a7/Happy_Death_Day_poster.png">');
$('.movieImg').css({"width": "200px" , "position": "relative", "bottom": "-40px","left": "-40px" });

 }

 else if($('#inp').val()!=="Happy Death Day"||$('#inp').val()!=="happy death day"){
    $('#result').text("Sorry,try again..." )
    $('#result').css("text-indent", "150px")
}

});


var trueResult = $('#resultBtn');
trueResult.one('click',(function(){
   $('#result').text("")
 $('#result').append($("<p id='para'>The true result is 'Happy Death Day'</p>"))
 $('#result').append('<img class="movieImg" src="https://upload.wikimedia.org/wikipedia/en/a/a7/Happy_Death_Day_poster.png">');
 $('.movieImg').css({"width": "200px" , "position": "relative", "bottom": "20px", "left": "220px", "display": "block"});
  $('#result').css({"color":"red", "position": "absolute", "top": "10px", "left": "30px", "font-size": "25px", "text-indent": "100px"})
}))
