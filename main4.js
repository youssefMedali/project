var check = $('#checkBtn');
check.click(function(){
 if($('#inp').val() === "The Day After Tomorrow" || $('#inp').val() === "the day after tomorrow" ){

$('#result').text("Congratulation! Correct Answer!");
$('#result').append('<img class="movieImg" src="https://flxt.tmsimg.com/assets/p34439_p_v10_au.jpg">');
$('.movieImg').css({"width": "200px" , "position": "relative", "bottom": "-40px", "left": "-10px" });
$('#result').css({"color":"red", "position": "absolute", "top": "10px", "left":"-10px" , "font-size": "25px"})
 }

 else if($('#inp').val()!=="The Day After Tomorrow"||$('#inp').val()!=="the day after tomorrow"){
    $('#result').text("Sorry,try again..." )
    $('#result').css("text-indent", "160px")
}

});


var trueResult = $('#resultBtn');
trueResult.one('click',(function(){
   $('#result').text("")
 $('#result').append($("<p id='para'>The true result is 'The Day After Tomorrow'</p>"))
 $('#result').append('<img class="movieImg" src="https://flxt.tmsimg.com/assets/p34439_p_v10_au.jpg">');
 $('.movieImg').css({"width": "200px" , "position": "relative", "bottom": "0px", "left": "300px", "display": "block"});
$('#result').css({"color":"red", "position": "absolute", "top": "10px", "left":"-50px" , "font-size": "25px", "text-indent": "150px"})
}))
