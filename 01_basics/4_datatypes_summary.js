/*
There  are only 2 types of data by which data is catagourised by based on how data is stored in memory 
1. primitive      
        there are 7 types:
        strings, number, boolean, null, undefined, symbol, Bigint

2. non Primitive 
    arrays, objects, functions 

*/

const id= Symbol('123')
const another_id= Symbol('123')
console.log(id=== another_id);// there is"===" operator which is called strict comparison opeartior
                            // which make sure that the objact and its data type also must be equal
// it will return false

const Bigint= 1647263498234762398729n // it is big int
