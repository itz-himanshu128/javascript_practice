const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

setInterval(function(){
    let date = new Date() 
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)



// const clock = document.getElementById('clock')

// setInterval(function(){
//     let date = new Date()  // Fixed: Capital 'D' in Date
//     clock.innerHTML = date.toLocaleTimeString();
// }, 1000)