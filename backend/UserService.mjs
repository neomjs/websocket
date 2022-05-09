import Base            from 'neo.mjs/src/core/Base.mjs';
import ClassSystemUtil from 'neo.mjs/src/util/ClassSystem.mjs';
import fs              from 'fs-extra';
import path            from 'path';
import UserStore       from './store/Users.mjs';

const cwd         = process.cwd(),
      requireJson = path => JSON.parse(fs.readFileSync((path))),
      usersJson   = requireJson(path.resolve(cwd, 'backend/resources/users.json'));

/**
 * @class MyApp.backend.UserService
 * @extends Neo.core.Base
 * @singleton
 */
class UserService extends Base {
    static getConfig() {return {
        /**
         * @member {String} className='MyApp.backend.UserService'
         * @protected
         */
        className: 'MyApp.backend.UserService',
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true,
        /**
         * @member {Neo.data.Store} store_=UserStore
         */
        store_: UserStore
    }}

    /**
     * Triggered before the store config gets changed.
     * @param {Neo.data.Store|null} value
     * @param {Neo.data.Store|null} oldValue
     * @returns {Neo.data.Store}
     * @protected
     */
    beforeSetStore(value, oldValue) {
        oldValue?.destroy();

        return ClassSystemUtil.beforeSetInstance(value, null, {
            data: usersJson.data
        });
    }

    /**
     * todo
     * @returns {Object}
     */
    create() {
        return {success: false};
    }

    /**
     * todo
     * @returns {Object}
     */
    destroy() {
        return {success: false};
    }

    /**
     * @param {Object} opts
     * @returns {Object}
     */
    read(opts) {
        let store = this.store,
            limit = opts?.pageSize || 30,
            start = opts?.page ? ((opts.page - 1) * limit) : 0;

        store.filters = opts.filters || [];

        store.sorters = opts.sorters || [{direction: 'ASC', property: 'id'}];

        return {
            data      : store.getRange(start, start + limit),
            success   : true,
            totalCount: store.getCount()
        };
    }

    /**
     * todo
     * @returns {Object}
     */
    update() {
        return {success: false};
    }
}

Neo.applyClassConfig(UserService);

let instance = Neo.create(UserService);

Neo.applyToGlobalNs(instance);

export default instance;
