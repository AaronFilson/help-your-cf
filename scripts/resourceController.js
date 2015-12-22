function indexFunction() {
  $('#home').show();
}

function aboutFunction() {
  $('#home').hide();
  $('#content').load('/about.html');

}
