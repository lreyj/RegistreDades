/*
 * File: app/store/MIniciStore.js
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

Ext.define('RegCr.store.MIniciStore', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.StoreMenu',
    requires: [
        'RegCr.model.ListItems'
    ],

    config: {
        autoLoad: true,
        model: 'RegCr.model.ListItems',
        storeId: 'MenuList',
        root: 'item',
        proxy: {
            type: 'ajax',
            url: 'data/menu.json',
            reader: {
                type: 'json',
                rootProperty: 'items'
            }
        }
    }
});