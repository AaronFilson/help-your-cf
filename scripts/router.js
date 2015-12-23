page('/', indexFunction);

page('/index', indexFunction);

page('/about', aboutFunction);

//page('/productivity', productivityFunction);

page('/productivity', productController.index);

page('/*', indexFunction);

page.start();
