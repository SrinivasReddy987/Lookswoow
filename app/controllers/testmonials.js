var httpManager = require("httpManager");
var data = [];
var details = [];

dealsDetails();
function addTableData(){
for (var i=0; i <= 1; i++) {
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
	image : 'services/men.jpg',
	width : 60,
	height : 60,
    left :5
});
anImageView.image = details[i].authorImg;
viewRow.add(anImageView);


var aLabel = Ti.UI.createLabel({
	text : 'Ahmed Al - Rumaihi',
    bottom : 10,
     left :80,
     color : "black"
});
aLabel.text = details[i].authorName;

var labldes = Ti.UI.createLabel({
	text : 'I had an amazing experience with Lookswoow & I would totally recommend it to everyone.',
    top : 10,
    left :80,
    right : 10,
    height : 60,
    font:{fontSize:13},
     color : "black"
});
labldes.text = details[i].authorTestimoni;

viewRow.add(aLabel);
viewRow.add(labldes);
row.add(viewRow);

data.push(row);
}

$.tableView.setData(data);
}

function goBack()
{
	$.testmonials.close();
}

function dealsDetails() {
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onload = function(e) {
		if (this.responseText != null) {
			var jsObj = JSON.stringify(this.responseText);
			var data = JSON.parse(this.responseText);
			details = data.testimonials;
			addTableData();
			
		} else {
			alert("No Data Found");
			Ti.API.info("Response is Empty");
		}
	};

	xhr.onerror = function(e) {
	   alert("Error");
	};
	
	xhr.open('GET', 'http://dmsapiensdubai.com/lookswoow/appcms/json/testimonials.json');
	xhr.send();	
}


function logoutClicked (e)
{
	httpManager.userLogout(function(response) {
		if(response.success == 1)
		{
		   Alloy.createController('login').getView();
		   $.testmonials.close(); 
		   Alloy.Globals.closeDentalServices();
		}
	});	
}



$.testmonials.open(); 


