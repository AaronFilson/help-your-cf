var productView = {};

productView.index = function (){
  productView.loadTemplate(product.allData);

  productView.handleFilter();
};

productView.loadTemplate = function(products) {
  if (productView.template){
    productView.renderGroup(products);
  }else{
    $.get('/templates/productivityTemplate.html',function(data, msg, xhr) {
      productView.template = Handlebars.compile(data);
      productView.renderGroup(products);
    });
  };

  productView.populateFilter();
  //
  // if($('#category-filter').children().length === 1 && $('#category-filter').children().length === 1){
  //   productView.populateFilter();
  // }
};

productView.renderGroup = function(products) {
  $('#content')
  .empty()
  .fadeIn()
  .append(
    products.map(function(product){
      return productView.template(product);
    })
  )
  .siblings()
  .hide();
};

productView.populateFilter = function() {
  var val;
  _.uniq(product.allData, function(product) {
    return product.category;
    console.log(resource.category);
  }).forEach(function(resource) {
    val = resource.category;
    option = '<option value="' + val + '">' + val + '</option>';
    $('#category-filter').append(option);
  });
};

productView.show = function(products) {
  productView.loadTemplate(products);
};

productView.handleFilter = function() {
  $('#category-filter').on('change', function(event){
    page('/productivity/' + $(this).val());
    event.preventDefault();
  });

};
