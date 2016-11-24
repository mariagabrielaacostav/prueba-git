'use-strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var navegador = require('browser-sync');


/*Escribir la primera tarea*/


gulp.task('mover', function(){
    
    gulp.src('./src/bower_components/bootstrap/dist/css/bootstrap.min.css').pipe(gulp.dest('./dist/css'));
    
    gulp.src('./src/bower_components/bootstrap/dist/js/bootstrap.min.js').pipe(gulp.dest('./dist/js'));
    
    gulp.src('./src/bower_components/jquery/dist/jquery.min.js').pipe(gulp.dest('./dist/js'));
    
    gulp.src('./src/bower_components/bootstrap/dist/fonts/*.*').pipe(gulp.dest('./dist/fonts'));
    
    gulp.src('./src/img/*.*').pipe(gulp.dest('./dist/img'));
    
    
});


//SASS

gulp.task('sass', function(){
    
    gulp.src('./src/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
    
});



//SERVIDOR

gulp.task('server', function(){
    
    var files = [
        './dist/*.html',
        './dist/css/*.css',
        './dist/js/*.js'
    ];
    
    navegador.init(files, {
        server: {
            baseDir:'./dist/'
            
        }
    });
    
});


// TAREA POR DEFECTO 

gulp.task('default',['server'], function(){
    
    gulp.watch('./src/sass/*.sass',['sass']);
    gulp.watch('./src/img/*.*',['mover']);
    
});






