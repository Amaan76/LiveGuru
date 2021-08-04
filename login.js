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


var database = firebase.database();


const auth = firebase.auth();
var user = firebase.auth().currentUser
	
function signUp(){
  i = localStorage.setItem("ft", "true");
  a = localStorage.setItem("status", "false")
  z = localStorage.setItem("count", "10000000")


  var phone = document.getElementById("Phone-Number");
  

  var name = document.getElementById("full-name");
  var email = document.getElementById("email"); 
  var password = document.getElementById("password");
  var standard = document.getElementById("standard").value;
  

  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));



  
var str = email.value
 var str = str.split("@");  

str = str[0]
 var n = str.includes(".");
if (n == true){

  var str = str.replace(".", "");
}
  


    firebase.database().ref('users/' + str).set({
      name: name.value,
      email: email.value,
      password: password.value,
 
      phone: phone.value,
      standard: standard
    })
  

}



function signIn(){
  a = localStorage.setItem("status", "false")
  var email = document.getElementById("emailsi");
  var password = document.getElementById("passwordsi");
  
  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
  
  
  
  
}


function signOut(){
  
  auth.signOut();

  
}



auth.onAuthStateChanged(function(user){

  if(user){



  

    //Take user to a different or home page
    document.location.href = "index.html";
    //is signed in
  
  }else{

    
    
 
    //no user is signed in
  }
  
  
  
});








  //   var ui = new firebaseui.auth.AuthUI(firebase.auth());
  // var uiConfig = {
  //   callbacks: {
  //     signInSuccessWithAuthResult: function(authResult, redirectUrl) {
  //       // Usery successfull signed in.
  //       // Return type determines whether we continue the redirect automatically
  //       // or whether we leave that to developer to handle.
  //       return true;
  //     },
  //     uiShown: function() {
  //       // The widget is rendered.
  //       // Hide the loader.
  //       document.getElementById('loader').style.display = 'none';
  //     }
  //   },
  //   // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  //   signInFlow: 'popup',
  //   signInSuccessUrl: 'index.html',
  //   signInOptions: [
  //     // Leave the lines as is for the providers you want to offer your users.
  //     firebase.auth.EmailAuthProvider.PROVIDER_ID,

  //   ],
  //   // Terms of service url.
  //   tosUrl: '<contact.html>',
  //   // Privacy policy url.
  //   privacyPolicyUrl: 'contact.html'
  // };
  // ui.start('#firebaseui-auth-container', uiConfig);
