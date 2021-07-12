export default {
  displayProjects(state, projects) {
    state.datas = projects;
  },

  updateIsLoading(state, isLoading) {
    state.isLoading = isLoading;
  },

  currentProject(state, project) {
    state.current = project;
  },

  getErrors(state, error) {
    state.errors = error;
  },

  updateTypes(state, types) {
    state.types = types;
  }

}