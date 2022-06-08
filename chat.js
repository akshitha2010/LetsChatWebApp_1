// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var firebaseConfig = {
    apiKey: "AIzaSyDUmUFgjy35nXEHETrJOMI0rjCICGZgmWI",
    authDomain: "letschatwebapp-41363.firebaseapp.com",
    projectId: "letschatwebapp-41363",
    storageBucket: "letschatwebapp-41363.appspot.com",
    messagingSenderId: "498537555866",
    appId: "1:498537555866:web:544458a485732446b8bc23",
    measurementId: "G-PLE8RC8Q2F"
  };
  
  

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
   
}



