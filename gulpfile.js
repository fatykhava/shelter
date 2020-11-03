let project_folder = require("path").basename(__dirname);
let source_foulder = "#src";

let path = {
	build: {
		html: project_folder + "/",
		css: project_folder + "/css/",
		js: project_folder + "/js/",
		img: project_folder + "/assets/",
		fonts: project_folder + "/assets/fonts/",
		audio: project_folder + "/assets/audio/",
		json: project_folder + "/",
	},
	src: {
		html: source_foulder + "/pages/**/*.html",
		css: source_foulder + "/pages/**/scss/*.scss",
		js: source_foulder + "/pages/**/js/*.js",
		img: source_foulder + "/assets/**/*.{jpg,png,svg,ico,webp}",
		fonts: source_foulder + "/assets/**/*.{ttf,woff,woff2}",
		audio: source_foulder + "/assets/*.mp3",
		json: source_foulder + "/*.json",
	},
	watch: {
		html: source_foulder + "/pages/**/**/*.html",
		css: source_foulder + "/pages/**/scss/**/*.scss",
		js: source_foulder + "/pages/**/js/**/*.js",
		img: source_foulder + "/assets/**/*.{jpg,png,svg,ico,webp}",
	},
	clean: "./" + project_folder + "/"
}

let { src, dest } = require("gulp"),
	gulp = require("gulp"),
	browsersync = require("browser-sync").create();
const fileInclude = require("gulp-file-include"); // объединяет файлы html и js в один
let del = require("del"), // удаляет прошлую версию
	scss = require("gulp-sass"), // преобразовывает scss в css
	autoprefixer = require("gulp-autoprefixer"),
	clean_css = require("gulp-clean-css"),
	rename = require("gulp-rename"), //переименовывает css min
	uglify = require("gulp-uglify-es").default, //вроде как минимизирует js
	webphtml = require("gulp-webp-html"); //дописывает picture для webp

function browserSync(params) {
	browsersync.init({
		server: {
			baseDir: "./" + project_folder + "/"
		},
		port: 3000,
		notify: false
	})
}

function html() {
	return src(path.src.html)
		.pipe(fileInclude())
		.pipe(webphtml())
		.pipe(rename({dirname: ""}))
		.pipe(dest(path.build.html))
		.pipe(browsersync.stream())
}

function css() {
	return src(path.src.css)
		.pipe(
			scss({
				outputStyle: "expanded"
			})
		)
		.pipe(
			autoprefixer({
				grid: true,
				overrideBrowserslist: ["last 3 versions"],
				cascade: true
			})
		)
		.pipe(
			rename({
				dirname: ""
			})
		)
		.pipe(dest(path.build.css))
		.pipe(clean_css())
		.pipe(
			rename({
				extname: ".min.css"
			})
		)
		.pipe(dest(path.build.css))
		.pipe(browsersync.stream())
}

function js() {
	return src(path.src.js)
		.pipe(fileInclude())
		.pipe(
			rename({
				dirname: ""
			})
		)
		.pipe(dest(path.build.js))
		.pipe(uglify())
		.pipe(
			rename({
				extname: ".min.js",
			})
		)
		.pipe(dest(path.build.js))
		.pipe(browsersync.stream())
}

function images() {
	return src(path.src.img)
		.pipe(dest(path.build.img))
		.pipe(browsersync.stream())
}

function fonts() {
	src(path.src.fonts)
		.pipe(dest(path.build.fonts))
}

function audio() {
	src(path.src.audio)
		.pipe(dest(path.build.audio))
}

function json() {
	src(path.src.json)
		.pipe(dest(path.build.json))
}

function watchFiles(params) {
	gulp.watch([path.watch.html], html);
	gulp.watch([path.watch.css], css);
	gulp.watch([path.watch.js], js);
	gulp.watch([path.watch.img], images);
}

function clean(params) {
	return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(js, css, html, images, fonts, audio, json));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.json = json;
exports.audio = audio;
exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;

//для дальнейшей работы из этой исходной папки мы копируем #src, packade.json, gulpfile.js. Открываем новый проект и в терминале прописываем npm i - установятся все плагины, которые мы сейчас грузили. Потом проверяем gulp.
// npm install -g npm-check-updates - я в прошлый раз установила. Пробовать в терминале перед САМЫМ началом работы вбить ncu, должно проверить обновление версий.
