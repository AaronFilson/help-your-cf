var productController = {};

productController.index = function() {
  product.loadAll(productView.index);
};
