Ext.define('Kort.view.profile.Container', {
	extend: 'Ext.Container',
	alias: 'widget.profilecontainer',
    requires: [
        'Ext.TitleBar',
        'Ext.Button',
        'Kort.view.profile.ContentComponent',
        'Kort.view.profile.BadgesDataView'
    ],
	
	config: {
		title: Ext.i18n.Bundle.message('tab.profile'),
		url: 'profile',
		id: 'profileContainer',
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
		iconCls: 'user',
		layout: 'vbox',
        
		items: [
			{
				xtype: 'titlebar',
				cls: 'titlebar',
				docked: 'top',
				title: Ext.i18n.Bundle.message('profile.title'),
                
                items: [
                    {
                        xtype: 'button',
                        cls: 'profileRefreshButton',
                        iconCls: 'refresh',
                        iconMask: true,
                        align: 'right'
                    },
                    {
                        text: Ext.i18n.Bundle.message('profile.button.logout'),
                        cls: 'profileLogoutButton',
                        ui: 'decline',
                        align: 'right'
                    }
                ]
			}
		]
	},
    initialize: function () {
        this.callParent(arguments);

        var profileContentComponent = {
            xtype: 'profilecontentcomponent'
        };
        
        var badgesDataView = {
            xtype: 'profilebadgesdataview'
        }
        
        this.add([profileContentComponent, badgesDataView]);
    }
});