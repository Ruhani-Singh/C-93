
//ADD YOUR FIREBASE LINKS HERE
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyDiwar5CZ6xuN1cykVpA4tSOQhDAQAFQFg",
      authDomain: "chatapp-cfcf3.firebaseapp.com",
      databaseURL: "https://chatapp-cfcf3.firebaseio.com",
      projectId: "chatapp-cfcf3",
      storageBucket: "chatapp-cfcf3.appspot.com",
      messagingSenderId: "234478743567",
      appId: "1:234478743567:web:95ac0f080982b98b7ab37a",
      measurementId: "G-Z0T0PDSL09"
    };

    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " ! ";


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;


      });});}
getData();
