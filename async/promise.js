'use strict';

//state: pendind -> fulfilled or rejected
//producer vs consumer

//1.produce
//새로운 프로미스(new Promise)를 만들때, 엑스큐터가 자동으로 실행되니 유의해서 생성하기 바람
const promise = new Promise((resolve,reject)=>{
    //doing heavy work
    console.log('doing...something');
    setTimeout(()=>{
        resolve('luke');//성공하면 resolve 실패하면 reject
        // reject(new Error('no network'));
    },2000)
});

//2.consumer : then , catch , finally
promise
    .then((value)=>{
        console.log(value);
    })
    .catch(error =>{
        console.log(error);
    })
    .finally(()=>{
        console.log('finally');
    })

    //3.promise chaining
    const fetchNumber = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(1),1000);
    });

    fetchNumber
        .then(num=>num * 2)
        .then(num=>num * 3)
        .then(num =>{
            return new Promise((resolve,reject)=>{
                setTimeout(()=>resolve(num -1),1000);
            });
        })
        .then(num => console.log(num));


//4. error handling
const getChicken = ()=>
    new Promise((resolve, reject) =>{
        setTimeout(()=>resolve('🐓'),1000);
    });
const getEgg = chicken =>
    new Promise((resolve,reject)=>{
        setTimeout(()=>reject(new Error(`error!!! ${chicken} => 🥚`)),1000);
    });
const cook = egg=>
    new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(`${egg} => 🍳`),1000);
    });

getChicken()
.then(chicken => getEgg(chicken))
.catch(error =>{
    return '🥐';
})
.then(egg => cook(egg))
.then(meal => console.log(meal));