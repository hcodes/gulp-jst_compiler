gulp-jst_compiler
=================

A JST compiler plugin for Gulp

[![Build Status](https://travis-ci.org/hcodes/gulp-jst_compiler.png?branch=master)](https://travis-ci.org/hcodes/gulp-jst_compiler)

## Install

```
npm install gulp-jst_compiler --save-dev
```

## Usage
```javascript
var jst = require('gulp-jst_compiler');
var concat = require('gulp-concat');
var path = require('path');

gulp.task('jst', function () {
  gulp.src('./jst/**/*.jst')
    .concat('all.jst.js')
    .pipe(jst())
    .pipe(gulp.dest('./public/js'));
});

gulp.task('default', ['jst']);
```
