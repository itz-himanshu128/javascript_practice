let score = 33          //string
let temp = null
let data=undefined
let bool = true
let str = "himanshu"

console.log(score);
console.log(temp);
console.log(data);
console.log(bool);
console.log(str);
console.log(typeof(score));
console.log(typeof(temp));
console.log(typeof(data));
console.log(typeof(bool));
console.log(typeof(str));


let converted_type1 = Number(score)          //to convert any data_type to Number
let converted_type2 = Number(temp)          //to convert any data_type to Number
let converted_type3 = Number(data)          //to convert any data_type to Number
let converted_type4 = Number(bool)          //to convert any data_type to Number(1)
let converted_type5 = Number(str)          //to convert any data_type to Number(1)
console.log(typeof(converted_type1));        //will give "number"
console.log(typeof(converted_type2));        //will give "number"
console.log(typeof(converted_type3));        //will give "number"
console.log(typeof(converted_type4));        //will give "number"
console.log(typeof(converted_type5));        //will give "number"
console.log(converted_type1);                // will give "NaN" which means it is not a number
console.log(converted_type2);                // will give "0" which means it is a number
console.log(converted_type3);                // will give "undefined" which means it is not a number
console.log(converted_type4);                // will give "1" which means it is a number
console.log(converted_type5);                // will give "NaN" which means it is not a number

/* convers onoperat ons .
"33" 33
"33abc" => NaN
true 1; false
*/

console.log(1+2);                          // opt-3
console.log("1"+2);                        // opt- 12
console.log(typeof(1+"2"));                // opt - 12
console.log(1+2+"3");                      // opt - 32 => because js takes 
