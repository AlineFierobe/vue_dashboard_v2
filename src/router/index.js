import { createRouter, createWebHistory } from 'vue-router';


// Home, Log & Website
import Home from "../views/utils/Home";
import About from "../views/utils/About";
import UpdateWebsite from "../views/website/UpdateInfo";
import Login from "../views/utils/Login";
import Logout from "../views/utils/Logout";
import AccessDenied from "../views/utils/components/AccessDenied";
import Today from "../views/utils/components/Today";

// Projects
import AllProjects from "../views/projects/AllProjects";
import SingleProject from "../views/projects/SingleProject";
import CreateProject from "../views/projects/CreateProject";
import UpdateProject from "../views/projects/UpdateProject";
import DeleteProject from "../views/projects/DeleteProject";
import CloseProject from "../views/projects/CloseProject";
import CreateTaskInProject from "../views/projects/CreateTask";
import CreateMeetingInProject from "../views/projects/CreateMeeting";

// Tasks
import AllTasks from "../views/tasks/AllTasks";
import SingleTask from "../views/tasks/SingleTask";
import CreateTask from "../views/tasks/CreateTask";
import UpdateTask from "../views/tasks/UpdateTask";
import DeleteTask from "../views/tasks/DeleteTask";
import CloseTask from "../views/tasks/CloseTask";

// Meetings
import AllMeetings from "../views/meetings/AllMeetings";
import SingleMeeting from "../views/meetings/SingleMeeting";
import CreateMeeting from "../views/meetings/CreateMeeting";
import UpdateMeeting from "../views/meetings/UpdateMeeting";
import DeleteMeeting from "../views/meetings/DeleteMeeting";
import CloseMeeting from "../views/meetings/CloseMeeting";

// User
import Profile from "../views/user/Profile";
import UpdateUser from "../views/user/UpdateUser";
import UpdatePassword from "../views/user/UpdatePassword";



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      // TODAY'S DASHBOARD
      {
        path: "",
        name: "Today",
        component: Today
      },
      // ACCESS DENIED
      {
        path: "access-denied",
        name: "AccessDenied",
        component: AccessDenied
      },
      // WEBSITE
      {
        path: "update-website",
        name: "UpdateWebsite",
        component: UpdateWebsite
      },
      // PROJECTS
      {
        path: "projects",
        name: "AllProjects",
        component: AllProjects
      },
      {
        path: "project/:id",
        name: "SingleProject",
        component: SingleProject
      },
      {
        path: "create-project",
        name: "CreateProject",
        component: CreateProject
      },
      {
        path: "update-project/:id",
        name: "UpdateProject",
        component: UpdateProject
      },
      {
        path: "close-project/:id",
        name: "CloseProject",
        component: CloseProject
      },
      {
        path: "delete-project/:id",
        name: "DeleteProject",
        component: DeleteProject
      },
      {
        path: "create-task-project/:id",
        name: "CreateTaskInProject",
        component: CreateTaskInProject
      },
      {
        path: "create-meeting-project/:id",
        name: "CreateMeetingInProject",
        component: CreateMeetingInProject
      },
      // TASKS
      {
        path: "tasks",
        name: "AllTasks",
        component: AllTasks
      },
      {
        path: "task/:id",
        name: "SingleTask",
        component: SingleTask
      },
      {
        path: "create-task",
        name: "CreateTask",
        component: CreateTask
      },
      {
        path: "update-task/:id",
        name: "UpdateTask",
        component: UpdateTask
      },
      {
        path: "close-task/:id",
        name: "CloseTask",
        component: CloseTask
      },
      {
        path: "delete-task/:id",
        name: "DeleteTask",
        component: DeleteTask
      },
      // MEETINGS
      {
        path: "meetings",
        name: "AllMeetings",
        component: AllMeetings
      },
      {
        path: "meeting/:id",
        name: "SingleMeeting",
        component: SingleMeeting
      },
      {
        path: "create-meeting",
        name: "CreateMeeting",
        component: CreateMeeting
      },
      {
        path: "update-meeting/:id",
        name: "UpdateMeeting",
        component: UpdateMeeting
      },
      {
        path: "close-meeting/:id",
        name: "CloseMeeting",
        component: CloseMeeting
      },
      {
        path: "delete-meeting/:id",
        name: "DeleteMeeting",
        component: DeleteMeeting
      },
      // USER
      {
        path: "profile",
        name: "Profile",
        component: Profile
      },
      {
        path: "update-user/:id",
        name: "UpdateUser",
        component: UpdateUser
      },
      {
        path: "update-password/:id",
        name: "UpdatePassword",
        component: UpdatePassword
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  // LOG
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});




export default router
