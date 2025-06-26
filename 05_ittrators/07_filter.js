


//      filters used for true or false processing 
const myNums=[1,2,3,4,5,6,7,8,9,10]

const newNums=myNums.filter((num)=> num>4)             // her we implicetly return the function so it is working. We dont need to write return keyword 

// console.log(newNums);


const newNums2=myNums.filter((num)=> {
    num>4                                             // it wont return expected o/p (which is 5,6,7,8,9,10) because there is no object involved here and this function return objects and return keyword exist. this is explicetly typed function.

})       
// console.log(newNums2);                  // returns [] object  

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
 
// let userBook =books.filter ((bk)=>bk.genre==="History")
// console.log(userBook);
// here first apply filter function on books 
// then make an arrow function 
// then make a ittrator which will access items from bookDB 
// then ittrate this with the tpe of filter or condition you want to apply 
// print it 


let userBook =books.filter ((bk)=>bk.genre==="History"&& bk.publish>=2000)
console.log(userBook);