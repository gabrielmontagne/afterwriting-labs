define(function(require) {

    var Env = require('acceptance/env');

    describe('Settings', function() {

        var env;

        beforeEach(function() {
            env = Env.create();
        });

        afterEach(function() {
            env.destroy();
        });

        it('WHEN night mode checkbox is selected THEN night mode switches immediately,' +
            'AND WHEN night mode checkbox is deselected THEN night mode switches immediately', function() {
            // GIVEN
            env.scenarios.create_new_script('test');
            env.user.theme.open_plugin('settings');

            // WHEN
            env.user.settings.select_night_mode();

            // THEN
            env.assert.theme.night_mode_is_enabled(true);
            
            // AND WHEN
            env.user.settings.select_night_mode();
            
            // THEN
            env.assert.theme.night_mode_is_enabled(false);
        });
        
        it.skip('GIVEN no custom settings are set WHEN settings plugin is selected THEN default values are selected', function() {
            
        });

    });

});