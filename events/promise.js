const promiseone=new Promise(function(resolve,reject){
    //do an async task
    //bd calls, crypto,network

    setTimeout(function(){
console.log('async task is complete');
resolve()
    },1000)
})

promiseone.then(function(){
    console.log("promise consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved");
    
})


const promisethree=new Promise(function(resolve,reject){
    setTimeout(function(){
resolve({username:"chai",email:"some@gai.com"})
    },1000)
})


promisethree.then(function(user){
console.log(user);

})

const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
let error=false
if(!error){
resolve({username:"raj",password:"123"})
}else{
    reject('ERROR:wrong')
}
    },1000)
})

const username=promisefour.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username)=>{
console.log(username);

}).catch(function(error){
    console.log(error);
    
}).finally(()=>{
    console.log("resolve/rejected");
    
})

const promisefive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
        resolve({username:"shivangi",password:"123"})
        }else{
            reject('ERROR:something wrong ')
        }
            },1000)
});

async function consume(){
try {
    const response=await promisefive
    console.log(response);
    
} catch (error) {
    console.log(error);
    
}
}
consume()