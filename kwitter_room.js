const firebaseConfig = {
      apiKey: "AIzaSyD6PJMJRl1ivURELUm9jc-UQmyNB9Rxzyc",
      authDomain: "kwitter-3d2ec.firebaseapp.com",
      databaseURL: "https://kwitter-3d2ec-default-rtdb.firebaseio.com",
      projectId: "kwitter-3d2ec",
      storageBucket: "kwitter-3d2ec.appspot.com",
      messagingSenderId: "925647548190",
      appId: "1:925647548190:web:3bda59c1fbe8fd6546630f"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
