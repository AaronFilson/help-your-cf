var projectController = {};

projectController.index = function() {
  console.log('projectController.index()');
  project.loadAll(projectView.index);
};
