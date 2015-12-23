$.when(webDB.init())
.done(webDB.setupTables)
.done(webDB.importResources)
.done(
  Resource.categoryPopulate,
  Resource.categoryFilter
);
