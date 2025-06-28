const from = document.querySelector('form')
from.addEventListener('submit',function (e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)

    const weight = parseInt(document.querySelector('#weight').value)

    const results = parseInt(document.querySelector('#results').value)

    if(height==='' || height<0 || isNaN(height) ){
        results.innerHTML=`Please give a valid height ${height}`
    }
    else if(weight==='' || weight<0 || isNaN(weight) ){
        results.innerHTML=`Please give a valid weight ${weight}`
    }
    else{
        const BMI = (weight / ((height*height)/10000)).toFixed(2)
        results.innerHTML=<span>${BMI}</span>
        if (BMI<18.6) {
            results.innerHTML=<span>Under Weight </span>   
        }
        else if (BMI>29.9) {
            results.innerHTML=<span>Under Weight </span>   
        }
        else{
            results.innerHTML=<span>Under Weight </span>   
        }
    }
})