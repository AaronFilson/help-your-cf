var productController = {};

productController.index = function() {
  product.loadAll(productView.index);
};

productController.category = function(ctx,next) {

  console.log('run controller product');

  var categoryData = function(products) {
    ctx.products = products;
    console.log('products' + ctx.products);
    next();
  };
  product.findByCategory(ctx.params.category,categoryData);

};


productController.show = function(ctx) {
  productView.show(ctx.products);
};
