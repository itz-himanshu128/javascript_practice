const obj = {
    username : "Himanshu",
    price_to_pay:999,
    welcome_new_user:function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    },

}
console.log(obj.welcome_new_user());

obj.username="someone"
obj.welcome_new_user()


=()=>{}         // basic decleration of arrow function 

const addTwo=(num1,num2)=>num1+num2                                 // way to declare the function 

const aadTwo2=(num1,num2)=>{                                        // another methord of decleration 
     num1+num2
}

const addTwo3=(num1,num2)=>({username:"himamshu"})                  // for returning a obj we need to use '()' before '{}'
