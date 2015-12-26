page('/', homeController.index);

page('/index', indexFunction);

page('/about', aboutFunction);

page('/productivity',productController.index);

page('/productivity/:category',
     productController.category,
     productController.show
);

page('/*', indexFunction);

page.start();
