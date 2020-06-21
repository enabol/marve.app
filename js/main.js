  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyByG3HLq7aYF4IWl4jUqqm74dOCVBCczj0",
    authDomain: "marve-app.firebaseapp.com",
    databaseURL: "https://marve-app.firebaseio.com",
    projectId: "marve-app",
    storageBucket: "marve-app.appspot.com",
    messagingSenderId: "751927375212",
    appId: "1:751927375212:web:cb92ee257cf0916d216f49",
    measurementId: "G-X8K9JNBV53"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

	

	var userRef = firebase.database().ref('subscribers');


document.getElementById('subscribe').addEventListener('submit', submitForm);


function submitForm(e){
	e.preventDefault();
	
	
	console.log('123');
	
	var fname = getValue('firstname');
	var lname = getValue('lastname');
	var email = getValue('email');
	
	saveUser(fname, lname, email);
	
	document.getElementById('firstname').value = "";
	document.getElementById('lastname').value = "";
	document.getElementById('email').value = "";
	
	document.getElementById('notification').style.display = "block";
	
	setTimeout(function(){
			document.getElementById('notification').style.display = "none";

	}, 3000);
	
	
	
	
}


function getValue(id){
	
	return document.getElementById(id).value;
}


function saveUser(fname, lname, email){
	var newUserRef = userRef.push();
	newUserRef.set({firstname: fname, lastname: lname, email: email});
}

