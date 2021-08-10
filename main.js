var check = $('#checkBtn');
check.click(function(){
 if($('#inp').val() === "Johnny English" || $('#inp').val() === "johnny english"){

$('#result').text("Congratulation! Correct Answer!");
$('#result').append('<img class="movieImg" src="https://flxt.tmsimg.com/assets/p32279_p_v10_at.jpg">');
$('.movieImg').css({"width": "200px" , "position": "relative", "top": "100px" });
 }

 else if($('#inp').val()!=="Johnny English" || $('#inp').val()!=="johnny english"){
    $('#result').text("Sorry,try again..." )
}

});


var trueResult = $('#resultBtn');
trueResult.click(function(){
 $('#result').append("The true result is 'Titanic'")
})
trueResult.click(function(){
 $('#result').css("color","red")
})