const $ = global.$;
const path = global.taskPath;
const gulp = require('gulp');

gulp.task('clear:vendor', (done) => {
	done();
});

gulp.task('build:vendor', (done) => {
	done();
});

gulp.task('dev:vendor', (done) => {
	done();
});

gulp.task('watch:vendor', () => {
	return gulp.watch(path.watch.vendor, gulp.series(
		'dev:vendor',
		'server:reload'
	));
});
