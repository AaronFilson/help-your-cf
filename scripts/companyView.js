var companyView = {};

companyView.index = function() {
  companyView.ui();
  companyView.nav();
  $('#companies').load('/templates/company.html').hide().fadeIn();
};

companyView.ui = function() {
  $('#category-filter').hide();
  $('#companies').siblings().hide();
};

companyView.nav = function() {

  $('#page').find('a').attr('href','/companies');
  $('#page').find('a').text('Companies');
};
