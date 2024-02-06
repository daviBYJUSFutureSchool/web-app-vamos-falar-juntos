const firebaseConfig = {
    apiKey: "AIzaSyD_uLF9mD2sufDvEQSb4vDc64vFxYbGFHo",
    authDomain: "globalsocial-a7f72.firebaseapp.com",
    projectId: "globalsocial-a7f72",
    storageBucket: "globalsocial-a7f72.appspot.com",
    messagingSenderId: "792191052922",
    appId: "1:792191052922:web:0c89d05d9c5e023baf9fc3"
  };
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("username");
  
  document.getElementById("user_name").innerHTML = "Bem vindo(a) " + user_name + "!";
  
  function addRoom()
  {
      room_name = document.geElementById("room_name").value;
  
      firebase.database().ref("/").child(room_name).update({
          purpose : "adicionar sala"
      });
  
      localStorage.setItem("room_name",  room_name);
  
      window.location = "globalsocial.html";
  }
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot)
  {document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;
  })
  })
  }
    
  
  getData();
  
  function redirectToRoomName(name)
  {
      console.log(name);
      localStorage.setItem("userName");
      localStorage.removeItem("roomName");
      window.location = "index.html";
  }
  
  function logout() {
      localStorage.removeItem("userName");
      localStorage.removeItem("roomName");
      window.location = "index.html";
  }