module.exports = function zeros(expression) {
  let arr = expression.split('*'), result = [], two = 0, five = 0, ten = 0;
  for (let i of arr) {
    i.endsWith('!!') ? result = factorial(i, 2) : result = factorial(i, 1);
    two  += count(result, 2);
    five += count(result, 5);
    ten  += count(result, 10);
  }
  return two > five ? ten + five : ten + two;
};

function factorial(k, j) {
	let arr = k.replace(new RegExp('!', 'g'), ''), result = [];
	for (let i = arr; i > 0; i -= j) {
		result.push(i);
	}
	return result;
}

function count(arr, n) {
	let count = 0;
	for(let i of arr) {
		while (n !== 10) {
			if ((i % n === 0) && (i % 10 !== 0) || i == 50 || i % n === 0) {
				count++;
				i /= n;
			} else break;
		}
	}
	return count;
}
