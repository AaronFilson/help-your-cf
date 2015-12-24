function compileTheProductivityTemplate(htmlTemplate){
  var templateFunction = Handlebars.compile(htmlTemplate);
  appendProductivityToPage(templateFunction);
}

function appendProductivityToPage(templateFunction){
  //ask the database for all info on productivity
  webDB.execute('SELECT * FROM resource WHERE contentPage LIKE "productivity";', function(selectArray){
    console.log('The selectArray variable is: ');
    console.log(selectArray.rows);
    //transform the data into what we need for the template
    for(var i = 0; i < selectArray.rows.length; i++){
      var temp = new Resource(selectArray.rows[i]);
      Resource.all.push(temp);
      $('#content').append(templateFunction(temp));
    }
  });
}

function loadProductivityTemplate(){
  $.get('/templates/productivityTemplate.html', compileTheProductivityTemplate);
}

Resource.categoryPopulate = function() {
  _.uniq(Resource.all, function(resource) {
    return resource.category;
    console.log(resource.category);
  }).map(function(resource) {
    var $popCategory = $('#category-filter').append($('<option class="category">').text(resource.category));
  });
};

Resource.categoryFilter = function() {
  $('select').on('change', function(event){
    event.preventDefault();
    // use $ to target the children
    if(event.target.className == 'category') {
      console.log('HELP');
    }
  });
};
