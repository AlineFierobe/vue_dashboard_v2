import { createStore } from 'vuex'
import user from './user/user.store';
import projects from "./projects/projects.store";
import tasks from "./tasks/tasks.store";
import meetings from "./meetings/meetings.store";
import website from "./website/website.store";
import global from "./global/global.store";

const store = createStore({
  modules: {
    user,
    projects,
    tasks,
    meetings,
    website,
    global
  }
})


export default store;