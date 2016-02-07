var httpManager = require("httpManager");

if (OS_ANDROID) {
	$.search.windowSoftInputMode = Ti.UI.Android.SOFT_INPUT_ADJUST_PAN;
}

var dataTitles = [
{
	name : "Find Us",
	view : "findUs"
},

{
	name : "Deals",
	view : "deals"
},

{
	name : "Testimonials",
	view : "testmonials"
},

{
	name : "Loyalty",
	view : "loyalty"
},

{
	name : "Be Social",
	view : "beSocial"
},

{
	name : "Before & After",
	view : "beforeAfter"
},


{
	name : "About Us",
	view : "aboutUs"
},

{
	name : "Services for dermatology",
	view : "services"
},

{
	name : "Services for dental",
	view : "services"
},

];

var data =[];

for (var i=0; i < dataTitles.length; i++) {
 var row = Titanium.UI.createTableViewRow({
 	title:dataTitles[i].name,
 	color:'black',
 	height:50,
 	id : i,
 });
 data.push(row);
}

var search = Titanium.UI.createSearchBar({
	barColor : '#DA308A',
	showCancel : true,
	height : 43,
	top : 0,
});

search.addEventListener('cancel', function() {
	search.blur();
});


var listView = Ti.UI.createListView({
	searchView : search,
	caseInsensitiveSearch : true,
	backgroundColor:'white',
	top :"60",
	bottom :"60",
	
});


var listSection = Ti.UI.createListSection(
);

var data = [];
for (var i = 0; i < dataTitles.length; i++) {
	data.push({
		properties : {
			title : dataTitles[i].name,
			searchableText :dataTitles[i].name,
			color :"black",
			height : "40",
		}
	});
}

listSection.setItems(data);

listView.sections = [listSection];

listView.addEventListener('itemclick', function(e){ 
    Alloy.createController(dataTitles[e.itemIndex].view).getView();  
});

$.search.add(listView);


function logoutClicked (e)
{
	httpManager.userLogout(function(response) {
		if(response.success == 1)
		{
		   Alloy.createController('login').getView();
		}
	});	
}

Ti.App.addEventListener('android:back', function() {
	$.search.exitOnClose = true;
	var myActivity = Ti.Android.currentActivity();
	myActivity.finish();
}); 

$.search.open();

