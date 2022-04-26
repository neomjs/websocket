import Dialog from '../../../node_modules/neo.mjs/src/dialog/Base.mjs';

/**
 * @class MyApp.view.AddUserDialog
 * @extends Neo.dialog.Base
 */
class AddUserDialog extends Dialog {
    static getConfig() {return {
        className : 'MyApp.view.AddUserDialog',
        height    : 400,
        width     : 300
    }}
}

Neo.applyClassConfig(AddUserDialog);

export default AddUserDialog;
