class User{
    constructor(){

    }

     async signin(u,p){
        this.username = u;
        this.password = p;
        let actaul_data = JSON.stringify(this)
        try{
            let res = await fetch('https://masai-api-mocker.herokuapp.com/auth/login',{
                method: 'POST',

                body: actaul_data,

                headers:{
                    'Content-Type':'application/json',
                },
            });
            let data = await res.json()
            console.log(data);
            let token = data.token;
            console.log(token);
            getProfile(this.username,token)
            
            window.location.href='index.html'
           

        }catch(err){
            console.log(err);
        }
     }
     

}
let u1 = new User()

function Login(){
    function getInputValue(id){
        let value = document.getElementById(id).value
        return value
    }
    const username = getInputValue('username')
    const password = getInputValue('password')
    u1.signin(username,password)
}
async function getProfile(username,token){
    let profile_url = `https://masai-api-mocker.herokuapp.com/user/${username}`
    let res=  await fetch(profile_url,{
        headers:{
            'Content-Type':'application/json',
            Authorization: `Beares${token}`,
        },
    });
    let data = await res.json()
    console.log(data);
}
