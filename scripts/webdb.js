var webDB = {};
webDB.sqlResult = null;

webDB.verbose = function (verbose) {
  var msg;
  if (verbose) {
    html5sql.logInfo = true;
    html5sql.logErrors = true;
    html5sql.putSelectResultsInArray = true;
    msg = 'html5sql verbosity on';
  } else {
    html5sql.logInfo = false;
    html5sql.logErrors = false;
    html5sql.putSelectResultsInArray = false;
    msg = 'html5sql verbosity off';
  }
  console.log(msg);
};

webDB.init = function() {
  // Open and init DB
  try {
    if (openDatabase) {
      webDB.verbose(true);
      webDB.connect('resourceDB', 'Resource Database', 5*1024*1024);
    } else {
      console.log('Web Databases not supported.');
    }
  } catch (e) {
    console.error('Error occured during DB init. Web Database may not be supported.');
  }
};

webDB.connect = function (database, title, size) {
  html5sql.openDatabase(database, title, size);
};

webDB.importResources = function (path) {
  // Import articles from JSON file
  $.ajax({
    type:'HEAD',
    url:'/data/resource.json',
    success:webDB.checkEtag
  });
  // $.getJSON(path, webDB.insertAllRecords);
};

webDB.checkEtag = function(data,message,xhr) {
  console.log('checkEtag');
  var eTag = xhr.getResponseHeader('eTag');
  if (typeof localStorage.resourceEtag === 'undefined'|| localStorage.resourceEtag != eTag){
    console.log('cache miss!');
    localStorage.resourceEtag = eTag;
    webDB.execute(
      'DELETE FROM resource;',
      webDB.fetchJSON
    );
  }
};

webDB.fetchJSON = function() {
  // console.log('delete from resource');
  $.getJSON('data/resource.json', webDB.insertRecord);
};

// webDB.insertAllRecords = function(resourceArg) {
//   webDB.execute('SELECT * FROM resource;', function(results) {
//     if(results.rows.length <= 0) {
//       resourceArg.forEach(webDB.insertRecord);
//     }
//   });
//
// };

webDB.insertRecord = function(data) {
  // insert article record into database
  console.log(data);
  data.forEach(function(a){
    html5sql.process(
      [
        {
          'sql': 'INSERT INTO resource (url, title, contentPage, category, subcategory, mainContent, description, author, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);',
          'data': [a.url, a.title, a.contentPage, a.category, a.subcategory, a.mainContent, a.description, a.author, a.date]
        }
      ],
     function () {
       console.log('Success inserting record for ' + a.title);
     }
   );
  });

};

webDB.setupTables = function () {
  html5sql.process(
    'CREATE TABLE IF NOT EXISTS resource (id int PRIMARY KEY, url text, title text, contentPage text, category text, subcategory text, mainContent text, description text, author text, date text);',
    function() {
      // on success
      console.log('Success setting up tables.');
    }
  );
};

webDB.execute = function (sql, callback) {
  callback = callback || function() {};
  html5sql.process(
    sql,
    function (tx, result, resultArray) {
      callback(result);
    }
  );
};
