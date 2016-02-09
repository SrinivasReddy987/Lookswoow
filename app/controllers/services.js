var httpManager = require("httpManager");
Alloy.Globals.isServices = true;
serviceDetails();
var serviceData = [];
var data = [];
var dataImages = [
 "/services/services1.png",
 "/services/services2.png",
 "/services/services4.png",
 "/services/services3.png",
 "/services/services5.png",
 "/services/services6.png",
 "/services/services8.png",
 "/services/services7.png",
 "/services/services9.png",
];

var index = 0;
for (var i = 0; i <= 4; i++) {
    var row = Titanium.UI.createTableViewRow();
	var viewRow = Titanium.UI.createView({
		top : 5,
		left : 5,
		right : 5,
		height : 140,
	});
	
	var leftView = Titanium.UI.createView({
		backgroundColor : '#FFDDEE',
		left :0,
		height : "100%",
		width :"49%"
	});
	
	var leftimage = Ti.UI.createImageView({
		height : "100%",
		width : "100%",
		image : '/services/services1.png',
	});
	
	leftimage.image = dataImages[index];
	leftimage.id = index;
	leftimage.addEventListener('click', function(e){
      	Alloy.createController('serviceDetails',serviceData[e.source.id]).getView();
    });
	
	leftView.add(leftimage);
	viewRow.add(leftView);
	
	if(i != 4)
	{
		var rightView = Titanium.UI.createView({
		backgroundColor : '#FFDDEE',
		right :0,
		height : "100%",
		width :"49%"
	});

		var rightImage = Ti.UI.createImageView({
		height : "100%",
		width : "100%",
		image : '/services/services1.png',
	  });
	  rightImage.image = dataImages[index + 1];
	  rightImage.id = index + 1;
	  rightImage.addEventListener('click', function(e){
      	Alloy.createController('serviceDetails',serviceData[e.source.id]).getView();
      });
	  
	  rightView.add(rightImage);
	  viewRow.add(rightView);
	  index = index + 2;	
	}
	$.scrollView.add(viewRow);
	//row.add(viewRow);
	//data.push(row);
}

//$.tableView.setData(data);

function goBack()
{
	$.services.close();
}

function serviceDetails() {
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onload = function(e) {
		if (this.responseText != null) {
			
			var jsObj = JSON.stringify(this.responseText);
			var data = JSON.parse(this.responseText);
			serviceData = data.dentalservices;
		} else {
			Ti.API.info("Response is Empty");
		}
	};

	xhr.onerror = function(e) {
	   alert("Error");
	};
	
	xhr.open('GET', 'http://dmsapiensdubai.com/lookswoow/appcms/json/dental-services.json');
	xhr.send();	
}


function logoutClicked (e)
{
	httpManager.userLogout(function(response) {
		if(response.success == 1)
		{
		   Alloy.createController('login').getView();
		   $.services .close();
		}
	});	
}

Alloy.Globals.closeServicesWindow = function(){
	$.services .close();
};

$.services.open();
