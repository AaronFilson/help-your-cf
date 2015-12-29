var projectView = {};

projectView.index = function() {
  projectView.loadTemplate(project.allData);
};

projectView.loadTemplate = function(projects) {
  if(projectView.template){
    projectView.ui();
    projectView.renderGroup(projects);
  }else{
    $.get('/templates/projectTemplate.html',function(data, msg, xhr) {
      projectView.ui();
      projectView.template = Handlebars.compile(data);
      projectView.renderGroup(projects);
    });
  }
};

projectView.renderGroup = function(projects) {
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
  $('.jumbotron').slideUp();
};
