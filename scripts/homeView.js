var homeView = {};

homeView.index = function() {
  homeView.ui();
  $('#home').load('templates/home.html ').hide().fadeIn();
};

homeView.ui = function() {
  $('.jumbotron').slideDown();
  $('#category-filter').hide();
  $('#home').siblings().hide();
  $('.breadcrumbNav').hide();
};
