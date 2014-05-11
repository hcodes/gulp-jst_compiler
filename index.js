var jst = require('jst_compiler');

var through2 = require('through2');
var path = require('path');

var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

module.exports = function () {
    function transform (file, enc, next) {
        var self = this;

        if (file.isNull()) {
            this.push(file); // pass along
            return next();
        }

        if (file.isStream()) {
            this.emit('error', new PluginError('gulp-jst', 'Streaming not supported'));
            return next();
        }

        var str = file.contents.toString('utf8');
        var tmpl = jst.compileText(str, file.path);

        file.contents = new Buffer(tmpl);
        self.push(file);

        next();
    }

    return through2.obj(transform);
};
