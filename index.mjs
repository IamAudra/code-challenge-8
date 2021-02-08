import { data }  from "./data.mjs";

//const {hobbies:{movies } = data,

//const {name:{fName, lName}} = data;
const {name: {Fname}} = data;
const {location:{city, state}} = data;
const {location: {email}} = data;
console.log(`Name: ${Fname}`);
console.log(`Address: $ {city, state}`)
console.log (`Email:${email}`)
const {education:{first, second}}= data;
console.log(`Email:`)
console.log(first)
console.log(second)
const {Skills:{ Languages, Other} } = data;
console.log (`Languages: ${Languages}`)
console.log(`Other: ${Other}`)
const {WorkHistory:{wk1, wk2,wk3}} = data;
console.log(`WORK HISTORY`)
console.log (wk1)
console.log(wk2)
console.log(wk3)


