var productView = {};

productView.index = function () {
  productView.loadTemplate(product.allData);
};

productView.loadTemplate = function(products) {
  if (productView.template){
    productView.handleFilter();
    productView.renderGroup(products);
  }else{
    $.get('/templates/productivityTemplate.html',function(data, msg, xhr) {
      productView.template = Handlebars.compile(data);
      productView.handleFilter();
      productView.renderGroup(products);
    });
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


  if($('#category-filter').children().length === 1 && $('#category-filter').children().length === 1){
    productView.populateFilter();
  }
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
    //var $popCategory = $('#category-filter').append($('<option class="category">').text(resource.category));
    console.log(resource);
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
