const myNums= [1,2,3,4]
let myTotal= myNums.reduce((acc,cur_val)=>{
    console.log(`acc: ${acc} and curent value: ${cur_val}`);

    
    return acc+cur_val

})
console.log(myTotal);
