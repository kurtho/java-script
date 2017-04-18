function MyClass () { // constructor function
  var privateVariable = "foo";  // Private variable 

  this.publicVariable = "bar";  // Public variable 

  this.privilegedMethod = function () {  // Public Method
    console.log(privateVariable + ' ~call use function to call private from outside');
  };
}

// Instance method will be available to all instances but only load once in memory 
MyClass.prototype.publicMethod = function () {    
  console.log(this.publicVariable);
};

// Static variable shared by all instances
MyClass.staticProperty = "baz";

var myInstance = new MyClass();

console.log(myInstance.privateVariable + ' ~private var')
console.log(myInstance.publicVariable + ' ~public var')
myInstance.privilegedMethod()

var myList = [1,2,4,5]
console.log(myList.length)