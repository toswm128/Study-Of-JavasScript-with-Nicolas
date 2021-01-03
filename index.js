// //const => 상수 
// //let => 변수

// //var =>요즘엔 안씀 
// /*
// st name ="aa";
// let a = 2;
// const b =10;
// //b = b+1;
// a = a +1;
// */
// //console.log(a /*,b*/,b+1/*오류는 안뜨지만 더해지지는 않음*/);
// // const boolean = true;//boolean
// // console.log(boolean);
// // const float = 51.1;
// // console.log(float)
// // //const daysOfWeek 변수를 작성할때 첫번째는 소문자 뛰어쓰기는 대문자로!
// // const mon = "Mon";
// // const tue = "tue";
// // const wed = "wed";
// // const thu = "thu";
// // const fri = "fri";
// // console.log(mon,thu,wed,thu,fri);
// // //array 안쓸경우
// // const daysOfWeek = ["Mon","Tue","Wed","Thu","Fri",
// // "Sat","Sun"]; 
// // console.log(daysOfWeek[2]);

// // const minsu ={
// //     name:"Minsu",
// //     age:17,
// //     gender:"Male",
// //     isHansome:true,
// //     favMovies: ["Along the gods","LOTR","Oldboy"],
// //     favFood: [  
// //                 {
// //                     name : "Kimchi",
// //                     fatty: false
// //                 },
// //                 {
// //                     name:"Cheese burger", 
// //                     fatty: true
// //                 }
// //             ]
// // }

// // console.log(minsu.age);
// // console.log(minsu.favMovies[0]);
// // console.log(minsu.favFood[1]);

// // function sayHello(name,age){
// //     console.log(`hello ${name} you have ${age} year of old`)
// // }

// // const meet = sayHello("minsu" ,18);

// // console.log(meet);

// const cal ={
//     plus: function plus(a,b) {
//         return a+b
//     },
//     miners: function miners(a,b) {
//         return a-b
//     },
//     x: function miners(a,b) {
//         return a*b
//     },
//     share: function miners(a,b) {
//         return a/b
//     },
//     squared: function miners(a,b) {
//         return a**b
//     },
// }
// const plus =cal.plus(5,5);
// const miners =cal.miners(5,5);
// const x =cal.x(5,5);
// const share =cal.share(5,5);
// const squared =cal.squared(5,5);
// console.log(plus)
// console.log(miners)
// console.log(x)
// console.log(share)
// console.log(squared)

const title= document.querySelector("#title");
title.style.color="red";
console.log(title);
document.title="hello~~"

title.innerHTML="hi from js";