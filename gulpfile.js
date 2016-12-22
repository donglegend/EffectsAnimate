var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require("del");
var fs = require("fs");
var safeWriteFile = require('safe-write-file');


var ora = require('ora')
var spinner = ora('javascript is compile for production...')




var paths = {
	js: "./src/",
	statics: "./src/static/",
	dist: "./dist",
};


gulp.task('watch', function() {
	gulp.watch([paths.js + "**/*.js"], function(event) {
		gulp.run('browserify');
	})
});


gulp.task("browserify", function(cb) {
	gulp.src(paths.js + "*.js")
		.pipe($.browserify({
			insertGlobals: false
		}))
		.pipe(gulp.dest('./src/static/js/'));
	cb();
});


gulp.task('clean', function(cb) {
	del([paths.dist]);
	cb();
});

function getHeader() {
	var template = ['/**',
		' * time: <%= time%>',
		' * site: <%= git%>',
		' * blog: <%= blog%>',
		' * cnblogs: <%= cnblogs%>',
		' */',
		''
	].join('\n');
	return $.header(template, {
		time: new Date(),
		git: 'https://github.com/donglegend',
		blog: 'http://donglegend.com/',
		cnblogs: 'http://www.cnblogs.com/donglegend'
	});
}


gulp.task("uglify",['browserify'] ,function(cb) {
	spinner.text = 'uglify running....';
	spinner.start();
	gulp.src(["./src/static/js/*.js"])
		.pipe($.uglify({
			compress: {
				drop_console: true,
				unused: true
			}
		}))
		.pipe(getHeader())
		.pipe(gulp.dest("./src/static/js/min/"));
	spinner.succeed();
	cb();
});



gulp.task("build",['browserify','uglify'], function (){
	gulp.src(paths.statics + "**/*").pipe(gulp.dest(paths.dist + "/static/"));
	htmls.forEach(function(i, h) {
		var output = fs.readFileSync('./src/' + i, "utf-8");
		output = output.replace(/src=\"\/src\/build\/[A-Z0-9a-z-_\/]+\.js\"/g, function(word) {
			return word.replace('\.js', '.js' + '?' + new Date().getTime().toString(16));
		});

		output = output.replace(/src=\"\/src\/build\//g, function(word) {
			return word.replace('src="\/src/build/', 'src="./static/js/min/');
		});


		safeWriteFile(paths.dist + "/" + i, output);
	})
})




var htmls = function() {
	var dir = fs.readdirSync("./src");
	return dir.filter(function(name) {
		return name.match(/\.html$/);
	});

}();
