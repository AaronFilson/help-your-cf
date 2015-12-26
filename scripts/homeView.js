var homeView = {};

homeView.index = function() {
  homeView.ui();
  $('#home').load('templates/home.html ').hide().fadeIn('show');
};

homeView.ui = function() {
  $('#category-filter').hide();
  $('#home').siblings().hide();
};
