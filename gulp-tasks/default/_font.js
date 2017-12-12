const $ = global.$;
const path = global.taskPath;
const gulp = require('gulp');

gulp.task('clear:font', (done) => {
	done();
});

gulp.task('build:font', (done) => {
	done();
});

gulp.task('dev:font', (done) => {
	done();
});

gulp.task('watch:font', () => {
	return gulp.watch(path.watch.font, gulp.series(
		'dev:font',
		'server:reload'
	));
});
