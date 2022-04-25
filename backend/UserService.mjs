import Base            from 'neo.mjs/src/core/Base.mjs';
import ClassSystemUtil from 'neo.mjs/src/util/ClassSystem.mjs';
import UserStore       from './store/Users.mjs';

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

        return ClassSystemUtil.beforeSetInstance(value);
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
    delete() {
        return {success: false};
    }

    /**
     * @param {Object} opts
     * @returns {Object[]}
     */
    read(opts) {
        return [
            {"id" :   1, "firstname" : "Leonard",    "lastname" : "Robertson",   "isOnline" : false, "image" : "ai_images/000001.jpg"},
            {"id" :   2, "firstname" : "Amelia",     "lastname" : "Gray",        "isOnline" : false, "image" : "ai_images/000002.jpg"},
            {"id" :   3, "firstname" : "Stephen",    "lastname" : "McDonald",    "isOnline" : false, "image" : "ai_images/000003.jpg"},
            {"id" :   4, "firstname" : "Lisa",       "lastname" : "Black",       "isOnline" : true,  "image" : "ai_images/000004.jpg"},
            {"id" :   5, "firstname" : "Dorothy",    "lastname" : "Turner",      "isOnline" : false, "image" : "ai_images/000005.jpg"},
            {"id" :   6, "firstname" : "Sonia",      "lastname" : "Mills",       "isOnline" : false, "image" : "ai_images/000006.jpg"},
            {"id" :   7, "firstname" : "Amy",        "lastname" : "Cameron",     "isOnline" : false, "image" : "ai_images/000007.jpg"},
            {"id" :   8, "firstname" : "Neil",       "lastname" : "Vance",       "isOnline" : false, "image" : "ai_images/000008.jpg"},
            {"id" :   9, "firstname" : "Brandon",    "lastname" : "Tucker",      "isOnline" : false, "image" : "ai_images/000009.jpg"},
            {"id" :  10, "firstname" : "Benjamin",   "lastname" : "McLean",      "isOnline" : false, "image" : "ai_images/000010.jpg"}
        ];
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
