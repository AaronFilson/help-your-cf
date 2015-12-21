$.when(webDB.init())
.done(webDB.setupTables())
.done($.getJSON('/data/resource.json', webDB.insertAllRecords));
