/*
 * File: app/view/PanelPrincipal.js
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

Ext.define('MyApp.view.PanelPrincipal', {
    extend: 'Ext.navigation.View',
    alias: 'widget.PanPrinc',

    config: {
        ui: 'light',
        defaultBackButtonText: 'Tornar',
        items: [
            {
                xtype: 'nestedlist',
                height: 300,
                itemId: 'mynestedlist',
                store: 'MenuList',
                title: 'Registre cr&ograve;nics',
                activeItem: 1,
                toolbar: {
                    xtype: 'toolbar'
                }
            }
        ],
        navigationBar: {
            height: 38
        },
        listeners: [
            {
                fn: 'onMynestedlistLeafItemTap',
                event: 'leafitemtap',
                delegate: '#mynestedlist'
            }
        ]
    },

    onMynestedlistLeafItemTap: function(nestedlist, list, index, target, record, e, options) {


        if (record.get('text')=='Detalls'){
            var tabPanel = Ext.create('Ext.Panel', {
                title: 'Registre cr&ograve;nics',
                styleHtmlContent:true,
                items: [
                {
                    html: [
                    "<h2>Registre de dades per pacients Cr&ograve;nics</h2><br>",
                    "Registre de dades de pacients cr&ograve;nics<br>Versi&oacute; 1.0<br>",
                    "<br><br> Autor: Lluis Rey",
                    "<br>Coordinador: ..."
                    ].join("")
                }
                ]
            });
        }
        else if (record.get('text')=='Registrar'){
            var tabPanel= Ext.create('Ext.Panel', {
                title: 'Panel dinamic prova...',
                items: [
                {
                    xtype:'datepickerfield',
                    name:'Fecha',
                    label:'Fecha',
                    dateFormat: 'd/m/Y',
                    picker: { yearFrom: new Date().getFullYear()-1, yearTo: new Date().getFullYear()},
                    value : { day: new Date().getDate(), month: (new Date().getMonth()), year : new Date().getFullYear()}
                },
                {
                    xtype:'spinnerfield',
                    name:'Maxima',
                    label:'M&aacute;xima',
                    minValue: 30,
                    maxValue: 300,
                    increment: 1,
                    cycle: true
                },
                {
                    xtype:'spinnerfield',
                    name:'Minima',
                    label:'M&iacute;nima',
                    minValue: 5,
                    maxValue: 200,
                    increment: 1,
                    cycle: true
                },		
                {
                    xtype: 'button',
                    text: 'Envia',
                    ui: 'confirm',
                    handler: function(){
                        this.up('contactform').submit();
                    }
                }
                ]
            });
        }
        this.push(tabPanel);
    }

});