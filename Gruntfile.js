module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        'http-server': {
            dev: {
                root: './',
                port: 8000,
                cache: 0,
                host: "127.0.0.1",
                showDir : true,
                autoIndex: true,
                ext: "html",
                runInBackground: true,
            },
        },
        watch: {
            files: ['game.js'],
            options: {
                livereload: true,
            },
        },
    });

    grunt.event.on('watch', function(action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });
     
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-http-server');
    
    grunt.registerTask('default', ['http-server:dev', 'watch']);
};
