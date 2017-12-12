let buildPath = {
    style: './statics/css/',
    image: './statics/img/',
    script: './statics/js/',
    vendor: './statics/plugins/',
    font: './statics/fonts/',
    html: './'
};

let srcPath = {
    style: ['./dist/sass/*.scss'],
    image: ['./dist/img/**/*.*', '!dist/img/images/**/*.*'],
    script: ['./dist/js/**/*.js'],
    vendor: ['./dist/plugins/**/*.*'],
    font: ['./dist/fonts/**/*.*'],
    html: ['dist/pug/*.pug', '!dist/pug/_*.pug']
};

let watchPath = {
    html: 'dist/pug/**/*.pug',
    style: ['./dist/sass/**/*.scss']
};

// src path is default watch path
watchPath = Object.assign({}, srcPath, watchPath);

module.exports = {
    path: {
        build: buildPath,
        src: srcPath,
        watch: watchPath
    }
};
