var config = {
  apiKey: "AIzaSyDFI9bgpwNf2PJng4NLeo9S8F3Hq_Po-Dc",
  authDomain: "rps-multiplayer-a9d84.firebaseapp.com",
  databaseURL: "https://rps-multiplayer-a9d84.firebaseio.com",
  projectId: "rps-multiplayer-a9d84",
  storageBucket: "rps-multiplayer-a9d84.appspot.com",
  messagingSenderId: "958621680901"
};
firebase.initializeApp(config);

var player = {

  name: "",
  wins: 0,
  losses: 0,
  ties: 0,
  choice: 3
}

var userOneJoin = false;
var userTwoJoin = false;
