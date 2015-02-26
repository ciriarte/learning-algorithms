function reverse(phrase) {
  var reversed = '';
  for (var i = phrase.length - 1; i >= 0; i--) {
  	reversed += phrase[i]
  };
  return reversed;
}

function rpn(expression) {
	var stack = [];
	for (var i = 0; i < expression.length; i++) {
		var a, b;
		switch(expression[i]) {
			case '*':
			    b = stack.pop();
			    a = stack.pop();
			    console.log(a + ' * ' + b);
				stack.push(a * b);
				break;			
			case '/':
			    b = stack.pop();
			    a = stack.pop();
			    console.log(a + ' / ' + b);
				stack.push(Math.floor(a / b));
				break;		
			case '+':
			    b = stack.pop();
			    a = stack.pop();
			    console.log(a + ' + ' + b);
				stack.push(a + b);
				break;
			case '-':
			    b = stack.pop();
			    a = stack.pop();
			    console.log(a + ' - ' + b);
				stack.push(a - b);
				break;
			default:
				stack.push(parseInt(expression[i]));
				break;
		}
	};
	return parseInt(stack.pop());
}

// ABCCBP - ABBAA - 56742AABBAA34 - ANINA
function longestPalindrome(phrase) {
	if (phrase === null || phrase === '') return '';
	if (phrase.length === 1) return phrase;

	for (var i = 0; i < phrase.length - 1; i++) {
		for (var j = phrase.length; j > 1 + i; j--) {
				var test = phrase.substring(i, j);
				console.log('i:' + i + ', j:' + j + ' => ' + test);
				if (isPalindrome(test)) return test;
		};
	};
}

function isPalindrome(str) {
	var begin  = 0,
	    end    = str.length - 1;

	while(begin < str.length - 1 && end > 0 && str[begin] === str[end]) {
		begin++;
		end--;
	}

	return begin === str.length - 1 && end === 0;
}


function isBalanced(str) {
   var result = 0;

   result = balance(0, str);

   console.log(str + ' => ' + result);

   return result === 0;

   function balance(acc, str) {
   	var h = head(str);
   	if (h === '(') acc++;
   	if (h === ')') acc--;

   	console.log(h + ' => ' + acc);

   	if (str.length > 0 && acc >= 0) acc = balance(acc, tail(str));

   	return acc;
   }

   function tail(str) {
     var result = str.substring(1, str.length);
     //console.log('tail => "' + result + '"');
     return result;
   }

   function head(str) {
     var result = str[0];
     //console.log('head => "' + result + '"');
     return result;
   }
}