//your JS code here. If required.
function fun() {
	let firstName = document.getElementsByName("First Name")[0].value;
	let lastName=document.getElementsByName("Last Name")[0].value;
	let num=document.getElementsByName("Phone Number")[0].value;
	let mail=document.getElementsByName("Email ID")[0].value;
	
	alert(`First Name: ${firstName} Last Name: ${lastName} Number: ${num} Email ID: ${mail}`);
}