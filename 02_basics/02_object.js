const JsUser = {
  name: "Himanshu",
  "full-name": "Himanshu Bhardwaj",
  mysum : "mykey",
  age: 25 ,
  location: "India",
  email : "himanshu@gmai.com",
  islogedin: true,

}

// console.log(JsUser.email)
// console.log(JsUser[ "email" ]) // accessing property using string key
// console.log(JsUser["fullname"])
// console.log(JsUser[mySym])         // [name_of_variable_or_key] this is the correct syntx to access symbol in js code otherwise it will give string as output
JsUser.email = "himanshu@google.com"
// console.log(JsUser.email);

Object.freeze(JsUser) // this will make the object immutable, you cannot change the properties of the object
JsUser.email = "himanshu@1234.com" // this will not change the email property of the object
// console.log(JsUser.email); // still it will print "same as before"


const sample= {

}
console.log(typeof sample); // object

const obj1={1:"a", 2:"b", 3:"c"} // this is an object with numeric keys
const obj2={4:"d", 5:"e", 6:"f"} // this is an object with numeric keys
const obj3={...obj1, ...obj2} // this is an object with numeric
 console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
// sperads the data of this object and merges it with the other object


const obj_n={
  name: "Himanshu",
  age: 25,
  location: "India",
  email: " }
const obj_n2={
  name: "Himanshu",
  age: 25,
  location: "India",
  email: "somthing.com"
}
}
console.log(Object.keys(obj_n)); // this will return the keys of the object as an array
console.log(Object.values(obj_n)); // this will return the values of the object as an array
console.log(Object.entries(obj_n)); // this will return the key value pairs of the object as an array of arrays
console.log(Object.entries(obj_n2)); // this will return the key value
