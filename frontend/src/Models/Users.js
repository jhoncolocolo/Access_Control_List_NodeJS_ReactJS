import Model from './Model';
import {HTTP} from '../resources/resources';

class UserModel extends Model {

    constructor() {
        super();
        this.count = 0;
    }
}

export default UserModel;