import ComponentController from '../../../node_modules/neo.mjs/src/controller/Component.mjs';
import SocketConnection    from '../../../node_modules/neo.mjs/src/data/connection/WebSocket.mjs';

/**
 * @class MyApp.view.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends ComponentController {
    /**
     * @member {MyApp.view.AddUserDialog|null} addUserDialog=null
     */
    addUserDialog = null
    /**
     * @member {Neo.data.connection.WebSocket|null} connection=null
     */
    connection = null
    /**
     * @member {Number} currentPage=1
     */
    currentPage = 1

    static getConfig() {return {
        /**
         * @member {String} className='MyApp.view.MainContainerController'
         * @protected
         */
        className: 'MyApp.view.MainContainerController'
    }}

    /**
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);
        this.createSocketConnection()
    }

    /**
     *
     */
    createSocketConnection() {
        this.connection = Neo.create(SocketConnection, {
            serverAddress: 'ws://localhost:3001'
        });
    }

    /**
     * @param {Number} page
     */
    loadPage(page) {
        MyApp.backend.UserService.read({page}).then(response => {
            this.getReference('user-table').store.data = response.data;
        })
    }

    /**
     * @param {Object} data
     */
    onAddUserButtonClick(data) {
        let me = this;

        if (!me.addUserDialog) {
            import('./AddUserDialog.mjs').then(module => {
                me.addUserDialog = Neo.create(module.default, {
                    animateTargetId: data.component.id,
                    appName        : me.component.appName,
                    closeAction    : 'hide'
                });
            });
        } else {
            me.addUserDialog.show();
        }
    }

    /**
     * @param {Object} data
     */
    onFirstPageButtonClick(data) {
        let me = this;

        me.currentPage = 1;

        me.loadPage(me.currentPage);
    }

    /**
     * @param {Object} data
     */
    onNextPageButtonClick(data) {
        let me = this;

        // todo: do not exceed the limit
        me.currentPage++;

        me.loadPage(me.currentPage);
    }

    /**
     * @param {Object} data
     */
    onPrevPageButtonClick(data) {
        let me = this;

        if (me.currentPage > 1) {
            me.currentPage--;
        }

        me.loadPage(me.currentPage);
    }

    /**
     * Sending messages through a WebSocket inside the app worker
     * @param {Object} data
     */
    onSendWsMessageButtonClick(data) {
        this.connection.promiseMessage({
            action : 'rpc',
            method : 'read',
            params : [],
            service: 'UserService'
        }).then(response => {
            console.log(response);
        })
    }

    /**
     * Sending messages through a WebSocket inside the data worker
     * @param {Object} data
     */
    onUserServiceReadButtonClick(data) {
        MyApp.backend.UserService.read().then(response => {
            console.log(response);
        })
    }
}

Neo.applyClassConfig(MainContainerController);

export default MainContainerController;
