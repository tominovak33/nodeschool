//console.log(process.argv.length);

/*
var foo = process.argv;
var value = 0;

for (i = 0; i < foo.length ; i++) {
	if (foo.hasOwnProperty(i)){
		value += parseInt(foo[i]) || 0;
	}
}

console.log(value);
*/

value = process.argv.reduce(function(memo, item){
	return memo+(parseInt(item) || 0);
},0);

console.log(value);