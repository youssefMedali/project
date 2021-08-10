var check = $('#checkBtn');
check.one('click',(function(){
 $('#result').append(function compare(){
 	           var inputValue = $('#inp').val();
	            if(inputValue==="Titanic" || inputValue==="titanic"){
	         	return "Congratulation! Correct Answer!";
	         }    
	         return "Sorry,try again..." 
            });

}));


var trueResult = $('#resultBtn');
trueResult.click(function(){
 $('#result').append("The true result is 'Titanic'")
})
trueResult.click(function(){
 $('#result').css("color","red")
})