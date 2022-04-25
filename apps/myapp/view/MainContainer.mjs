import Component               from '../../../node_modules/neo.mjs/src/component/Base.mjs';
import MainContainerController from './MainContainerController.mjs';
import TabContainer            from '../../../node_modules/neo.mjs/src/tab/Container.mjs';
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

        items: [{
            module: UserTableContainer,
            style : {flex: 'none', margin: '20px'}
        }, {
            ntype: 'toolbar',
            style: {margin: '20px'},
            items: [{
                text   : 'Send WS message',
                handler: 'onSendWsMessageButtonClick'
            }, {
                style  : {marginLeft: '10px'},
                text   : 'UserService.getAll',
                handler: 'onUserServiceGetAllButtonClick'
            }]
        }]
    }}
}

Neo.applyClassConfig(MainContainer);

export default MainContainer;
