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