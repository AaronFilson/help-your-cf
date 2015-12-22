page('/', indexFunction);

page('/index', indexFunction);

page('/about', aboutFunction);

page('/*', indexFunction);

page.start();
