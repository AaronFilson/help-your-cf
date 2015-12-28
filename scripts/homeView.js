var homeView = {};

homeView.index = function() {
  homeView.ui();
  $('#home').load('templates/home.html ').hide().fadeIn();
};

homeView.ui = function() {
  $('#category-filter').hide();
  $('#home').siblings().hide();
  $('.breadcrumbNav').hide();
};
