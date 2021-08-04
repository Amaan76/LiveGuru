
var app_firebase = {};

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAzdMTWDALFNqE66B5uKkHKCcDYJyYUG7g",
  authDomain: "liveguru-c03be.firebaseapp.com",
  databaseURL: "https://liveguru-c03be-default-rtdb.firebaseio.com",
  projectId: "liveguru-c03be",
  storageBucket: "liveguru-c03be.appspot.com",
  messagingSenderId: "62489506168",
  appId: "1:62489506168:web:29a640a52ab3c15c7bd88d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
app_firebase = firebase;













var mainApp = {};
var firebase = app_firebase;

b= localStorage.getItem("status")
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
if(document.getElementById("standard").value == "11" || document.getElementById("standard").value == "12"){
  document.getElementById('subject').options[2].style.display = "none";

  }
  else {
 
  
  }
}})
// authentication = firebase.auth().currentUser
// console.log(authentication)


function logOut(){
  firebase.auth().signOut();
     
}

function test(){



  // Or inserted into an <img> element
  // var img = document.getElementById('myimg');
  // img.setAttribute('src', url);



}





















function doit(){ 
firebase.auth().onAuthStateChanged(function(user) {
if (user) {
  // User is signed in.
  var str = user.email
  var str = str.split("@");  
 
 str = str[0]
  var n = str.includes(".");
 if (n == true){
 
   var str = str.replace(".", "");
 }
   
 
     var starCountRef = firebase.database().ref('users/' + str + '/');
     starCountRef.on('value', (snapshot) => {
       
       const data = snapshot.val();
      







      

       subject = localStorage.getItem('subject')
      console.log("media/"+ data.standard +'/'+ subject + '/' + str + "/")
       var storageRef = firebase.storage().ref("media/"+ data.standard +'/'+ subject + '/' + str + "/");
       
storageRef.child("doubt").getDownloadURL()
.then((url) => {
  // `url` is the download URL for 'images/stars.jpg'

  // This can be downloaded directly:



  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("yep")
      // User is signed in.
      var str = user.email
      var str = str.split("@");  
     
     str = str[0]
      var n = str.includes(".");
     if (n == true){
     
       var str = str.replace(".", "");
     }
       

  doubt = document.getElementById("doubt").value    
  file = document.getElementById("fileButton").files.length
  console.log(file)
  if(file == "0"){
   console.log("onlytext")
      firebase.database().ref('doubts/' + subject +"/" + str).set({
      
        doubt:doubt
      });
 
  }
else{
console.log("mediatoo")
    firebase.database().ref('doubts/'+ subject +"/" + str).set({
      doubt:doubt,
      url:url
    });

     
} }
    else {
   
    }
  });
















})
.catch((error) => {
  // Handle any errors
});



  

});
 
}
else {
}












}















)}











function changest(){

  document.location.href = "index.html";
}



function cc(){
  localStorage.setItem("subject", document.getElementById("subject").value)
  window.location.href = window.location.href


}


function cc1(){
  localStorage.setItem("standard", document.getElementById("standard").value)
  window.location.href = window.location.href


}




















// the showing of all doubts



  
  

  

