const $ = global.$;
const path = global.taskPath;
const gulp = require('gulp');

gulp.task('clear:script', (done) => {
	done();
});

gulp.task('build:script', (done) => {
	done();
});

gulp.task('dev:script', (done) => {
	done();
});

gulp.task('watch:script', () => {
	return gulp.watch(path.watch.script, gulp.series(
		'dev:script',
		'server:reload'
	));
});
