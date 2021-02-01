//async & await
//clear style of using promise

//1. async
async function fetchUser(){
    //만약 10초이상 걸리는 코드라면?
    return 'luke';
}
const user = fetchUser();
user.then(console.log);
console.log(user);

//2. await
function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function getApple(){
    await delay(1000);
    // throw 'error';
    return '🍏';
}
async function getBanana(){
    await delay(1000);
    return '🍌';
}
//콜백지옥이다... 수정부탁한다...💦

// function pickFruit(){
//     return getApple().then(apple=>{
//               return  getBanana().then(banana => `${apple} and ${banana}`)
//             });
// }

//async await을 이용해 콜백지옥 탈출...
//하지만 직렬구조이기때문에 병렬구조로 변경해보자

// async function pickFruit(){
//     const applePromise = getApple();
//     const bananaPromise = getBanana();
//     const apple = await getApple();
//     const banana = await getBanana();
//     return `${apple} and ${banana}`;
// }
// pickFruit().then(console.log);


// 3.useful Promise APIs
//여러가지 프로미스 api를 이용해서 1초씩 기다리지말고 합쳐서 한번에 출력이 가능하다.
function pickAllFruits(){
    return Promise.all([getApple(),getBanana()]).then(fruits=>
        fruits.join(' + ')
        )
}
pickAllFruits().then(console.log);
//기존에 1초 + 1초 = 2초를 기다릴 필요없이 한번에 1초만에 같이 출력이 되는것을 볼 수 있다. 

//사이트참조
//https://www.notion.so/07dfed016e914c3a8612fc76dd1542f0?v=c6feaeb5b46e4fdeb1e756113cb529c1
