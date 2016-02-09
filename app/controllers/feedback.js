var httpManager = require("httpManager");
Alloy.Globals.isFeedback = true;

if (OS_ANDROID) {
	$.feedback.windowSoftInputMode = Ti.UI.Android.SOFT_INPUT_ADJUST_PAN;
}

var clickevent = function(e) {
	// e.source.focus();
	//alert('hi');
};

$.nameTxt.value = Ti.App.Properties.getString('userName');
$.emailtxt.value = Ti.App.Properties.getString('userEmail');

function submitButtonClicked() {
	if ($.nameTxt.value === '' || $.emailtxt.value === '' || $.urlTxt.value === '' || $.passwordTxt.value === '' || $.phoneTxt.value === '' || $.genderTxt.value === '' || $.birthdayTxt.value === '' || $.satisfyTxt.value === '') {
		alert("Please enter all fields");
		return;
	} else {
		var str = $.emailtxt.value;
		var filter = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		if (filter.test(str)) {
			// testresults = true;
		} else {
			alert("Please enter valid email id");
			return;
		}
	}

	var emailDialog = Ti.UI.createEmailDialog();
	emailDialog.subject = "Hello from Titanium";
	emailDialog.toRecipients = ['foo@yahoo.com'];
	emailDialog.messageBody = '<b>Appcelerator Titanium Rocks!</b>';
	emailDialog.open();
}

function logoutClicked(e) {
	httpManager.userLogout(function(response) {
		if (response.success == 1) {
			Alloy.createController('login').getView();
			$.feedback.close();
		}
	});
}

Alloy.Globals.closeFeedbackWindow = function() {
	$.feedback.close();
};

$.feedback.open();

