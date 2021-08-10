var check = $('#checkBtn');
check.one('click',(function(){
 $('#result').append(function compare(){
 	           var inputValue = $('#inp').val();
	            if(inputValue==="Johnny English" || inputValue==="johnny english"){
	         	return "Congratulation! Correct Answer!";
	         }    
	         return "Sorry,try again..." 
            });

}));


var trueResult = $('#resultBtn');
trueResult.one('click',(function(){
 $('#result').append("The true result is 'Johnny English'")
}))
trueResult.click(function(){
 $('#result').css("color","red")
});