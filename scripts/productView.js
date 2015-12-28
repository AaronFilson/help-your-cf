var productView = {};

productView.show = function(products) {
  productView.loadTemplate(products);
};

productView.index = function (){
  console.log('productView.index');
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
};

productView.renderGroup = function(products) {
  productView.nav();
  $('#category-filter').fadeIn();
  $('.projectNav').hide();
  $('#product')
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

productView.nav = function() {
  $('#page').find('a').attr('href','/productivity');
  $('#page').find('a').text('Productivity');

  $('.jumbotron').slideUp();
};


productView.populateFilter = function() {
  var val;
  var len =_.uniq(product.allData, function(product) {
    return product.category;
    console.log(resource.category);
  }).length;

  if (len !== productView.optLen){
    $('category-filter').empty();
    _.uniq(product.allData, function(product) {
      return product.category;
      console.log(resource.category);
    }).forEach(function(resource) {
      val = resource.category;
      option = '<option value="' + val + '">' + val + '</option>';
      $('#category-filter').append(option);
    });
    productView.optLen = len;
  }

};


productView.handleFilter = function() {
  $('#category-filter').on('change', function(event){
    page('/productivity/' + $(this).val());
    event.preventDefault();
  });

};
