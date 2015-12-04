var  	gulp = require('gulp')
	,	stylus = require('gulp-stylus')
	,	concat = require('gulp-concat')
	// ,	uglify = require('gulp-uglify')
	,	uglifycss = require('gulp-uglifycss')
	, 	ngAnnotate = require('gulp-ng-annotate')
	, 	watcher = gulp.watch(['./main/client/src/**/*.js', './main/client/styles/*.styl'], ['default']);

watcher.on('change', function( event ) {
		console.log('File ' + event.path + ' was ' + event.type + ' at ' + new Date() + ' , running tasks...');
});

gulp.task('stylus', function() {
	gulp.src('./main/client/styles/*.styl')
		.pipe(stylus())
		.pipe(uglifycss())
		.pipe(concat('styles.css'))
		.pipe(gulp.dest('./public/styles'))
});

gulp.task('javascript', function() {
	gulp.src('./main/client/src/**/*.js')
		.pipe(ngAnnotate())
		// .pipe(uglify())
		.pipe(concat('all.js'))
		.pipe(gulp.dest('./public/scripts'))
});

gulp.task('default', ['stylus', 'javascript']);