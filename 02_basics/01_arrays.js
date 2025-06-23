
const myArr= [1, 2, 3, 4, 5];
console.log(myArr);
const heros = ['superman', 'batman', 'flash', 'aquaman']
console.log(heros);
const newArr2= new Array(1,2,3,4,5);
console.log(newArr2);

//array methods
const arr3=[1,2,3,4,5,6]
console.log(arr3.length);
console.log(arr3.push(7))                   // push to last index
console.log(arr3.pop)                       // remove last element
console.log(arr3.unshift(9))                // it will add the element on first index of array
console.log(arr3.shift)                     // remove first element from the array 
console.log(arr3.includes(9))               // it returns true of false about data in arraye or not
console.log(arr3.indexOf(9))                //return index of element,if not exist it will return-1
console.log(arr3.join())                    // convert array to string 
console.log(typeof(arr3.join()))            // to verify
console.log(arr3.slice(1, 4))              // it will return new array from index 1 to 4
console.log(arr3.splice(1, 2))              // it will remove 2 elements
console.log(arr3.reverse())                 // it will reverse the array
console.log(arr3.sort())                    // it will sort the array in ascending order;

/// new array methods

const arr4 = [1, 2, 3, 4, 5];
const arr5 = [A, B, C, D, E];

console.log(arr4.push(arr5));            // it will add all elements in same array
console.log(arr4.concat(arr5));             // it will create a new array 
const arr6 = [...arr3, ...arr5];  // it will create a new array with all elements
console.log(arr6);

const anotherArr = [1, 2, 3, 4, 5,[1, 2, 3, 4, 5],[a, b, c, d, e[1, 2, 3, 4, 5]]];
console.log(anotherArr.flat());            // it will flatten the array by one level
console.log(anotherArr.flat(2));           // it will flatten the array by two levels
console.log(anotherArr.flat(Infinity));    // it will flatten the array by all levels

console.log(Array.isArray("himanshu")); // it will return false
console.log(Array.from("himanshu")); // it will convert string to array
                                    // it cannot convert dictonary to array directly 
                                    // we must tell it what to convert ex, key or values
                                    