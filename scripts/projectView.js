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
  projectView.nav();
  $('#projects').fadeIn();
  $('#projContainer')
  .empty()
  .fadeIn()
  .append(
    projects.map(function(project){
      return projectView.template(project);
    })
  ).show();

};

projectView.nav = function() {
  $('#page').find('a').attr('href','/projects');
  $('#page').find('a').text('Projects');

};

projectView.ui = function() {
  $('#category-filter').hide();
  $('.breadcrumbNav').fadeIn();
  $('#projects')
  .siblings()
  .hide();
  console.log('projectView.ui()');
  $('.jumbotron').slideUp();
};
