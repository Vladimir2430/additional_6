module.exports = function zeros(expression) {
  let aaa = expression.split('*');
  let result=[];
  let two = 0;
  let five = 0;
  let ten = 0;
  for (let i of aaa) {
    if(i.endsWith('!!')) {
      result=factorial(i,2);
    } else (i.endsWith('!')) {
      result=factorial(i,1);
    }
    two+=count(result,2);
    five+=count(result,5);
    ten+=count(result,10);
  }
 return ten+Math.min(two,five);
};

function factorial(i,j){
	let ccc=i.replace(new RegExp('!','g'),'');
	let result=[];
	for(let n=ccc;n>0;n-=j){
		result.push(n);
	}
	return result;
}

function count(arr,n){
	let count=0;
	for(let eee of arr){
		if(n!==10){
			while(true){
				if((eee%n===0)&&(eee%10!==0)){
					 count++;
					 eee/=n;
					 continue;
				}
				if(eee==50){
					 count++;
					 eee/=n;
				}
				else break;
			}
		}
		else{
			while(true){
				if(eee%n===0){
					 count++;
					 eee/=n;
					 continue;
				}
				else break;
			}
		}
	}
	return count;
}
