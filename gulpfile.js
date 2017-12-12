global.$ = require('gulp-load-plugins')({
	renameFn: function(name) {
		return name.replace('gulp-', '').replace('-', '_');
	}
});

global.errorHandler = (err) => {
	$.notify.onError({
		title: "Gulp error in " + err.plugin,
		message: err.toString()
	})(err)
};

global.taskPath = require('./config').path;

const $ = global.$;
const gulp = require('gulp');
const requireDir = require('require-dir')('./gulp-tasks', { recurse: true });

gulp.task('clear', gulp.parallel(
	'clear:image', 'clear:font', 'clear:vendor', 'clear:html', 'clear:style', 'clear:script'
));

gulp.task('build', gulp.series(
	'clear',
	gulp.parallel(
		'build:image', 'build:font', 'build:vendor'
	),
	gulp.parallel(
		'build:style', 'build:script'
	),
	'build:html'
));

gulp.task('watch', gulp.parallel(
	'watch:image', 'watch:font', 'watch:vendor', 'watch:style', 'watch:script', 'watch:html'
));

gulp.task('dev', gulp.series(
	gulp.parallel(
		'dev:image', 'dev:font', 'dev:vendor'
	),
	gulp.parallel(
		'dev:style', 'dev:script'
	),
	'dev:html'
));

gulp.task('default', gulp.series(
	'dev',
	gulp.parallel(
		'server:init', 'watch'
	)
));
