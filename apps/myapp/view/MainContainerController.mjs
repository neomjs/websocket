import ComponentController from '../../../node_modules/neo.mjs/src/controller/Component.mjs';
import SocketConnection    from '../../../node_modules/neo.mjs/src/data/connection/Socket.mjs';

/**
 * @class MyApp.view.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends ComponentController {
    /**
     * @member {Neo.data.connection.Socket|null} connection=null
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

    createSocketConnection() {
        this.connection = Neo.create(SocketConnection, {
            serverAddress: 'ws://localhost:3001'
        });
    }

    /**
     * @param {Object} data
     */
    onSendMessage(data) {
        this.connection.send({
            foo: 'bar'
        });
    }
}

Neo.applyClassConfig(MainContainerController);

export default MainContainerController;
