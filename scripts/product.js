var product = {};
product.allData = [];


product.loadAll = function(callback) {
  callback = callback || function() {};

  webDB.execute('SELECT * FROM resource WHERE contentPage = "productivity";'
  , function(data){
    //transform the data into what we need for the template
    product.allData = [];
    var arrays = data.rows;
    for (var i=0; i < arrays.length; i++){
      product.allData.push(new Resource(arrays[i]));
    }
    callback();
  });

};

product.findByCategory = function(category,callback) {
  webDB.execute(
    [
      {
        'sql':'SELECT * FROM resource WHERE category = ?',
        'data':[category]
      }
    ],

    function(data){
      console.log(data.rows);
      var products = [];
      for (var i=0; i<data.rows.length; i++){
        products.push(new Resource(data.rows[i]));
      }
      console.log(products);
      callback(products);
    }
  );

};
