Ext.define('Kort.view.bugmap.fix.FormContainer', {
	extend: 'Ext.Container',
	alias: 'widget.fixformcontainer',
    requires: [
        'Ext.ux.field.File'
    ],
    
	config: {
		layout: 'vbox',
        title: Ext.i18n.Bundle.message('fix.tab.form.title'),
        fullscreen: true,
        
        listeners: {
            initialize: 'onInitialize'
        },
        
        items: [
            {
                html: ''
            },
            {
                xtype: 'formpanel',
                id: 'taskform',
                flex: 1,
                items: [
                    {
                        xtype: 'textfield',
                        name: 'message',
                        required: true,
                        label: Ext.i18n.Bundle.message('fix.field.message')
                    },
                    {
                        xtype: 'filefield',
                        id: 'imageFileField',
                        name: 'image',
                        required: true,
                        label: Ext.i18n.Bundle.message('fix.field.image')
                    },
                    {
                        xtype: 'button',
                        ui: 'confirm',
                        id: 'fixSubmitButton',
                        text: Ext.i18n.Bundle.message('fix.button.submit')
                    }
                ]
            }
        ]
	},
    
    onInitialize: function() {
        //this.getItems().items[0].setHtml(this.getBugdata().get('description'));
    }
});