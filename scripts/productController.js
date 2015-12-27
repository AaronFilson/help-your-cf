var productController = {};

productController.index = function() {
  product.loadAll(productView.index);
};

productController.category = function(ctx,next) {

  var categoryData = function(products) {
    ctx.products = products;
    next();
  };
  product.findByCategory(ctx.params.category,categoryData);

};

productController.show = function(ctx) {
  productView.show(ctx.products);
};
