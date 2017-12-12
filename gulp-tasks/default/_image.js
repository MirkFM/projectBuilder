const $ = global.$;
const path = global.taskPath;
const gulp = require('gulp');

gulp.task('clear:image', (done) => {
	done();
});

gulp.task('build:image', (done) => {
	done();
});

gulp.task('dev:image', (done) => {
	done();
});

gulp.task('watch:image', () => {
	return gulp.watch(path.watch.image, gulp.series(
		'dev:image',
		'watch:image'
	));
});
