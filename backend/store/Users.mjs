import UserModel from '../../apps/myapp/model/User.mjs';
import Store     from 'neo.mjs/src/data/Store.mjs';

/**
 * @class MyApp.backend.store.Users
 * @extends Neo.data.Store
 */
class Users extends Store {
    static getConfig() {return {
        /**
         * @member {String} className='MyApp.backend.store.Users'
         * @protected
         */
        className: 'MyApp.backend.store.Users',
        /**
         * @member {Boolean} autoLoad=true
         */
        //autoLoad: true,
        /**
         * @member {Neo.data.Model} model=UserModel
         */
        model: UserModel,
        /**
         * @member {Object[]} sorters
         */
        sorters: [{
            direction: 'ASC',
            property : 'id'
        }]
    }}
}

Neo.applyClassConfig(Users);

export default Users;
