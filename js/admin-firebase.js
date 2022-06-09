          // import {emailSignin} from 'login'
          // console.log("haha 16",emailSignin);
            var database = firebase.database();

            //==========================================The Refreneces=====================================================
            var j=0;
            const db = firebase.firestore();
            function writeUserData(email,name,userId,loca){
              db.collection("Users/").doc(`${++j}`).set({
              
                infoUser:{
                  email:email,
                  name:name,
                  userId:userId,
                  location:loca
                },
                client:{
                    
                }
              
                })
                .then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });

            
          //  Add admin
                    // db.collection("admin/").doc("info_admin").set({                                     
                    //   admin:{
                    //     email:email,
                    //     name:name,
                    //     userId:userId
                    //   }
                    // })
                    // .then((docRef) => {
                    //     console.log("Document written with ID: ", docRef.id);
                    // })
                    // .catch((error) => {
                    //     console.error("Error adding document: ", error);
                    // });
           
            }
/* 

              var i=0;
              const db = firebase.firestore();
              function writeUserData(email,name,userId,loca){
                db.collection("users/").add({
                user:{
                  infoUser:{
                    email:email,
                    name:name,
                    userId:userId,
                    location:loca
                  },
                  client:{
                      
                  }
                }
                  })
                  .then((docRef) => {
                      console.log("Document written with ID: ", docRef.id);
                  })
                  .catch((error) => {
                      console.error("Error adding document: ", error);
                  });

              
            //  Add admin
                      // db.collection("admin/").doc("info_admin").set({                                     
                      //   admin:{
                      //     email:email,
                      //     name:name,
                      //     userId:userId
                      //   }
                      // })
                      // .then((docRef) => {
                      //     console.log("Document written with ID: ", docRef.id);
                      // })
                      // .catch((error) => {
                      //     console.error("Error adding document: ", error);
                      // });
             
              } */


              function add_user_admin(email,name,userId,loca){

                db.collection("admin/").doc("list_user/").update({  
                  
                   [userId]:{
                    email:email,
                    name:name,
                    userId:userId,
                    location:loca
                   }

                    })
                    .then((docRef) => {
                        console.log("Document written with ID: ", docRef.id);
                    })
                    .catch((error) => {
                        console.error("Error adding document: ", error);
                    });
              }
              var name,email,userId,loca,pass;
              var currentUser;
              
                //////////////////////////////////////////////////
                function onClick(){
                  var name=document.getElementById('userInp').value;
                  var email=document.getElementById('emailInp').value;
                  var userId=document.getElementById('username').value;
                  var pass=document.getElementById('passInp').value;
                  var loca=document.getElementById('location').value;
                  //thêm vào firestore
                  //thêm vào authentication
                  firebase.auth().createUserWithEmailAndPassword(email, pass)
                  .then((userCredential) => {
                    // Signed in 
                    // var user = userCredential.user;
                    writeUserData(email,name,userId,loca);
                    add_user_admin(email,name,userId,loca);
                    alert("Thêm User Thành Công ! ")
                  })
                  .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode);
                    console.log(errorMessage);
                  }); 
                }

                //đăng xuất trang admin
                function signOut(){
                  localStorage.removeItem('user');
                  localStorage.removeItem('search');
                  localStorage.removeItem('userIdlogin');
                  state=localStorage.getItem('user');
                  if(state==null)
                  {
                    window.location.replace('search.html');
                  }
              }
             
              //Hover element & click
              var list_admin = document.querySelector(".list-user-admin");
              var signout_admin = document.querySelector(".signout-admin");
              var add_admin=document.querySelector(".add-user-admin");
              
              var page_search=document.querySelector(".page-search");
              
              var box_register=document.querySelector(".box-register");
              var page_search1=document.querySelector(".page-search1");
              var wrappper_list_admin=document.querySelector(".wrappper-list-admin");
                 list_admin.onclick = function() {
                    list_admin.classList.add("border-txt");
                    add_admin.classList.remove("border-txt");
                    signout_admin.classList.remove("border-txt");
                    page_search.style.display = "none";
                    box_register.style.display = "none";
                    page_search1.style.display = "block";
                   wrappper_list_admin.style.display = "block";
                };
                signout_admin.onclick = function() {
                  list_admin.classList.remove("border-txt");
                  add_admin.classList.remove("border-txt");
                  signout_admin.classList.add("border-txt");
                };
                add_admin.onclick = function() {
                  list_admin.classList.remove("border-txt");
                  add_admin.classList.add("border-txt");
                  signout_admin.classList.remove("border-txt");
                  page_search1.style.display = "none";
                  wrappper_list_admin.style.display = "none";
                  page_search.style.display = "block";
                  box_register.style.display = "block";
                };


                //List user


                // Kiểm tra thông tin user nhập vào và hiện thị data tương ứng với user đó
                var arrayList=[];
                  db.collection("Users/").get().then((querySnapshot) => {
                   
                  querySnapshot.forEach((doc) => {
                      list=doc.data();
                      arrayList.push(list);
                  });
                  var listCars = document.querySelector(".list-cars-element");
                //   console.log(querySnapshot,"query");
                    var htmls="",html,i=0,j=0;
                     arrayList.map((user)=>{
                        i++;
                        // infoUser=Object.values(user.infoUser);
                        // console.log(infoUser);
                        client=Object.values(user.client);
                        client.forEach(() =>{
                          j++;
                          });
                          html =`
                            <tr class="get-db" >
                                <td>${i}</td>
                                <td class="txt-list-car car2 ">${user.infoUser.name}</td>
                                <td class="txt-list-car ">${user.infoUser.email}</td>
                                <td class="txt-list-car car4 ">${user.infoUser.location}</td>
                                <td>${j}</td>
                            </tr> 
                                `;
                            htmls+=html;
                            j=0;
                  })
                   listCars.innerHTML=htmls;
              });

