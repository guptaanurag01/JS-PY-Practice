function outerFunction(){
	let outerVariable = "main outer function se hoon";
	function innerFunction(){
		console.log(outerVariable);
	}	
	return innerFunction;
}
const closureFunction =  outerFunction();
closureFunction();


// function multiplier(factor){
// 	debugger
// 	return function(number){
// 		debugger
// 		return number*factor;
// 	}
// }

// const multiplyByTwo = multiplier(2);
// debugger
// console.log(multiplyByTwo(5));

// const multiplyByThree = multiplier(3);
// debugger
// console.log(multiplyByThree(5));


// function outer() {
// 	let outerVariable = 'Outer Value';
	
// 	function inner() {
// 	  let innerVariable = 'Inner Value';
// 	  console.log(outerVariable);  // Inner function ko outerVariable mil raha hai
// 	  console.log(innerVariable);  // Inner function ka apna variable
// 	}
	
// 	inner();
//   }
//   outer();
  
// let globalVar = 'I am Global';

// function outer() {
//   let outerVar = 'I am Outer';
  
//   function inner() {
//     let innerVar = 'I am Inner';
//     console.log(innerVar); // Looks in its own scope first
//     console.log(outerVar); // Looks in outer function's scope
//     console.log(globalVar); // Looks in global scope
//   }
  
//   inner();
// }
// outer();


// function outer() {
// 	let counter = 0;
	
// 	function increment() {
// 	  counter++ ;
// 	  console.log(counter);
// 	}
	
// 	return increment;  // Return inner function
//   }
  
//   const closureFunction = outer();
//   closureFunction();  // Output: 1
//   closureFunction();  // Output: 2
//   closureFunction();  // Output: 3
  