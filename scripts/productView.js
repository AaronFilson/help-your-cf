var productView = {};

productView.index = function () {
  productView.loadTemplate(product.allData);
};

productView.loadTemplate = function(products) {
  if (productView.template){
    productView.renderGroup(products);
    productView.selectUrl();
  }else{
    $.get('/templates/productivityTemplate.html',function(data, msg, xhr) {
      productView.template = Handlebars.compile(data);
      productView.renderGroup(products);
      productView.selectUrl();
    });
  };

  productView.renderGroup = function(products) {
  // $('#spinner').hide();
  // $('#author-filter').fadeIn();
  // $('#category-filter').fadeIn();
  // $('#articles')
  // .empty()
  // .fadeIn()
  // .append(
  //   articleList.map(function(article) {
  //     return articleView.render(article);
  //   })
  // )
  // .siblings().hide();

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

  // articleView.teaser();

  if($('#category-filter').children().length === 1 && $('#category-filter').children().length === 1){
    productView.filter();
  }
};

productView.filter = function() {
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

productView.selectUrl = function() {

};
