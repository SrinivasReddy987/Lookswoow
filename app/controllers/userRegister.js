
function submitButtonClicked() {
	var username = $.userNameField.value;
	var password = $.passwordField.value;
	var email = $.emailField.value;
	if(username === '' || password === '' || email === '')
	{
		alert("Please enter all fields");
		return;
	}
	else
	{
		var str = email;
        var filter = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (filter.test(str)) {
           // testresults = true;
        } else {
            alert("Please enter valid email id");
		    return;
        }
     }
	
	if(password !== $.confirmPasswordField.value)
	{
	  alert("Password and ConfirmPassword not matched");
	  return;	
	}

	var xhr = Titanium.Network.createHTTPClient();
	xhr.onload = function(e) {
		if (this.responseText != null) {
			
			var jsObj = JSON.stringify(this.responseText);
			var data = JSON.parse(this.responseText);
			
		   if(data.success == 1)
		   {
			 alert("User Sucessfully Registred");
			// $.userRegister.close();
		   }
		   else
		   {
		   	alert(data.error_msg);
		   }
		} else {
			Ti.API.info("Response is Empty");
		}
	};

	xhr.onerror = function(e) {
	   alert("Error");
	};
		
	xhr.open('GET', 'http://dmsapiensdubai.com/lookswoow/appcms/?tag=register&name='+ username +'&email=' + email +'&password='+password);
	xhr.send();	
}


function logoutClicked (e)
{
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onload = function(e) {
		if (this.responseText != null) {
			
			var jsObj = JSON.stringify(this.responseText);
			var data = JSON.parse(this.responseText);
			
		   if(data.success == 1)
		   {
			 Alloy.createController('login').getView();
			 $.userRegister.close(); 
		   }
		   else
		   {
		   	alert("Incorrect email or password!"); 
		   }
		} else {
			Ti.API.info("Response is Empty");
		}
	};

	xhr.onerror = function(e) {
	   alert("Error");
	};
	
	xhr.open('GET', 'http://dmsapiensdubai.com/lookswoow/appcms/?tag=logout');
	xhr.send();	
}

$.userRegister.open(); 

