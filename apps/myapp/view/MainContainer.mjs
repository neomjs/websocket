import MainContainerController from './MainContainerController.mjs';
import UserTableContainer      from './UserTableContainer.mjs';
import Viewport                from '../../../node_modules/neo.mjs/src/container/Viewport.mjs';

/**
 * @class MyApp.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends Viewport {
    static getConfig() {return {
        className : 'MyApp.view.MainContainer',
        autoMount : true,
        controller: MainContainerController,
        layout    : {ntype: 'vbox', align: 'stretch'},
        style     : {padding: '20px'},

        items: [{
            ntype: 'toolbar',
            flex : 'none',
            items: [{
                text   : 'Send WS message',
                handler: 'onSendWsMessageButtonClick'
            }, {
                style  : {marginLeft: '10px'},
                text   : 'UserService.read',
                handler: 'onUserServiceReadButtonClick'
            }]
        }, {
            module      : UserTableContainer,
            flex        : 1,
            reference   : 'user-table',
            wrapperStyle: {marginTop: '20px', maxHeight: '300px'}
        }]
    }}
}

Neo.applyClassConfig(MainContainer);

export default MainContainer;
