var check = $('#checkBtn');
check.click(function(){
 if($('#inp').val() === "Titanic" || $('#inp').val() === "titanic" ){

$('#result').text("Congratulation! Correct Answer!");

 }

 else if($('#inp').val()!=="Titanic"){
    $('#result').text("Sorry,try again..." )
}

});


var trueResult = $('#resultBtn');
trueResult.one('click',(function(){
 $('#result').append("The true result is 'Titanic'")
}))
trueResult.click(function(){
 $('#result').css("color","red")
})