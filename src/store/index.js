import { createStore } from 'vuex'
import user from './user/user.store';
import projects from "./projects/projects.store";
import tasks from "./tasks/tasks.store";
import meetings from "./meetings/meetings.store";

const store = createStore({
  modules: {
    user,
    projects,
    tasks,
    meetings
  }
})


export default store;