const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

// HTML
function html() {
    return gulp.src('./**/*.html')
    .pipe(plumber())
    .pipe(browserSync.reload({stream:true}));
}

// PHP
function php() {
	return gulp.src('./**/*.php')
		.pipe(plumber())
		.pipe(browserSync.reload({stream:true}));
}

// SASS
function styles() {
	return gulp.src('./sass/**/*.sass')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'expanded'
			}).on('error', sass.logError))
		// .pipe(autoprefixer({ browsers: ['last 2 version', '> 5%'] }))
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
		.pipe(sourcemaps.write('../sourcemaps'))
		.pipe(gulp.dest('css'))
		.pipe(browserSync.stream());
}

// IMAGES
function images() {
	return gulp.src('./img/**/*')
		.pipe(plumber())
		.pipe(imagemin())
		.pipe(gulp.dest('images'))
}

// CSS IMAGES
function cssimages() {
	return gulp.src('./css/img/**/*')
		.pipe(plumber())
		.pipe(imagemin())
		.pipe(gulp.dest('css/images'))
}

// WATCH
function watch() {
	browserSync.init({
		open: 'external',
		host: 'mvcframework.lan',
		proxy: 'mvcframework.lan',
		port: 8080,
		notify: false,
		ghostMode: {
			clicks: true,
			scroll: true,
			location: true,
			forms: true
		},
		logLevel: "debug",
		browser: "firefox developer edition",
		reloadOnRestart: true,
		scrollProportionally: true
	});
	// gulp.watch('./sass/**/*.sass', styles).on('change', browserSync.reload);
	gulp.watch('./sass/**/*.sass', styles);
	// gulp.watch('./javascript/**/*.js', scripts).on('change', browserSync.reload);
	// gulp.watch('./javascript/**/*.js', es6scripts).on('change', browserSync.reload);
	gulp.watch('./img/**/*', images)
	gulp.watch('./css/img/**/*', cssimages)
	gulp.watch('./*.html', html).on('change', browserSync.reload);
	gulp.watch('./**/*.js').on('change', browserSync.reload);
	gulp.watch('./**/*.php', php).on('change', browserSync.reload);
}

exports.html = html;
exports.php = php;
exports.styles = styles;
// exports.scripts = scripts;
// exports.es6scripts = es6scripts;
exports.images = images;
exports.cssimages = cssimages;
exports.watch = watch;

gulp.task('default', gulp.parallel(styles, images, cssimages, html, php, watch));