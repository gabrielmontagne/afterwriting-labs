define(function(require) {

    var BaseAssert = require('acceptance/helper/assert/base-assert');

    var IoAssert = BaseAssert.extend({

        /**
         * Asserts if last used optionis visible
         * @param {Boolean} is_visible
         */
        last_used_is_visible: function(is_visible) {
            this.is_visible(this.dom.$open_last_used, is_visible);
        },

        /**
         * Asserts if last used title matches given value
         * @param {String} title
         */
        last_used_title: function(title) {
            chai.assert.strictEqual(title, this.dom.open_last_used_title());
        },

        /**
         * Asserts if open from GoogleDrive button is visible
         * @param {String} source - source from which file is supposed to be opened: 'google_drive' or 'dropbox'
         * @param {Boolean} is_visible
         */
        open_button_visible: function(source, is_visible) {
            var $selector = '$open_' + source;
            this.is_visible(this.dom[$selector], is_visible);
        },

        /**
         * Asserts if a save button is visible in a given plugin
         * @param {String} destination - 'dropbox' or 'google_drive'
         * @param {String} plugin - 'save', 'editor' or 'previe'
         * @param {String} format - 'fountain' or 'pdf'
         * @param {Boolean} is_visible
         */
        save_button_visible: function(destination, plugin, format, is_visible) {
            var method = '$save_' + format + '_' + destination;
            this.is_visible(this.dom[method](plugin), is_visible);
        }
    });

    return IoAssert;
});