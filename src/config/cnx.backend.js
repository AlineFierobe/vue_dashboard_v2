// link to back end
const host = "http://localhost:8888/backend/back-dashboard_v2";

export default {
  // all programs needed
  // user
  readUser: host + "/read/readUser.php",
  updateUser: host + "/update/updateUser.php",
  updatePassword: host + "/update/updatePassword.php",
  getUser: host + "/get/getUser.php",

  // project
  createProject: host + "/create/createProject.php",
  readProject: host + "/read/readProject.php",
  updateProject: host + "/update/updateProject.php",
  deleteProject: host + "/delete/deleteProject.php",
  getProject: host + "/get/getProject.php",

  // task
  createTask: host + "/create/createTask.php",
  readTasks: host + "/read/readTask.php",
  updateTask: host + "/update/updateTask.php",
  deleteTask: host + "/delete/deleteTask.php",
  getTask: host + "/get/getTask.php",

  // meeting
  createMeeting: host + "/create/createMeeting.php",
  readMeeting: host + "/read/readMeeting.php",
  updateMeeting: host + "/update/updateMeeting.php",
  deleteMeeting: host + "/delete/deleteMeeting.php",
  getMeeting: host + "/get/getMeeting.php",

  // config
  readConfig: host + "/read/readConfig.php",
  updateConfig: host + "/update/updateConfig.php",
  getConfig: host + "/get/getConfig.php",

  // status [ongoing, closed, finished]
  readStatus: host + "/read/readStatus.php",

  // meeting and task types
  readMeetingType: host + "/read/readType.php",
  readTaskType: host + "/read/readTypeTask.php",
};
