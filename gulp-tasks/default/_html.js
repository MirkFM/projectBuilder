const $ = global.$;
const path = global.taskPath;
const gulp = require('gulp');

gulp.task('clear:html', (done) => {
    done();
});

gulp.task('build:html', (done) => {
	done();
});

gulp.task('dev:html', (done) => {
	done();
});

gulp.task('watch:html', () => {
	return gulp.watch(path.watch.html, gulp.series(
		'dev:html',
		'server:reload'
	));
});
