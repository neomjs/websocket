import UserModel from '../model/User.mjs';
import Store     from '../../../node_modules/neo.mjs/src/data/Store.mjs';

/**
 * @class MyApp.store.Users
 * @extends Neo.data.Store
 */
class Users extends Store {
    static getConfig() {return {
        /**
         * @member {String} className='MyApp.store.Users'
         * @protected
         */
        className: 'MyApp.store.Users',
        /**
         * @member {Neo.data.Model} model=UserModel
         */
        model: UserModel,
        /**
         * @member {Object[]} sorters
         */
        sorters: [{
            direction: 'ASC',
            property : 'firstname'
        }]
    }}
}

Neo.applyClassConfig(Users);

export default Users;
