var check = $('#checkBtn');
check.click(function(){
 if($('#inp').val() === "Johnny English" || $('#inp').val() === "johnny english"){

$('#result').text("Congratulation! Correct Answer!");
$('#result').append('<img class="movieImg" src="https://flxt.tmsimg.com/assets/p32279_p_v10_at.jpg">');

$('.movieImg').css({"width": "200px" , "position": "relative", "bottom": "-20px" });;
=======
$('.movieImg').css({"width": "200px" , "position": "relative", "top": "100px" });

 }

 else if($('#inp').val()!=="Johnny English" || $('#inp').val()!=="johnny english"){
    $('#result').text("Sorry,try again..." )

    $('#result').css("text-indent", "150px")
=======

}

});


var trueResult = $('#resultBtn');

trueResult.one('click',(function(){ 
   $('#result').text("")
 $('#result').append($("<p id='para'>The true result is 'Johnny English'</p>"))
 $('#result').append('<img class="movieImg" src="https://flxt.tmsimg.com/assets/p32279_p_v10_at.jpg">');
 $('.movieImg').css({"width": "200px" , "position": "relative", "bottom": "-20px", "left": "50px" });
 $('#result').css({"color":"red","position": "relative", "left": "-30px", "top": "30px"});
}))

 
=======
trueResult.click(function(){
 $('#result').append("The true result is 'Titanic'")
})
trueResult.click(function(){
 $('#result').css("color","red")
})
