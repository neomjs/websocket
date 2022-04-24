import Component               from '../../../node_modules/neo.mjs/src/component/Base.mjs';
import MainContainerController from './MainContainerController.mjs';
import TabContainer            from '../../../node_modules/neo.mjs/src/tab/Container.mjs';
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
        layout    : {ntype: 'vbox'},

        items: [{
            module: TabContainer,
            height: 300,
            width : 500,
            style : {flex: 'none', margin: '20px'},

            itemDefaults: {
                module: Component,
                cls   : ['neo-examples-tab-component'],
                style : {padding: '20px'},
            },

            items: [{
                tabButtonConfig: {
                    iconCls: 'fa fa-home',
                    text   : 'Tab 1'
                },
                vdom: {innerHTML: 'Welcome to your new Neo App.'}
            }, {
                tabButtonConfig: {
                    iconCls: 'fa fa-play-circle',
                    text   : 'Tab 2'
                },
                vdom: {innerHTML: 'Have fun creating something awesome!'}
            }]
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
