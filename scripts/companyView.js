var companyView = {};

companyView.index = function() {
  companyView.ui();
  $('#companies').load('/templates/company.html').hide().fadeIn();
};

companyView.ui = function() {
  $('#category-filter').hide();
  $('#productNav').hide();
  $('#projectNav').hide();
  $('#companies').siblings().hide();
};
