var config = {
    apiKey: "AIzaSyBVlO9P1EbwbfzcOXkFYJ-c_XD2hb_pUxQ",
    authDomain: "submitterform-f9681zzb.firebaseapp.com",
    databaseURL: "https://submitterform-f9681zzb.firebaseio.com",
    projectId: "submitterform-f9681zzb",
    storageBucket: "submitterform-f9681zzb.appspot.com",
    messagingSenderId: "864674195223"
  };
  firebase.initializeApp(config);

var messagingRef = firebase.database().ref('comments');

document.getElementById('fform').addEventListener('submit', submitter);

function submitter(e){
	e.preventDefault();
	
	var name = fgetvalue('fname');
	var email = fgetvalue('femail');
	var phone = fgetvalue('fphone');
	var company = fgetvalue('fcompany');
	var comments = fgetvalue('fcomments');
	
	
	saveform(name, email, phone, company, comments);
	
	document.querySelector('.formsent').style.visibility = 'visible';
	document.querySelector('.formsent').style.opacity = '1';
	setTimeout(function(){
	document.querySelector('.formsent').style.visibility = 'hidden';
	document.querySelector('.formsent').style.opacity = '0';
	},5000);
	
	document.getElementById('fform').reset();
}

function fgetvalue(id){
	return document.getElementById(id).value;
}

function saveform(name, email, phone, company, comments){
	var formreffer = messagingRef.push();
	formreffer.set({
		name : name,
		email : email,
		phone : phone,
		company : company,
		comments : comments
	});
	
}