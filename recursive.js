
function ratePlans(value, relativeAttribute) {
	this.value = value
	this.relativeAttribute = relativeAttribute
}

function filter(ratePlans, filterValue){
	if (ratePlans == null){
		return false
	}
	if (ratePlans.value == filterValue){
		return true
	}else {
		return filter(ratePlans.relativeAttribute, filterValue) 
	}
}			
		
/*
	[1,5,10,20]				
*/

var oneRp = new ratePlans(1, null )
var fiveRp = new ratePlans(5, oneRp)
var tenRp = new ratePlans(10, fiveRp)
var twentyRp = new ratePlans(20, tenRp)

var selectedRp = twentyRp
var filterValue = 5
console.log(filter(selectedRp, filterValue))
