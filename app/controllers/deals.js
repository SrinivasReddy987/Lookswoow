
var data = [];
var details = [];
var httpManager = require("httpManager");

dealsDetails();

function addTableData(){
for (var i=0; i < details.length ; i++) {
var row = Titanium.UI.createTableViewRow();
var viewRow = Titanium.UI.createView({
    backgroundColor:'#FFDDEE',
    top:5,
    left:5,
    right:5,
    height : 100,
});


// Create an ImageView.
var anImageView = Ti.UI.createImageView({
	image : 'services/teeth.png',
	width : 60,
	height : 60,
    left :5
});

anImageView.image = details[i].serviceImg;
viewRow.add(anImageView);

var aLabel = Ti.UI.createLabel({
	text : 'INVISIBLE DENTAL BRACES',
    top : 15,
     left :80,
     color : "black",
     height :"30"
});

aLabel.text = details[i].serviceName;

var labldes = Ti.UI.createLabel({
	text : 'Self-Legating Dental Braces 3,999/- AED',
    top : 47,
    left :80,
    font:{fontSize:13},
     color : "black"
});

labldes.text = details[i].serviceDesc;
viewRow.add(aLabel);
viewRow.add(labldes);
row.add(viewRow);

data.push(row);
}
$.tableView.setData(data);
}


function goBack()
{
	$.deals.close();
}

function dealsDetails() {
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onload = function(e) {
		if (this.responseText != null) {
			var jsObj = JSON.stringify(this.responseText);
			var data = JSON.parse(this.responseText);
			details = data.specialdeals;
			addTableData();
		} else {
			alert("No Data Found");
			Ti.API.info("Response is Empty");
		}
	};

	xhr.onerror = function(e) {
	   alert("Error");
	};
	
	xhr.open('GET', 'http://dmsapiensdubai.com/lookswoow/appcms/json/specialdeals.json');
	xhr.send();	
}


function logoutClicked (e)
{
	httpManager.userLogout(function(response) {
		if(response.success == 1)
		{
		   Alloy.createController('login').getView();
		   $.deals.close(); 
		   Alloy.Globals.closeDentalServices();
		}
	});	
}


$.deals.open(); 

