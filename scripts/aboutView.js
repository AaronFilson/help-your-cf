var aboutView = {};

aboutView.index = function() {

  aboutView.ui();
  aboutView.nav();
  $('#aboutUs').load('/templates/about.html').hide().fadeIn();
};

aboutView.ui = function() {
  $('#category-filter').hide();
  $('.breadcrumbNav').fadeIn();
  $('.breadcrumb').fadeIn();
  $('#aboutUs').siblings().hide();
  $('.jumbotron').slideUp();
};

aboutView.nav = function() {

  $('#page').find('a').attr('href','/about');
  $('#page').find('a').text('About Us');
};
