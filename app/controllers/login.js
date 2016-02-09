function registerButtonClicked() {
	Alloy.createController('userRegister').getView();
	$.login.close();
}

function loginButtonClicked() {
	Ti.App.Properties.setString('serviceTab', 'dermatology');
	var username = $.userNameField.value;
	var password = $.passwordField.value;
	if(password === "" || username === "")
	{
		alert("Please enter username and password fields");
		return;
	}
	else
	{
		var str = username;
        var filter = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (filter.test(str)) {
           // testresults = true;
        } else {
            alert("Please enter valid email id");
		    return;
        }
     }

	var xhr = Titanium.Network.createHTTPClient();
	xhr.onload = function(e) {
		if (this.responseText != null) {
			
			var jsObj = JSON.stringify(this.responseText);
			var data = JSON.parse(this.responseText);
			
		   if(data.success == 1)
		   {
		   	Ti.App.Properties.setString('loggedInUserName',$.userNameField.value);
		   	Ti.App.Properties.setString('loggedInPassword',$.passwordField.value);
		   	Ti.App.Properties.setString('appoinmentNo',data.user.appointments);
		   	Ti.App.Properties.setString('userName',data.user.name);
		   	Ti.App.Properties.setString('userEmail',data.user.email);
			 Alloy.createController('home').getView();
			 $.login.close(); 
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
	
	xhr.open('GET', 'http://dmsapiensdubai.com/lookswoow/appcms/?tag=login&email='+ username +'&password=' + password);
	xhr.send();	
}

$.login.open(); 


