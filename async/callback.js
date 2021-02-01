'use strict';

//호이스팅 => 변수나 함수선언식에서 코드를 최상단으로 위치시키는 것을 말한다.
console.log('1');
setTimeout(()=>{
    console.log('#')
},1000);
console.log('2');
console.log('3');

//sync callback : 동기적실행콜백
function printFunc(print){
    print();
}
printFunc(()=>{
    console.log('first hello');
});
//async callback : 비동기적실행콜백
function printFuncDelay(print,timeout){
    setTimeout(print,timeout);
}
printFuncDelay(()=>{
    console.log('async callback');
},3000);


//콜백헬(callback hell) example
class UserStorage{
    loginUser(id, pw, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id === 'luke' && pw === '1234') || (id === 'jo' && pw === '1111')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        }, 2000)
    }
    getRoles(user,onSuccess, onError){
        setTimeout(()=>{
            if(user === 'luke'){
                onSuccess({name: 'luke', role:'admin'});
            }else{
                onError(new Error('no access'));
            }
        },1000);
    }
}
const userStorage = new UserStorage();
const id = prompt('enter your id');
const pw = prompt('enter your password');
userStorage.loginUser(
    id,
    pw,
    user =>{
        userStorage.getRoles(
            user,
            userWithRoles =>{
                alert(
                    `hello ${userWithRoles.name}, you have a ${userWithRoles.role} role`
                );
            },
            error =>{
                alert(error);
            }
        );
    },
    error =>{
        alert(error);
    }
);