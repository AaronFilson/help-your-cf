function indexFunction() {
  $('#home').show();
}

function aboutFunction() {
  $('#home').hide();
  $('#content').load('/about.html');

}

function productivityFunction() {
  $('#home').hide();
  $('#about').hide();
  // $('#content').load('/productivity.html');
  loadProductivityTemplate();
}
