var projectController = {};

projectController.index = function() {
  project.loadAll(projectView.index);
};
