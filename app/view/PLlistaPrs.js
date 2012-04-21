/*
 * File: app/view/PLlistaPrs.js
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

Ext.define('RegCr.view.PLlistaPrs', {
    extend: 'Ext.Panel',

    config: {
        id: 'PLlistaPrs',
        items: [
            {
                xtype: 'list',
                height: 478,
                id: 'ListaPressio',
                itemTpl: [
                    '<div>{Data:date("d/m/Y")} - Min: {minima} - Max: {maxima} -Pols: {pulsacions}</div>'
                ],
                store: 'StoreDadesP',
                onItemDisclosure: false
            }
        ],
        listeners: [
            {
                fn: 'onListaPressioItemTap',
                event: 'itemtap',
                delegate: '#ListaPressio'
            }
        ]
    },

    onListaPressioItemTap: function(dataview, index, target, record, e, options) {
        var store = Ext.data.StoreManager.lookup('StoreDadesP');
        Ext.Msg.confirm('¿Vols esborrar aquest registre?',null,function(btn){
            if (btn=='yes'){
                store.remove(record); 
                store.sync();
            }
        });

    }

});