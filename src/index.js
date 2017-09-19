module.exports = function zeros(expression) {
   var arr = expression.split('*');
 var arrOfFactorials = [];
 var finalResult = 1;
 for(var i = 0;i < arr.length;i++){
	var temp = null;
	var subArr = arr[i].split('');
	for(var j = 0; j < subArr.length; j++){
		if(subArr[j] === '!'){
			temp++;
		}
	}
	var numberToFact = parseInt(arr[i]);
	switch(temp){
		case 1: arrOfFactorials.push(factorial(numberToFact));break;
		case 2: arrOfFactorials.push(factorialEven(numberToFact));break;
	}
	
 }
		for(var k = 0;k < arrOfFactorials.length;k++){
			finalResult*=arrOfFactorials[k];
		}
		return finalResult;
 
 function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}
function factorialEven(n) {
	if(n === 1){
		return 1;
	}
	var result = 1;
	while(n > 0){
		result*=n;
		n-=2;
	}
	return result;
}
}
