module.exports = function zeros(expression) {
   var a= expression.split('*');
 var aOfFactorials = [];
 var finalResult = 1;
 for(var i = 0;i < a.length;i++){
	var temp = null;
	var b = a[i].split('');
	for(var j = 0; j < b.length; j++){
		if(b[j] === '!'){
			temp++;
		}
	}
	var numberToFact = parseInt(a[i]);
	switch(temp){
		case 1: aOfFactorials.push(factorial(numberToFact));break;
		case 2: aOfFactorials.push(factorialEven(numberToFact));break;
	}
	
 }
		for(var k = 0;k < aOfFactorials.length;k++){
			result0*=aOfFactorials[k];
		}
		return result0;
 
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
