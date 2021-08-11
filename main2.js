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
=======

check.click(function(){
 if($('#inp').val() === "Titanic" || $('#inp').val() === "titanic" ){
=======
check.one('click',(function(){
 if($('#inp').val() === "Johnny English"){

$('#result').text("Congratulation! Correct Answer!");

 }


 else if($('#inp').val()!=="Titanic"){
=======
 else if($('#inp').val()!=="Johnny English"){
    $('#result').text("Sorry,try again..." )

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
=======
 $('#result').append("The true result is 'Titanic'")
}))
trueResult.click(function(){
 $('#result').css("color","red")
})