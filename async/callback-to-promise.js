'use strict';

//콜백헬(callback hell) example
class UserStorage{
    loginUser(id, pw){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(
                    (id === 'luke' && pw === '1234') || (id === 'jo' && pw === '1111')
                ){
                    resolve(id);
                }else{
                    reject(new Error('not found'));
                }
            }, 2000)
        });
    }

    getRoles(user){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(user === 'luke'){
                    resolve({name: 'luke', role:'admin'});
                }else{
                    reject(new Error('no access'));
                }
            },1000);
        });
    }
}
const userStorage = new UserStorage();
const id = prompt('enter your id');
const pw = prompt('enter your password');
userStorage
    .loginUser(id,pw)
    .then(userStorage.getRoles)
    .then(user => alert(`hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);



    
// userStorage.loginUser(
//     id,
//     pw,
//     user =>{
//         userStorage.getRoles(
//             user,
//             userWithRoles =>{
//                 alert(
//                     `hello ${userWithRoles.name}, you have a ${userWithRoles.role} role`
//                 );
//             },
//             error =>{
//                 alert(error);
//             }
//         );
//     },
//     error =>{
//         alert(error);
//     }
// );