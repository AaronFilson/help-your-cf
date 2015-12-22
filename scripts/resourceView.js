function compileTheProductivityTemplate(htmlTemplate){
  var templateFunction = Handlebars.compile(htmlTemplate);
  appendProductivityToPage(templateFunction);
}

function appendProductivityToPage(templateFunction){
  //ask the database for all info on productivity
  webDB.execute('SELECT * FROM resource WHERE contentPage = "productivity";', function(selectArray){
    console.log('The selectArray variable is: ');
    console.dir(selectArray);
    //transform the data into what we need for the template
    for(var i = 0; i < selectArray.rows.length; i++){
      var temp = new Resource(selectArray.rows[i]);
      $('#content').append(templateFunction(temp));
    }
  });
}

function loadProductivityTemplate(){
  $.get('/templates/productivityTemplate.html', compileTheProductivityTemplate)
  .done(console.log('HELP'));
}
