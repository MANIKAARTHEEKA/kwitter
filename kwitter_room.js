const firebaseConfig = {
      apiKey: "AIzaSyCfBq0N3g7mVRhzSBvJBAvFURMp71PXHa4",
      authDomain: "class-test-f8b99.firebaseapp.com",
      projectId: "class-test-f8b99",
      storageBucket: "class-test-f8b99.appspot.com",
      messagingSenderId: "128717604671",
      appId: "1:128717604671:web:d5b325ae1ebd3d37c4758a",
      measurementId: "G-SWRNGQFTQV"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
