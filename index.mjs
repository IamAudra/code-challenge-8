import { data }  from "./data.mjs";

//const {hobbies:{movies } = data,

const {name, location:{city, state}} = data;
const { hobbies:{books}, hobbies:{movies}} =  data;
console.log(books);
console.log(movies);
console.log(`Hello I am: ${name.fName} ${name.lName} from ${city} , ${state}.`);
console.log(`One of my favorite books is ${books}`);
console.log(`A favorite movie is called ${movies}`);
console.log(`I have eclectic taste.`);
