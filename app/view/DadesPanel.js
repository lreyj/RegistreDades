/*
 * File: app/view/DadesPanel.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('RegCr.view.DadesPanel', {
    extend: 'Ext.Panel',

    config: {
        id: 'DadesPac',
        items: [
            {
                xtype: 'fieldset',
                itemId: 'myfieldset1',
                title: 'Dades',
                items: [
                    {
                        xtype: 'numberfield',
                        id: 'Codi',
                        label: 'Codi'
                    },
                    {
                        xtype: 'textfield',
                        id: 'Nom',
                        label: 'Nom'
                    },
                    {
                        xtype: 'emailfield',
                        id: 'email',
                        itemId: 'myemailfield',
                        label: 'Mail',
                        placeHolder: 'email@example.com'
                    },
                    {
                        xtype: 'togglefield',
                        id: 'PressTgl',
                        label: 'Pressió'
                    },
                    {
                        xtype: 'togglefield',
                        id: 'GlucTgl',
                        label: 'Glucosa'
                    },
                    {
                        xtype: 'button',
                        id: 'Grabar',
                        itemId: 'mybutton',
                        text: 'Grabar'
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onEmailChange',
                event: 'change',
                delegate: '#email'
            },
            {
                fn: 'onGrabarTap',
                event: 'tap',
                delegate: '#Grabar'
            }
        ]
    },

    onEmailChange: function(textfield, newValue, oldValue, options) {
        re=/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,3})$/

        if(!re.exec(newValue))    {

            Ext.Msg.alert('Avís:', 'Adreça electrònica incorrecta.');

        }
    },

    onGrabarTap: function(button, e, options) {
        var store = Ext.data.StoreManager.lookup('dadesPacient');

        var num =  Ext.ComponentQuery.query('#Codi')[0].getValue();
        var nom = Ext.ComponentQuery.query('#Nom')[0].getValue();
        var mail = Ext.ComponentQuery.query('#email')[0].getValue();
        var pres = Ext.ComponentQuery.query('#PressTgl')[0].getValue();
        var gluc = Ext.ComponentQuery.query('#GlucTgl')[0].getValue();

        //var last = store.max();
        var isFirst = store.getAt(0);
        //if not exists, build the first item (this area needs to be replaced with a function that construct a whole settings file
        //console.log(store.getCount());
        if (store.getCount()>0) {
            //console.log('inside');
            store.removeAt(0);
            store.sync();
            store.add({Codi: num, Nom: nom, eMail: mail, Pressio: pres, Glucosa: gluc});
            store.sync();
        }
        else{
            store.add({Codi: num, Nom: nom, eMail: mail, Pressio: pres, Glucosa: gluc});
            store.sync();
        }

        Ext.Msg.alert('Dades Pacient', 'Les dades s\'han desat correctament.', Ext.emptyFn);
        this.getParent().pop();
        Ext.ComponentQuery.query('#navbar')[0].titleComponent.setTitle('Registre cr&ograve;nics');
        Ext.ComponentQuery.query('#navbar')[0].titleComponent.setMinWidth(200);

    }

});