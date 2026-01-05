// let x = -100;
// x >>= 5;
// console.log("Value of x is: " + x);

// function myFun(p1,p2){
// 	return p1 * p2;
// }
// console.log(9,2);

// function toCelsius(f){
// 	return (5/9) * (f-32);
// }
// let value =  toCelsius(77);
// console.log(value);



// const person = {
// 	name: "John",
//     age: 30,
//     city: "New York"
// }



// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// }
// console.log( JSON.stringify( person ) );
// console.log(Object.values(person));



// 'use strick'
// city = 'Mocha'
// console.log(city);


// let trains = ['Local', 'Express','Fast Local', 'Express'];
// let expressTrains = trains.filter(train => train ==='Express');
// console.log(expressTrains);

// let suburbs = {andheri: 'busy', bandra:'trendy', dardar:'historic'};
// let keys = Object.keys(suburbs);
// console.log(keys);


// let travleTime = (time) => time + 40;
// console.log(travleTime(20));


// let train = 'Mumbai central local';
// console.log(`Hey  ${train}`);
// console.log("hey " + train);

// let gatway = {location:'Colaba', height: 25}
// let { location, height} = gatway;
// console.log(location);

// let calculateFare = (distance = 1 ) => distance * 10;

// console.log(calculateFare());
// console.log(calculateFare(5));


// let centralLine = ['Dadar', 'Kurla'];
// let westerLine = ['Bandra','Andheri'];

// let combineList = [...centralLine, ...westerLine];
// console.log(combineList);



// let bookcab = new Promise((resolve, reject) => {
//     let isCabAvailable = false;
//     if(isCabAvailable){
//         resolve('Cab is available');
//     }else{
//         reject('No cab available');
//     }
// });
// bookcab
// .then(message => console.log(message))
// .catch(error => console.log(error));


// class Train{
//     constructor(name, speed){
//         this.name = name;
//         this.speed = speed;
//     }
//     getDeatails(){
//         return `${this.name} is running at ${this.speed} km/h.`;
//     }
// }
// let locatTrain = new Train('Mumbai Local Train', 50);
// console.log(locatTrain.getDeatails());


// // <<<<<<< ---------------------------- landmarks.js
// export const landmarks = ["gateway of India", 'Marine Line', "Electric"]

// // <<<<<<<< --------------------------- app.js
// import { landmarks } from './landmarks';
// console.log(landmarks);




