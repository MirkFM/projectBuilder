const $ = global.$;
const path = global.taskPath;
const gulp = require('gulp');

gulp.task('clear:style', (done) => {
	done();
});

gulp.task('build:style', (done) => {
	done();
});

gulp.task('dev:style', (done) => {
	done();
});

gulp.task('watch:style', () => {
	return gulp.watch(path.watch.style, gulp.series(
		'dev:style',
		'server:reload'
	));
});
