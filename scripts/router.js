page('/', indexFunction);

page('/index', indexFunction);

page('/about', aboutFunction);

//page('/productivity', productivityFunction);

page('/productivity', productController.index);

page('/productivity/:category',
     productController.category,
     productController.show
);

page('/*', indexFunction);

page.start();
