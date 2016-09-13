/**
 * Created by wujian on 16/4/23.
 */

var fs = require('fs');
var path = require('path');
var marked = require('marked');
var highlightjs = require('highlight.js');
var ejs = require('ejs');

var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var base64 = require('gulp-base64');
var minifyCss = require('gulp-minify-css');
var postcss = require('gulp-postcss');
var autoprefixer = require('gulp-autoprefixer');


const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');
const DOC_DIR = path.resolve(__dirname, 'doc');
const PUBLIC_DIR = path.resolve(__dirname, 'public');
setupMarked()
var browsers = [
		'last 5 iOS versions',
		'last 5 Android versions',
		'last 5 ExplorerMobile versions',
		'last 5 ChromeAndroid versions',
		'last 5 UCAndroid versions',
		'last 5 FirefoxAndroid versions',
		'last 5 OperaMobile versions',
		'last 5 OperaMini versions',
		'last 5 Samsung versions',

		'last 3 Chrome versions',
		'last 3 Firefox versions',
		'last 3 Safari versions',
		'last 3 Edge versions',
	],
	base64Config = {
		/* baseDir: '/Users/wujian/Development/app/dist',*/
		extensions: ['svg', 'png', /\.jpg#datauri$/i],
		/*  exclude:    [/\.server\.(com|net)\/dynamic\//, '--live.jpg'],*/
		maxImageSize: 8 * 1024, // bytes
		debug: true
	}

var fnSass = function () {
		return gulp.src(['src/**/*.scss', '!src/_*.scss'])
			.pipe(sass().on('error', sass.logError))
			.pipe(autoprefixer({
				browsers: browsers,
				cascade: false
			}))
			.pipe(base64(base64Config))
			.pipe(gulp.dest('dist/css'))
			.pipe(minifyCss())
			.pipe(rename({
				extname: ".min.css"
			}))
			.pipe(gulp.dest('dist/css'))
	},
	fnWatch = function () {
		gulp.watch('src/**/*', ['sass']);
		gulp.watch('doc/**/*', ['doc']);
	},
	fnDemoSass = function () {
		return gulp.src(['demo/sass/*.scss'])
			.pipe(sass().on('error', sass.logError))
			.pipe(autoprefixer({
				browsers: browsers,
				cascade: false
			}))
			.pipe(base64(base64Config))
			.pipe(gulp.dest('demo/css'))
			.pipe(minifyCss())
			.pipe(rename({
				extname: ".min.css"
			}))
			.pipe(gulp.dest('demo/css'))
	},
	fnDemoWatch = function () {
		gulp.watch('demo/less/**/*', ['sass']);
	},
	//doc
	fnDoc = function(){
		var docsPath = path.resolve(DOC_DIR, 'docs.md');
		var docsHTML = marked(fs.readFileSync(docsPath, 'utf-8'));
		var siteIndexTemplatePath = path.resolve(DOC_DIR, 'index.ejs');
		ejs.renderFile(siteIndexTemplatePath, {
			docs: docsHTML
		}, function(err, str){
			if (err) throw err;
			var siteIndexHTML = str;
			var publicIndexPath = path.resolve(PUBLIC_DIR, 'index.html');
			fs.writeFileSync(publicIndexPath, siteIndexHTML, 'utf-8');
		});
	}

gulp.task('watch', fnWatch);
gulp.task('sass', fnSass);
gulp.task('demo:sass', fnDemoSass)
gulp.task('demo:watch', fnDemoWatch)
gulp.task('doc', fnDoc)
gulp.task('demo', ['demo:sass', 'demo:watch'])
gulp.task('default', ['sass', 'watch', 'demo','doc']);



function setupMarked() {
	const Renderer = marked.Renderer;
	// Create your custom renderer.
	const renderer = new Renderer();
	renderer.code = (code, language) => {
		// Check whether the given language is valid for highlight.js.
		const validLang = !!(language && highlightjs.getLanguage(language));
		// Highlight only if the language is valid.
		const highlighted = validLang ? highlightjs.highlight(language, code).value : code;
		// Render the highlighted code with `hljs` class.
		return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
	};
	// Set the renderer to marked.
	marked.setOptions({ renderer });
}
