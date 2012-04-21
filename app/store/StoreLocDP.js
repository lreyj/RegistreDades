/*
 * File: app/store/StoreLocDP.js
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

Ext.define('RegCr.store.StoreLocDP', {
    extend: 'Ext.data.Store',
    requires: [
        'RegCr.model.DadesPress'
    ],

    config: {
        autoLoad: true,
        model: 'RegCr.model.DadesPress',
        storeId: 'StoreDadesP',
        proxy: {
            type: 'localstorage',
            id: 'proxyLocalDP'
        },
        sorters: {
            sorterFn: function(first, second) {
                var v1 = new Date(first.data.Data);
                var v2 = new Date(second.data.Data);
                return v1 > v2 ? 1 : (v1 < v2 ? -1 : 0);
            },
            id: 'OrdenaP',
            root: 'Data'
        }
    }
});