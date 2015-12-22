page('/', indexFunction);

page('/index', indexFunction);

page('/about', aboutFunction);

page('/productivity', productivityFunction);

page('/*', indexFunction);

page.start();
