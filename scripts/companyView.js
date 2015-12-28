var companyView = {};

companyView.index = function() {
  companyView.ui();
  companyView.nav();
  $('#companies').load('/templates/company.html').hide().fadeIn();
};

companyView.ui = function() {
  $('#category-filter').hide();
  $('.breadcrumbNav').fadeIn();
  $('#companies').siblings().hide();
  $('.jumbotron').slideUp();
};

companyView.nav = function() {

  $('#page').find('a').attr('href','/companies');
  $('#page').find('a').text('Companies');
};
