import User from "./Models/User.js";
import Permission from "./Models/Permission.js";
import Role from "./Models/Role.js";
import RoleUser from "./Models/RoleUser.js";
import PermissionRole from "./Models/PermissionRole.js";
import PermissionUser from "./Models/PermissionUser.js";
const config=[];

User.hasMany(RoleUser, { as: "role_users", foreignKey: "user_id",onDelete: "cascade" });
User.hasMany(PermissionUser, { as: "permission_users", foreignKey: "user_id",onDelete: "cascade" });
Permission.hasMany(PermissionRole, { as: "permission_roles", foreignKey: "permission_id",onDelete: "cascade" });
Permission.hasMany(PermissionUser, { as: "permission_users", foreignKey: "permission_id",onDelete: "cascade" });
Role.hasMany(RoleUser, { as: "role_users", foreignKey: "role_id",onDelete: "cascade" });
Role.hasMany(PermissionRole, { as: "permission_roles", foreignKey: "role_id",onDelete: "cascade" });
RoleUser.belongsTo(Role, {foreignKey: "role_id", as: "role" });
RoleUser.belongsTo(User, {foreignKey: "user_id", as: "user" });
PermissionRole.belongsTo(Permission, {foreignKey: "permission_id", as: "permission" });
PermissionRole.belongsTo(Role, {foreignKey: "role_id", as: "role" });
PermissionUser.belongsTo(Permission, {foreignKey: "permission_id", as: "permission" });
PermissionUser.belongsTo(User, {foreignKey: "user_id", as: "user" });

export default config;