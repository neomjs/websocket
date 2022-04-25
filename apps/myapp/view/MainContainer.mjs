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
                handler: 'onSendWsMessageButtonClick',
                text   : 'Send WS message'
            }, {
                handler: 'onUserServiceReadButtonClick',
                style  : {marginLeft: '10px'},
                text   : 'UserService.read'
            }]
        }, {
            module      : UserTableContainer,
            flex        : 1,
            reference   : 'user-table',
            wrapperStyle: {marginTop: '20px', maxHeight: '300px'}
        }, {
            ntype: 'toolbar',
            flex : 'none',
            items: [{
                handler: 'onSendWsMessageButtonClick',
                iconCls: 'fa fa-angles-left'
            }, {
                handler: 'onPrevPageButtonClick',
                iconCls: 'fa fa-angle-left',
                style  : {marginLeft: '10px'}
            }, {
                handler: 'onNextPageButtonClick',
                iconCls: 'fa fa-angle-right',
                style  : {marginLeft: '10px'}
            }, {
                disabled: true,
                handler : 'onSendWsMessageButtonClick',
                iconCls : 'fa fa-angles-right',
                style   : {marginLeft: '10px'}
            }]
        }]
    }}
}

Neo.applyClassConfig(MainContainer);

export default MainContainer;
