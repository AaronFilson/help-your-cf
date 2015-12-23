var product = {};
product.allData = [];


product.loadAll = function(callback) {
  callback = callback || function() {};

  webDB.execute('SELECT * FROM resource WHERE contentPage = "productivity";'
  , function(data){

    console.log('The selectArray variable is: ');
    console.log(data.rows[0]);
    console.log(typeof data.rows);
    //transform the data into what we need for the template
    product.allData = [];
    var arrays = data.rows;
    for (var i=0; i < arrays.length; i++){
      product.allData.push(new Resource(arrays[i]));
    }
    callback();
  });

};
