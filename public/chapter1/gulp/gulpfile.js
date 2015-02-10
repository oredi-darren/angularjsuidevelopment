(function() {
    'use strict';
    var args = require('yargs');
    var config = require('./gulp.config')();
    var gulp = require('gulp');
    var plug = require('gulp-load-plugins')({
        lazy: true
    });

    gulp.task('analyze', function() {
        log('Analyzing source with JSHint and JSCS');

        return gulp
            .src(config.alljs)
            .pipe(plug.if(args.verbose, plug.print()))
            .pipe(plug.jscs())
            .pipe(plug.jshint())
            .pipe(plug.jshint.reporter('jshint-stylish', {
                verbose: true
            }))
            .pipe(plug.jshint.reporter('fail'));
    });

    function log(message) {
        if (typeof(message) === 'object') {
            for (var item in message) {
                if (message.hasOwnProperty(item)) {
                    plug.util.log(plug.util.colors.blue(message[item]));
                }
            }
        } else {
            plug.util.log(plug.util.colors.blue(message));
        }
    }
})();
