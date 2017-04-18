function transMonth(m){
	var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
	return months[m - 1]
}
var myValue = transMonth(2)
console.log(myValue)

var mySequence = [20,99,2,45,1,67,8,90,76,4,32,]

correctSequence()
function correctSequence(){
	var tmp
}


var array = [12,98,7,9,2, 5, 9,7,3];
array.push(22)
var index = array.indexOf(5);
if (index > -1) {
    array.splice(index, 1);
}

console.log(array)
function swap(x){
	var tmp = x[0]
	x[0] = x[1]
	x[1] = tmp
	return x
}

