var jst = require('jst_compiler');

var through = require('through');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

var path = require('path');
var File = gutil.File;

module.exports = function (fileName, options) {
    if (!fileName) {
        throw new PluginError('gulp-jst_compiler', 'Missing fileName option for gulp-jst_compiler');
    }

    if (!options) {
        options = {};   
    }

    var buffer = [];
    var firstFile = null;

    function bufferContents(file) {
        if (file.isNull()) {
            return; 
        }

        if (file.isStream()) {
            return this.emit('error', new PluginError('gulp-jst_compiler', 'Streaming not supported'));
        }

        buffer.push(file.contents);
    }

    function endStream() {
        if (!buffer.length) {
            return this.emit('end');
        }

        var tmpl = jst.compileText(buffer.join('\n'), options);

        var joinedContents = new Buffer(tmpl, 'utf8');
        var joinedPath = path.join(firstFile.base, fileName);
        var joinedFile = new File({
            cwd: firstFile.cwd,
            base: firstFile.base,
            path: joinedPath,
            contents: joinedContents
        });

        this.emit('data', joinedFile);
        this.emit('end');
    }

    return through(bufferContents, endStream);
};
