module.exports = function (grunt) {

    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'css/main.css': 'sass/main.sass'
                }
            }
        },
        watch: {
            scripts: {
                files: ['sass/*.sass'],
                tasks: ['sass'],
                options: {
                spawn: false,
                },
            }
        },
        browserSync: {
            default_options: {
                bsFiles: {
                    src: [
                        "css/*.css",
                        "*.html"
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./"
                    }
                }
            },
        jshint: {
            all: ['js/*.js']
    }
    });
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-jshint');    
    grunt.registerTask('default', ['sass','browserSync','watch','jshint']);
};
