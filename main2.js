var check = $('#checkBtn');
check.one('click',(function(){
 if($('#inp').val() === "Johnny English"){

$('#result').text("Congratulation! Correct Answer!");

 }

 else if($('#inp').val()!=="Johnny English"){
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