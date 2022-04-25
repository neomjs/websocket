import ComponentController from '../../../node_modules/neo.mjs/src/controller/Component.mjs';
import SocketConnection    from '../../../node_modules/neo.mjs/src/data/connection/WebSocket.mjs';

/**
 * @class MyApp.view.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends ComponentController {
    /**
     * @member {Neo.data.connection.WebSocket|null} connection=null
     */
    connection = null

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
    onUserServiceGetAllButtonClick(data) {
        MyApp.backend.UserService.read().then(response => {
            console.log(response);
        })
    }
}

Neo.applyClassConfig(MainContainerController);

export default MainContainerController;
