var projectView = {};

projectView.index = function() {
  console.log('projectView.index()');
  projectView.loadTemplate(project.allData);
};

projectView.loadTemplate = function(projects) {
  console.log(projects);
  if(projectView.template){
    console.log('have template');
    projectView.ui();
    projectView.renderGroup(projects);
  }else{
    console.log('no template');
    $.get('/templates/projectTemplate.html',function(data, msg, xhr) {
      projectView.ui();
      projectView.template = Handlebars.compile(data);
      projectView.renderGroup(projects);
    });
  }
};

projectView.renderGroup = function(projects) {
  console.log('projectView.renderGroup()');
  $('#projects').fadeIn();
  $('#projContainer')
  .empty()
  .fadeIn()
  .append(
    projects.map(function(project){
      return projectView.template(project);
    })
  ).show();

  if($('#projectNav').css('display') === 'none' || $('#projectNav').length === 0){
    projectView.renderNavCrumb();
  }
};

projectView.ui = function() {
  $('#category-filter').hide();
  $('#productNav').hide();
  $('#projects')
  .siblings()
  .hide();
  console.log('projectView.ui()');
};

projectView.renderNavCrumb = function() {
  var ele ="<ol class='breadcrumb' id='projectNav'><li><a href='/'>Home</a></li><li><a href='/projects'>Projects</a></li></ol>";

  $('#category-filter').before(ele);

};
