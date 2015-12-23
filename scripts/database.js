$.when(webDB.init())
.done(webDB.setupTables)
.done(webDB.importResources);
