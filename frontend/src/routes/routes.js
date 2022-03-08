import CompUserLists from '../views/users/list';
import CompUserCreate from '../views/users/create';
import CompUserEdit from '../views/users/edit';
import CompPermissionLists from '../views/permissions/list';
import CompPermissionCreate from '../views/permissions/create';
import CompPermissionEdit from '../views/permissions/edit';
import CompRoleLists from '../views/roles/list';
import CompRoleCreate from '../views/roles/create';
import CompRoleEdit from '../views/roles/edit';
import CompRoleUserLists from '../views/role_users/list';
import CompRoleUserCreate from '../views/role_users/create';
import CompRoleUserEdit from '../views/role_users/edit';
import CompPermissionRoleLists from '../views/permission_roles/list';
import CompPermissionRoleCreate from '../views/permission_roles/create';
import CompPermissionRoleEdit from '../views/permission_roles/edit';
import CompPermissionUserLists from '../views/permission_users/list';
import CompPermissionUserCreate from '../views/permission_users/create';
import CompPermissionUserEdit from '../views/permission_users/edit';
import CompRoutesMenuAppReact from './menu';
import CompLogin from '../views/auth/login';
import HomeComponent from '../views/home'
import UnauthorizedComponent from '../views/unauthorized'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../commons/Auth';
import { RequireAuth } from '../commons/RequireAuth';


const CompRoutesAppReact = () => {
    return (
       <BrowserRouter>
            <AuthProvider>
                <CompRoutesMenuAppReact />
                <Routes>
                <Route path='/login' element={ <CompLogin />} />
                <Route path='/unauthorized' element={ <UnauthorizedComponent />} />
                <Route path='/users' element={ <RequireAuth><CompUserLists /></RequireAuth>} />
                <Route path='/users/create' element={ <RequireAuth><CompUserCreate /></RequireAuth>} />
                <Route path='/users/edit/:id' element={ <RequireAuth><CompUserEdit /></RequireAuth>} />
                <Route path='/permissions' element={ <CompPermissionLists />} />
                <Route path='/permissions/create' element={ <CompPermissionCreate />} />
                <Route path='/permissions/edit/:id' element={ <CompPermissionEdit />} />
                <Route path='/roles' element={ <CompRoleLists />} />
                <Route path='/roles/create' element={ <CompRoleCreate />} />
                <Route path='/roles/edit/:id' element={ <CompRoleEdit />} />
                <Route path='/role_users' element={ <CompRoleUserLists />} />
                <Route path='/role_users/create' element={ <CompRoleUserCreate />} />
                <Route path='/role_users/edit/:id' element={ <CompRoleUserEdit />} />
                <Route path='/permission_roles' element={ <CompPermissionRoleLists />} />
                <Route path='/permission_roles/create' element={ <CompPermissionRoleCreate />} />
                <Route path='/permission_roles/edit/:id' element={ <CompPermissionRoleEdit />} />
                <Route path='/permission_users' element={ <CompPermissionUserLists />} />
                <Route path='/permission_users/create' element={ <CompPermissionUserCreate />} />
                <Route path='/permission_users/edit/:id' element={ <CompPermissionUserEdit />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default CompRoutesAppReact