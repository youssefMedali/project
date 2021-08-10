var check = $('#checkBtn');
check.click(function(){
 if($('#inp').val() === "Titanic" || $('#inp').val() === "titanic" ){

$('#result').text("Congratulation! Correct Answer!");
$('#result').append('<img class="movieImg" src="https://fr.web.img2.acsta.net/pictures/19/10/25/11/18/5224976.jpg">');
$('.movieImg').css({"width": "200px" , "position": "relative", "bottom": "-20px" });
$('#result').css("text-indent", "30px")

 }

 else if($('#inp').val()!=="Titanic"){
    $('#result').text("Sorry,try again..." )
    $('#result').css("text-indent", "150px")
}

});


var trueResult = $('#resultBtn');
trueResult.one('click',(function(){
	$('#result').text("")
 $('#result').append($("<p id='para'>The true result is 'Titanic'</p>"))
 $('#result').append('<img class="movieImg" src="https://fr.web.img2.acsta.net/pictures/19/10/25/11/18/5224976.jpg">');
 $('.movieImg').css({"width": "200px" , "position": "relative", "bottom": "10px", "left": "150px", "display": "block"});
 $('#result').css({"color":"red", "text-indent":"80px", "position": "absolute", "top": "10px"})
}))
