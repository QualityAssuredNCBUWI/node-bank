'use strict';

var loginUser = function(email, password){
	fetch("http://localhost:3000/login",
	{
		credentials: "same-origin",
		headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
		},
		method: "POST",
		body: JSON.stringify({email: email, password: password})
	})
	.then(response => response.json())
	.then(data => {return data})
	.catch(function(err){ return {"status":"error"} })	
}

var registerUser = function(name, email, password, card_number){
	fetch("http://localhost:3000/register",
	{
		credentials: "same-origin",
		headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
		},
		method: "POST",
		body: JSON.stringify({name: name, card: card_number, email: email, password: password})
	})
	.catch(function(err){ return {"status":"error"} })
}

var getUser = function(card_number){
	fetch(`http://localhost:3000/api/user/${card_number}`,
	{
		headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
		},
		method: "GET",
	})
	.then(response => response.json() )
	.then(response => { return response })
	.catch(function(err){ return err })
}

var makeWithdrawal = function(card_number, money){
	fetch("http://localhost:3000/member/transact",
        {
			credentials: "same-origin",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({action: "WITHDRAW", card: card_number, amount: money})
		})
        .catch(function(err){ return {"status":"error"} })	
}

var makeDeposit = function(card_number, money){
	fetch("http://localhost:3000/member/transact",
        {
			credentials: "same-origin",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({action: "DEPOSIT", card: card_number, amount: money})
		})
        .catch(function(err){ return {"status":"error"} })
};

var checkBalance = function(card_number){
	fetch(`http://localhost:3000/api/user/${card_number}`,
        {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "GET",
		})
		.then(response => response.json() )
		.then(response => { return response.money })
        .catch(function(err){ return err })
	
}

var isEmailValid = function(emailAddr) {
	if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailAddr))
	{
	    return true;
	}
	return false;
};

var verifyPassword = function(pw) {
	var response = {
		isValid : false,
		message : ""
	};
	//check empty password field  
	if(pw == "") {  
		response.message = "Password is empty";  
	}  

	//minimum password length validation  
	if(pw.length < 8) {  
		response.message = "Password length must be atleast 8 characters";
	}  
	else{
		//maximum length of password validation  
		if(pw.length > 15) {  
			response.message = "Password length must not exceed 15 characters";  
		}
	}

	response.isValid = true;

	return response;
};

