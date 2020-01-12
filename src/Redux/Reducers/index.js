import { combineReducers } from "redux";
import redirectNavbar from './redirectNavbar'
import getUser from './HomePage/getUser'
import searchUser from './HomePage/searchUser'
import getCompany from './Company/getCompany'
import postCompany from './Company/postCompany'
import updateCompany from './Company/updateCompany'
import updateEngineer from './Engineer/updateEngineer'
import postSkill from './Engineer/Edit Skill/postSkill'
import deleteSkill from './Engineer/Edit Skill/deleteSkill'
import getSkill from './Engineer/Edit Skill/getSkill'
import getProfileSkill from './Engineer/Edit Skill/getProfileSkill'
import insertEngineer from './Engineer/insertEngineer'
import getEngineer from './Engineer/getEngineer'
import updateEngineerHome from './Engineer/Home/updateEngineerHome'
import deleteEngineerHome from './Engineer/Home/deleteEngineerHome'
import getStatusEngineer from './Engineer/Home/Status/getStatusEngineer'
import updateStatusEngineer from './Engineer/Home/Status/updateStatusEngineer'
import getProjectEngineer from './Engineer/Home/Project/getProjectEngineer'
import updateProjectEngineer from './Engineer/Home/Project/updateProjectEngineer'
import updateIsStatusEngineer1 from './Engineer/Home/Project/updateIsStatusEngineer1'
import updateIsStatusEngineer0 from './Engineer/Home/Status/updateIsStatusEngineer0'
import updateIsStatusEngineer2 from './Engineer/Home/Status/updateIsStatusEngineer2'
import getListProject from './Company/ListProject/getListProject'
import postListProject from './Company/ListProject/postListProject'
import updateListProject from './Company/ListProject/updateListProject'
import cancelListProject from './Company/ListProject/cancelListProject'
import deleteListProject from './Company/ListProject/deleteListProject'
import getProfileAddProject from './Company/AddProject/getProfileAddProject'
import updateAddProject from './Company/AddProject/updateAddProject'
import insertAddProject from './Company/AddProject/insertAddProject'
import getTotalProject from './Engineer/getTotalProject'

import getLoginEngineer from './LoginRegister/Engineer/getLoginEngineer'
import postRegisterEngineer from './LoginRegister/Engineer/postRegisterEngineer'
import getLoginCompany from './LoginRegister/Company/getLoginCompany'
import postRegisterCompany from './LoginRegister/Company/postRegisterCompany'

import getProfileEngineer from './Engineer/getProfileEngineer'

const reducers = combineReducers({
  redirectNavbar,
  getUser,
  searchUser,
  getCompany,
  postCompany,
  updateCompany,
  updateEngineer,
  postSkill,
  deleteSkill,
  getSkill,
  getProfileSkill,
  insertEngineer,
  getEngineer,
  updateEngineerHome,
  deleteEngineerHome,
  getStatusEngineer,
  updateStatusEngineer,
  getProjectEngineer,
  updateProjectEngineer,
  updateIsStatusEngineer1,
  updateIsStatusEngineer0,
  updateIsStatusEngineer2,
  getListProject,
  postListProject,
  updateListProject,
  cancelListProject,
  deleteListProject,
  getProfileAddProject,
  updateAddProject,
  insertAddProject,
  getTotalProject,
  getLoginEngineer,
  postRegisterEngineer,
  getLoginCompany,
  postRegisterCompany,
  getProfileEngineer
})

export default reducers