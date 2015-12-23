function getFormData(event) {
  event.preventDefault();
  var inputData = {
    url: $('input[name=url]').val(),
    title: $('input[name=title]').val(),
    contentPage: $('input[name=contentPage]').val(),
    category: $('input[name=category]').val(),
    subcategory: $('input[name=subcategory]').val(),
    mainContent: $('textarea[name=mainContent]').val(),
    description: $('textarea[name=description]').val(),
    author: $('input[name=author]').val(),
    date: $('input[name=date]').val(),
  };
  var jsonToPage = new Resource(inputData);
  var stringifiedJson = JSON.stringify(jsonToPage);
  var friendlyJson = stringifiedJson.replace(/",/g , '", <br>');
  $('#jsonArea').html(friendlyJson);
}

$('button').on('click',getFormData);
