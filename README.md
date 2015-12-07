gulp-jst_compiler
=================

A [JST compiler](https://github.com/hcodes/jst) plugin for Gulp

[![NPM version](https://img.shields.io/npm/v/gulp-jst_compiler.svg?style=flat)](https://www.npmjs.com/package/gulp-jst_compiler)
[![Build Status](https://img.shields.io/travis/hcodes/gulp-jst_compiler.svg?style=flat)](https://travis-ci.org/hcodes/gulp-jst_compiler)
[![Coverage Status](https://img.shields.io/coveralls/hcodes/gulp-jst_compiler.svg?style=flat)](https://coveralls.io/r/hcodes/gulp-jst_compiler)<br/>
[![Dependency Status](https://img.shields.io/david/hcodes/gulp-jst_compiler.svg)](https://david-dm.org/hcodes/gulp-jst_compiler)
[![devDependency Status](https://img.shields.io/david/dev/hcodes/gulp-jst_compiler.svg)](https://david-dm.org/hcodes/gulp-jst_compiler#info=devDependencies)

## Install

```
npm install gulp-jst_compiler --save-dev
```

## Usage
```javascript
var jst = require('gulp-jst_compiler');

gulp.task('jst', function () {
  gulp.src('./templates/**/*.jst.html')
    .pipe(jst('all.jst.js'))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('default', ['jst']);
```


## Options
```javascript
.pipe(jst('all.jst.js', {withoutKernel: true})) // compile without jst-kernel 
```
