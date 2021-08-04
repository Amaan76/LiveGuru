
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
        if(data.standard == "11" || data.standard == "12"){
        document.getElementById('subject').options[2].style.display = "none";
        }
      })
    }
    else {
   
        document.location.href = "SignUp.html";
    }
  });
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
        if(data.standard == "11"){
        document.getElementById('subject').options[2].style.display = "none";
        }







         file = document.getElementById("fileButton").files.length

         subject = document.getElementById("subject").value

         var storageRef = firebase.storage().ref("media/"+ data.standard +'/'+ subject + '/' + str + "/");
         
      
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {

            var str = user.email
            var str = str.split("@");  
           
           str = str[0]
            var n = str.includes(".");
           if (n == true){
           
             var str = str.replace(".", "");
           }

           doubt = document.getElementById("doubt").value    

           var starCountRef = firebase.database().ref('users/' + str + '/');
           starCountRef.on('value', (snapshot) => {
             const data = snapshot.val();
            fullname = data.name;

            if(file == "0"){
              console.log("onlytext")
              console.log('doubts/' + subject +"/" + str)
         
                 firebase.database().ref('doubts/' + data.standard + '/' + subject +"/" + str).set({
                   linkId : user.uid,
                   name : fullname,
                   doubt:doubt
                 });
                 document.location.href="videochat.html"

             }
            else{


              storageRef.child("doubt").getDownloadURL()
              .then((url) => {
                // `url` is the download URL for 'images/stars.jpg'
            
                // This can be downloaded directly:
            
            
            
               
                    console.log("yep")
                    // User is signed in.
              
            
            
            
                    
            
               
               
                console.log(file)
            
                
            
              console.log("mediatoo")
              console.log('doubts/' + data.standard + '/' + subject +"/" + str)
                  firebase.database().ref('doubts/'+ data.standard + '/' + subject +"/" + str).set({
                    linkId : user.uid,
                    name : fullname,
                    doubt:doubt,
                    url:url
                  });
             
                   
              }) 
               
                };
            })
      }
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
          })
   
        
        
        
            
         
          
           
          }
         
        
        
        
        
        
        
        
        
        
        
        
          
       )}






  
}






 

  
  





  )}




function change(){

  document.location.href = "index-teachers.html";
}
































  // the showing of all doubts


