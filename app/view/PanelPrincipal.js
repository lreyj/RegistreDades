/*
 * File: app/view/PanelPrincipal.js
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

Ext.define('RegCr.view.PanelPrincipal', {
    extend: 'Ext.navigation.View',
    alias: 'widget.PanPrinc',

    config: {
        ui: 'light',
        defaultBackButtonText: 'Tornar',
        navigationBar: {
            height: 38,
            id: 'navbar',
            itemId: 'navbarpr'
        },
        listeners: [
            {
                fn: 'onNavigationviewShow',
                event: 'show'
            },
            {
                fn: 'onMynestedlistLeafItemTap',
                event: 'leafitemtap',
                delegate: '#mynestedlist'
            }
        ],
        items: [
            {
                xtype: 'nestedlist',
                height: 300,
                itemId: 'mynestedlist',
                onItemDisclosure: true,
                store: 'MenuList',
                title: 'Registre cr&ograve;nics',
                toolbar: {
                    xtype: 'toolbar'
                }
            }
        ]
    },

    onNavigationviewShow: function(component, options) {
        var store = Ext.data.StoreManager.lookup('dadesPacient');
        if (store.getCount() === 0){
            Ext.Msg.alert('Atenció!','Per tal de poder utilitzar l\'aplicatiu, ha d\'introduïr algunes dades.', Ext.emptyFn);
            var dades = Ext.create('RegCr.view.DadesPanel', {fullscreen: true});
            //Ext.ComponentQuery.query('#navbar')[0].setHidden(false);
            this.push(dades);
        }
        else {
            //Ext.ComponentQuery.query('#navbar')[0].setHidden(true);
        }
    },

    onMynestedlistLeafItemTap: function(nestedlist, list, index, target, record, e, options) {

        if (record.get('text')=='Detalls'){
            var tabPanel = Ext.create('Ext.Panel', {
                title: 'Registre cr&ograve;nics',
                cls: 'home',
                styleHtmlContent:true,
                items: [
                {
                    html: [
                    "<h2>Registre de dades per pacients Cr&ograve;nics</h2><br>",
                    "Registre de dades de pacients cr&ograve;nics<br>Versi&oacute; 1.0<br>",
                    "<br><br> Autor: Lluis Rey Junquera",
                    "<br>Coordinador: Carlos Sanchez Rosa"
                    ].join("")
                }
                ]
            });
        }
        else if (record.get('text')=='Registrar Pressi&oacute;'){
            var tabPanel= Ext.create('Ext.Panel', {
                title: 'Registre de Pressi&oacute;',
                items: [
                {
                    xtype:'datepickerfield',
                    name:'Data',
                    id:'DataP',
                    label:'Data',
                    dateFormat: 'd/m/Y',
                    picker: { 
                        yearFrom: new Date().getFullYear()-1, yearTo: new Date().getFullYear(),
                        slotOrder: ['day', 'month', 'year'],
                        doneButton: 'Fet',
                        cancelButton: 'Cancel.lar'
                    },
                    value : { day: new Date().getDate(), month: new Date().getMonth()+1, year : new Date().getFullYear()}
                },
                {
                    xtype:'spinnerfield',
                    name:'Maxima',
                    id: 'MaxP',
                    label:'M&aacute;xima',
                    minValue: 30,
                    maxValue: 300,
                    defaultValue: 120,
                    increment: 1,
                    cycle: true
                },
                {
                    xtype:'spinnerfield',
                    name:'Minima',
                    id: 'MinP',
                    label:'M&iacute;nima',
                    minValue: 30,
                    maxValue: 200,
                    defaultValue: 60,
                    increment: 1,
                    cycle: true
                },		
                {
                    xtype:'spinnerfield',
                    name:'Pulsacions',
                    id: 'Pols',
                    label:'Pulsacions',
                    minValue: 30,
                    maxValue: 290,
                    defaultValue: 80,
                    increment: 1,
                    cycle: true
                },	
                {
                    xtype: 'button',
                    text: 'Ok',
                    ui: 'confirm',
                    handler: function(){
                        var dataAct = new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate());
                        var dataPick = Ext.ComponentQuery.query('#DataP')[0].getValue();
                        console.log(dataAct);
                        console.log(dataPick);
                        if (dataPick <= dataAct){
                            var store = Ext.data.StoreManager.lookup('StoreDadesP');
                            var var1 = Ext.ComponentQuery.query('#DataP')[0].getValue();
                            var var2 = Ext.ComponentQuery.query('#MaxP')[0].getValue();
                            var var3 = Ext.ComponentQuery.query('#MinP')[0].getValue();
                            var var4 = Ext.ComponentQuery.query('#Pols')[0].getValue();
                            store.add({Data: var1, maxima: var2, minima: var3, pulsacions: var4});
                            store.sync();
                            Ext.Msg.alert('Registre creat', 'Registre creat correctament.', Ext.emptyFn);
                        }
                        else{Ext.Msg.alert('Error', 'Data incorrecta.', Ext.emptyFn);}
                    }
                }
                ]
            });
        }
        else if (record.get('text')=='Registrar Glucosa'){
            var tabPanel= Ext.create('Ext.Panel', {
                title: 'Registre de Pressi&oacute;',
                items: [
                {
                    xtype:'datepickerfield',
                    name:'Data',
                    label:'Data',
                    id: 'Data',
                    dateFormat: 'd/m/Y',
                    picker: { 
                        yearFrom: new Date().getFullYear()-1, yearTo: new Date().getFullYear(),
                        slotOrder: ['day', 'month', 'year'],
                        doneButton: 'Fet',
                        cancelButton: 'Cancel.lar'
                    },
                    value : { day: new Date().getDate(), month: (new Date().getMonth())+1, year : new Date().getFullYear()}
                },
                {
                    xtype:'spinnerfield',
                    name:'Glucosa',
                    id: 'Glucosa',
                    label:'Glucosa',
                    minValue: 20,
                    maxValue: 500,
                    defaultValue: 120,
                    increment: 1,
                    cycle: true
                },
                {
                    xtype: 'button',
                    text: 'Ok',
                    ui: 'confirm',
                    handler: function(){
                        var dataAct = new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate());
                        var dataPick = Ext.ComponentQuery.query('#Data')[0].getValue();
                        console.log(dataAct);
                        console.log(dataPick);
                        if (dataPick <= dataAct){
                            var store = Ext.data.StoreManager.lookup('StoreDadesG');
                            var var1 = Ext.ComponentQuery.query('#Data')[0].getValue();
                            var var2 = Ext.ComponentQuery.query('#Glucosa')[0].getValue();
                            store.add({Data: var1, Glucosa: var2});
                            store.sync();
                            Ext.Msg.alert('Registre creat', 'Registre creat correctament.', Ext.emptyFn);
                        }
                        else{Ext.Msg.alert('Error', 'Data incorrecta.', Ext.emptyFn);}
                    }
                }
                ]
            });
        }
        else if (record.get('text')=='Dades Pacient'){
            var tabPanel= Ext.create('RegCr.view.DadesPanel');
            var store = Ext.data.StoreManager.lookup('dadesPacient');
            //console.log('Load data into dadesPacient form');
            if (store.getCount() > 0){
                var data = store.getAt(0);
                console.log(data.get('Codi'));
                Ext.ComponentQuery.query('#Codi')[0].setValue(data.get('Codi'));
                Ext.ComponentQuery.query('#Nom')[0].setValue(data.get('Nom'));
                Ext.ComponentQuery.query('#email')[0].setValue(data.get('eMail'));
                Ext.ComponentQuery.query('#PressTgl')[0].setValue(data.get('Pressio'));
                Ext.ComponentQuery.query('#GlucTgl')[0].setValue(data.get('Glucosa'));
            }
        }
        else if (record.get('text')=='Hist&ograve;ric Pressi&oacute;'){
            var tabPanel= Ext.create('RegCr.view.PLlistaPrs');
        }
        else if (record.get('text')=='Hist&ograve;ric Glucosa'){
            var tabPanel= Ext.create('RegCr.view.PLlistaGlc');
        }
        else if (record.get('text')=='Gr&agrave;fica de Pressi&oacute;'){
            var tabPanel= Ext.create('RegCr.view.GraficPrs');
        }
        else if (record.get('text')=='Gr&agrave;fica de Glucosa'){
            var tabPanel= Ext.create('RegCr.view.GraficGlc');
        }
        //Ext.ComponentQuery.query('#navbar')[0].setHidden(false);
        this.push(tabPanel);

    }

});