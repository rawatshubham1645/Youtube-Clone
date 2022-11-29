class User {
    constructor(){
        // this.name = n;
    }
 #checkUsername(username){
    let value = username.includes('#') ? false:true
    return value
}
#checkPassword(password){
    let value = password.length>7?true:false
    if(!value){
        alert('enter At leat * characters')
    }
    return value
}

   async signup(n,e,u,p,m,d){

      let isValidated =   this.#checkUsername(u) && this.#checkPassword(p)

      if(isValidated){
        this.name = n,
        this.email = e,
        this.username = u,
        this.password = p,
        this.mobile = m,
        this.description = d
        let actaul_data = JSON.stringify(this)
        try{
            let res = await fetch('https://masai-api-mocker.herokuapp.com/auth/register',{
                method: 'POST',

                body: actaul_data,
        
                headers:{
                    'Content-Type':'application/json',
                },
            })
            let data = await res.json()
            console.log(data);
        }catch(err){
            console.log(err);
        }


      }
    }

}

let u1 = new User()
// console.log(u1);
// u1.#checkPassword()
function Register(){
    
    function getInputValue(id){
        let value =document.getElementById(id).value;
        return value;
    }
    const name  = getInputValue('name');
    const email = getInputValue('email')
    const password = getInputValue('username')
    const username = getInputValue('password')
    const mobile = getInputValue('mobile')
    const description = getInputValue('description')


    u1.signup(name,email,username,password,mobile,description)
}