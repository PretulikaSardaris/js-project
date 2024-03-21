//Dates

let mydate = new Date()
// //console.log(mydate)
// console.log(mydate.toDateString())
// //Thu Mar 21 2024

// console.log(mydate.toGMTString())
// //VM980:1 Thu, 21 Mar 2024 12:20:53 GMT

// console.log(mydate.toISOString())
// //VM1125:1 2024-03-21T12:20:53.434Z

// console.log(mydate.toJSON())
// //VM1285:1 2024-03-21T12:20:53.434Z

// console.log(mydate.toLocaleDateString())
// // 21.3.2024
// let myCreatedDate = new Date('03-21-2024')
// let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Date.now())
// //in seconds :-- Date.now()/1000

let date = new Date()
//console.log(date.getHours())
console.log(date.toLocaleString('default',{weekday : 'long'}))