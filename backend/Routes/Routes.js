import express from 'express';
var app = express();

import  Router from 'named-routes';
import verify from "../Controllers/Middlewares/Middleware.js";
import {login,refresh, logout} from '../Controllers/Auth/AuthController.js'
import {getAllUsers,getUser,createUser,updateUser,deleteUser } from '../Controllers/UsersController.js'
import {getAllPermissions,getPermission,createPermission,updatePermission,deletePermission } from '../Controllers/PermissionsController.js'
import {getAllRoles,getRole,createRole,updateRole,deleteRole } from '../Controllers/RolesController.js'
import {getAllRoleUsers,getRoleUser,createRoleUser,updateRoleUser,deleteRoleUser } from '../Controllers/RoleUsersController.js'
import {getAllPermissionRoles,getPermissionRole,createPermissionRole,updatePermissionRole,deletePermissionRole } from '../Controllers/PermissionRolesController.js'
import {getAllPermissionUsers,getPermissionUser,createPermissionUser,updatePermissionUser,deletePermissionUser } from '../Controllers/PermissionUsersController.js'

var router = new Router();
router.extendExpress(app);
router.registerAppHelpers(app);

app.post('/api/login',login)
app.post('/api/logout',verify,logout)
app.post('/api/refresh',refresh)
app.get('/users','users.index',verify,getAllUsers)
app.get('/users/:id',getUser)
app.post('/users','users.create',verify,createUser)
app.put('/users/:id','users.update',verify,updateUser)
app.delete('/users/:id','users.delete',verify,deleteUser)
app.get('/permissions','permissions.index',verify,getAllPermissions)
app.get('/permissions/:id',getPermission)
app.post('/permissions','permissions.create',verify,createPermission)
app.put('/permissions/:id','permissions.update',verify,updatePermission)
app.delete('/permissions/:id','permissions.delete',verify,deletePermission)
app.get('/roles','roles.delete',verify,getAllRoles)
app.get('/roles/:id',getRole)
app.post('/roles','roles.create',verify,createRole)
app.put('/roles/:id','roles.update',verify,updateRole)
app.delete('/roles/:id', 'roles.delete',verify,deleteRole)
app.get('/role_users',getAllRoleUsers)
app.get('/role_users/:id',getRoleUser)
app.post('/role_users',createRoleUser)
app.put('/role_users/:id',updateRoleUser)
app.delete('/role_users/:id',deleteRoleUser)
app.get('/permission_roles',getAllPermissionRoles)
app.get('/permission_roles/:id',getPermissionRole)
app.post('/permission_roles',createPermissionRole)
app.put('/permission_roles/:id',updatePermissionRole)
app.delete('/permission_roles/:id',deletePermissionRole)
app.get('/permission_users',getAllPermissionUsers)
app.get('/permission_users/:id',getPermissionUser)
app.post('/permission_users',createPermissionUser)
app.put('/permission_users/:id',updatePermissionUser)
app.delete('/permission_users/:id',deletePermissionUser)
export default app