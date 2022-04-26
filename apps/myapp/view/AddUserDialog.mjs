import Dialog from '../../../node_modules/neo.mjs/src/dialog/Base.mjs';

/**
 * @class MyApp.view.AddUserDialog
 * @extends Neo.dialog.Base
 */
class AddUserDialog extends Dialog {
    static getConfig() {return {
        /**
         * @member {String} className='MyApp.view.AddUserDialog'
         * @protected
         */
        className: 'MyApp.view.AddUserDialog',
        /**
         * @member {String} title='Edit User'
         */
        title: 'Add User',
        /**
         * @member {Object} wrapperStyle={height:'300px',width:'400px'}
         */
        wrapperStyle: {
            height: '300px',
            width : '400px'
        }
    }}
}

Neo.applyClassConfig(AddUserDialog);

export default AddUserDialog;
