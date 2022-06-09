// document.querySelector('.form-login').addEventListener('submit',(event)=>{
//     console.log(event.target);
// })

// var firebaseConfig = {
//     apiKey: "AIzaSyCHRUEWCBUcFyqLkFqARDr4FEeulKQmZTo",
//     authDomain: "license-plate-e43f5.firebaseapp.com",
//     databaseURL: "https://license-plate-e43f5-default-rtdb.firebaseio.com",
//     projectId: "license-plate-e43f5",
//     storageBucket: "license-plate-e43f5.appspot.com",
//     messagingSenderId: "934388900330",
//     appId: "1:934388900330:web:7ba5b96935fceab4279293",
//     measurementId: "G-6G1VJ3X9ZY"
// };

const firebaseConfig = {
    apiKey: "AIzaSyCZ1q9PstgO7K9loJnAEEd3TWqevBM3L70",
    authDomain: "thu-phi-do-xe-29b78.firebaseapp.com",
    databaseURL: "https://thu-phi-do-xe-29b78-default-rtdb.firebaseio.com",
    projectId: "thu-phi-do-xe-29b78",
    storageBucket: "thu-phi-do-xe-29b78.appspot.com",
    messagingSenderId: "465302228955",
    appId: "1:465302228955:web:0cec0da7104afd1be261fe",
    measurementId: "G-CHRVEKR8RS"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var emailSignin,passSignin,btnSignin;
function onClicklogin(){
   localStorage.setItem('search',true);
var currentUser;
 emailSignin=document.getElementById('userIdlogin').value;
 passSignin=document.getElementById('passlogin').value;

var check=false;
if(emailSignin=="admin@gmail.com"){
    
    firebase.auth().signInWithEmailAndPassword(emailSignin, passSignin)
    .then((userCredential) => {
        localStorage.setItem('user',true);
        localStorage.setItem('userIdlogin',emailSignin);
        alert("Đăng nhập Admin thành công");
        if(localStorage.getItem('user')){
            window.location.replace('admin.html')
        }
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Đăng nhập thất bại")
    });
    }
else {
    // localStorage.setItem('user',true);
    firebase.auth().signInWithEmailAndPassword(emailSignin, passSignin)
    .then((userCredential) => {
        localStorage.setItem('user',true);   
        localStorage.setItem('userIdlogin',emailSignin);
        alert("Đăng nhập User thành công");
        if(localStorage.getItem('user')){
            window.location.replace('dashboard.html')
        }          
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Đăng nhập thất bại")
    });
}
}



// 