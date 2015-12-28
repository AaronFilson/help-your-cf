page('/', homeController.index);

page('/about', aboutController.index);

page('/productivity',productController.index);

page('/companies',companyController.index);

page('/projects', projectController.index);

page('/productivity/:category',
     productController.category,
     productController.show
);


page.start();
