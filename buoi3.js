const http = require('http');
const os = require('os');
const fs = require('fs/promises');
const path = require('path');
const EventEmitter = require('events');
const { rejects } = require('assert');

// function sum(a, b, fun){
//     let c = 0;
//     setTimeout(() => {
//         c = a+b;
//         fun(c)
//     }, 0);
//     let a = sum(1, 4, function (data){
//         console(data)
//     });
// }

function getUserID(fn){
    setTimeout(() => {
     userID = 10;  
     return new Promise((resolve, rejects)=> {
        resolve(userID);
     });
    });
};
function getPostUser(userID, fun) {
    setTimeout(() => {
        let post = { id: 12, name: 'tung' };
        fun(post);
    });
}

function getCommentPostUser(post) {
    return new Promise((reslove, reject)=>{

    setTimeout(() => {
        let comment = { id: 13, name: 'tung' };
        reslove(comment); 
    });
})
}

// getUserID(userID, function (){
//     getPostUser(userID, function (post){
//         getCommentPostUser(post, function (comment){
//             console.log(comment);
//         });
//     });
// });


// let abc = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hello resolve");
//     }, 0);
// });

// abc
//     .then((data) => {
//         console.log(data);
//         getPostUser(data, function(post){
//             return post;
//         });
//     })
// .then((post) => {
//     getCommentPostUser(post, function (comment){
//         console.log(comment);
//     });
// }).catch((data) => {
//     console.log(data)
// }).finally(()=>{
//     console.log("finally");
// });

async function xyz() {
    let uID = await getUserID();
    let post = await getUserID(uID);
    let comment = await getCommentPostUser(post)
    return comment;
}
xyz().then((data) =>{
    console.log(data);
});