gulp-jst
========

A JST plugin for Gulp

[![Build Status](https://travis-ci.org/hcodes/gulp-jst.png?branch=master)](https://travis-ci.org/hcodes/gulp-jst)

## Install

```
npm install gulp-jst --save-dev
```

## Usage
```javascript
var jst = require('gulp-jst');
var concat = require('gulp-concat');
var path = require('path');

gulp.task('jst', function () {
  gulp.src('./jst/**/*.jst')
    .concat('all.jst.js')
    .pipe(jst())
    .pipe(gulp.dest('./public/js'));
});
```
