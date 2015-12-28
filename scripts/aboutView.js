var aboutView = {};

aboutView.index = function() {
  aboutView.ui();
  $('#aboutUs').load('/templates/about.html').hide().fadeIn();
};

aboutView.ui = function() {
  $('#category-filter').hide();
  $('.productNav').hide();
  $('.projectNav').hide();
  $('#aboutUs').siblings().hide();
};
