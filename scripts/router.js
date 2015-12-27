page('/', homeController.index);

page('/about', aboutController.index);

page('/productivity',productController.index);

page('/projects', projectController.index);

//page('/projects/:category',function(ctx){console.log(ctx.params);});


page('/productivity/:category',
     productController.category,
     productController.show
);


page.start();
