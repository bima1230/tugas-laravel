<<<<<<< HEAD
=======
/*! Bootstrap integration for DataTables' SearchPanes
 * ©2016 SpryMedia Ltd - datatables.net/license
 */
>>>>>>> 0884518 (tugas migrasi,_view_dan_delete)
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery', 'datatables.net-bs4', 'datatables.net-searchpanes'], function ($) {
            return factory($, window, document);
        });
    }
    else if (typeof exports === 'object') {
        // CommonJS
        module.exports = function (root, $) {
            if (!root) {
                root = window;
            }
            if (!$ || !$.fn.dataTable) {
<<<<<<< HEAD
                $ = require('datatables.net-bs4')(root, $).$;
            }
            console.log($.fn.dataTable);
            if (!$.fn.dataTable.SearchPanes) {
                console.log("not present");
=======
                // eslint-disable-next-line @typescript-eslint/no-var-requires
                $ = require('datatables.net-bs4')(root, $).$;
            }
            if (!$.fn.dataTable.SearchPanes) {
                // eslint-disable-next-line @typescript-eslint/no-var-requires
>>>>>>> 0884518 (tugas migrasi,_view_dan_delete)
                require('datatables.net-searchpanes')(root, $);
            }
            return factory($, root, root.document);
        };
    }
    else {
        // Browser
        factory(jQuery, window, document);
    }
}(function ($, window, document) {
    'use strict';
<<<<<<< HEAD
    var DataTable = $.fn.dataTable;
    $.extend(true, DataTable.SearchPane.classes, {
        buttonGroup: 'btn-group col justify-content-end',
        disabledButton: 'disabled',
        dull: '',
=======
    var dataTable = $.fn.dataTable;
    $.extend(true, dataTable.SearchPane.classes, {
        buttonGroup: 'btn-group',
        disabledButton: 'disabled',
>>>>>>> 0884518 (tugas migrasi,_view_dan_delete)
        narrow: 'col',
        pane: {
            container: 'table'
        },
        paneButton: 'btn btn-light',
        pill: 'pill badge badge-pill badge-secondary',
<<<<<<< HEAD
        search: 'col-sm form-control search',
        searchCont: 'input-group col-sm',
=======
        search: 'form-control search',
        searchCont: 'input-group',
>>>>>>> 0884518 (tugas migrasi,_view_dan_delete)
        searchLabelCont: 'input-group-append',
        subRow1: 'dtsp-subRow1',
        subRow2: 'dtsp-subRow2',
        table: 'table table-sm table-borderless',
<<<<<<< HEAD
        topRow: 'dtsp-topRow row'
    });
    $.extend(true, DataTable.SearchPanes.classes, {
        clearAll: 'dtsp-clearAll col-auto btn btn-light',
        container: 'dtsp-searchPanes',
        panes: 'dtsp-panes dtsp-container',
        title: 'dtsp-title col',
        titleRow: 'dtsp-titleRow row'
    });
    return DataTable.searchPanes;
=======
        topRow: 'dtsp-topRow'
    });
    $.extend(true, dataTable.SearchPanes.classes, {
        clearAll: 'dtsp-clearAll btn btn-light',
        collapseAll: 'dtsp-collapseAll btn btn-light',
        container: 'dtsp-searchPanes',
        disabledButton: 'disabled',
        panes: 'dtsp-panes dtsp-panesContainer',
        showAll: 'dtsp-showAll btn btn-light',
        title: 'dtsp-title',
        titleRow: 'dtsp-titleRow'
    });
    return dataTable.searchPanes;
>>>>>>> 0884518 (tugas migrasi,_view_dan_delete)
}));
