/*
 * File: app/view/LlistaGlc.js
 *
 * This file was generated by Sencha Designer version 2.0.0.
 * http://www.sencha.com/products/designer/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Designer does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('RegCr.view.LlistaGlc', {
    extend: 'Ext.dataview.List',

    config: {
        id: 'LisGluc',
        store: 'StoreDadesG',
        grouped: false,
        itemTpl: [
            '<div>{Data:date("d/m/Y")} - Sucre: {Glucosa}</div>'
        ]
    }

});