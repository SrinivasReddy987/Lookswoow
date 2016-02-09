if (Ti.App.Properties.getString('serviceTab') == "dental") {
	$.servicesImage.image = "/tabicons/dermatology_tab.png";
} else {
	$.servicesImage.image = "/tabicons/dental_tab.png";
}

function openHome() {
	if (Alloy.Globals.isHome == false) {
		Alloy.createController('home').getView();
	}
	if (Alloy.Globals.isSearch == true) {
		Alloy.Globals.isSearch = false;
		Alloy.Globals.closeSearchWindow();
	}
	if (Alloy.Globals.isPromotions == true) {
		Alloy.Globals.isPromotions = false;
		Alloy.Globals.closePromotionsWindow();
	}
	if (Alloy.Globals.isFeedback == true) {
		Alloy.Globals.isFeedback = false;
		Alloy.Globals.closeFeedbackWindow();
	}
	if (Alloy.Globals.isServices == true) {
		Alloy.Globals.isServices = false;
		Alloy.Globals.closeServicesWindow();
	}
}

function openSearch() {
	if (Alloy.Globals.isSearch == false) {
		Alloy.createController('search').getView();
	}
	if (Alloy.Globals.isHome == true) {
		Alloy.Globals.isHome = false;
		Alloy.Globals.closeHomeWindow();
	}
	if (Alloy.Globals.isPromotions == true) {
		Alloy.Globals.isPromotions = false;
		Alloy.Globals.closePromotionsWindow();
	}
	if (Alloy.Globals.isFeedback == true) {
		Alloy.Globals.isFeedback = false;
		Alloy.Globals.closeFeedbackWindow();
	}
	if (Alloy.Globals.isServices == true) {
		Alloy.Globals.isServices = false;
		Alloy.Globals.closeServicesWindow();
	}
}

function openPromotion() {
	if (Alloy.Globals.isPromotions == false) {
		Alloy.createController('promotions').getView();
	}
	if (Alloy.Globals.isHome == true) {
		Alloy.Globals.isHome = false;
		Alloy.Globals.closeHomeWindow();
	}
	if (Alloy.Globals.isSearch == true) {
		Alloy.Globals.isSearch = false;
		Alloy.Globals.closeSearchWindow();
	}
	if (Alloy.Globals.isFeedback == true) {
		Alloy.Globals.isFeedback = false;
		Alloy.Globals.closeFeedbackWindow();
	}
	if (Alloy.Globals.isServices == true) {
		Alloy.Globals.isServices = false;
		Alloy.Globals.closeServicesWindow();
	}
}

function openFeedback() {
	if (Alloy.Globals.isFeedback == false) {
		Alloy.createController('feedback').getView();
	}
	if (Alloy.Globals.isHome == true) {
		Alloy.Globals.isHome = false;
		Alloy.Globals.closeHomeWindow();
	}
	if (Alloy.Globals.isSearch == true) {
		Alloy.Globals.isSearch = false;
		Alloy.Globals.closeSearchWindow();
	}
	if (Alloy.Globals.isPromotions == true) {
		Alloy.Globals.isPromotions = false;
		Alloy.Globals.closePromotionsWindow();
	}
	if (Alloy.Globals.isServices == true) {
		Alloy.Globals.isServices = false;
		Alloy.Globals.closeServicesWindow();
	}
}

function openServices() {
	if (Alloy.Globals.isServices == false) {
		Alloy.createController('services').getView();
	}
	if (Alloy.Globals.isHome == true) {
		Alloy.Globals.isHome = false;
		Alloy.Globals.closeHomeWindow();
	}
	if (Alloy.Globals.isSearch == true) {
		Alloy.Globals.isSearch = false;
		Alloy.Globals.closeSearchWindow();
	}
	if (Alloy.Globals.isPromotions == true) {
		Alloy.Globals.isPromotions = false;
		Alloy.Globals.closePromotionsWindow();
	}
	if (Alloy.Globals.isFeedback == true) {
		Alloy.Globals.isFeedback = false;
		Alloy.Globals.closeFeedbackWindow();
	}
}
