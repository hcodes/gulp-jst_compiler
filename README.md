gulp-jst_compiler
=================

A [JST compiler](https://github.com/hcodes/jst) plugin for Gulp

[![Build Status](https://travis-ci.org/hcodes/gulp-jst_compiler.png?branch=master)](https://travis-ci.org/hcodes/gulp-jst_compiler)

## Install

```
npm install gulp-jst_compiler --save-dev
```

## Usage
```javascript
var jst = require('gulp-jst_compiler');

gulp.task('jst', function () {
  gulp.src('./jst/**/*.jst')
    .pipe(jst('all.jst.js'))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('default', ['jst']);
```


## Options
```javascript
.pipe(jst('all.jst.js', {withoutKernel: true})) // compile without jst-kernel 
```
