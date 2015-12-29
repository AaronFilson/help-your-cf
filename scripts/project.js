var project = {};
project.allData = [];

project.loadAll = function(callback) {
  callback = callback || function() {};

  webDB.execute('SELECT * FROM resource WHERE contentPage LIKE "project";'
  , function(data){
    //transform the data into what we need for the template
    project.allData = [];
    var arrays = data.rows;
    for (var i=0; i < arrays.length; i++){
      project.allData.push(new Resource(arrays[i]));
    }
    callback();
  });

};
