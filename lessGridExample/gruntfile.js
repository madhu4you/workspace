module.exports = function (grunt) {
    //configure the init for project
    grunt.initConfig({
        //basic setting about the plugin
        pkg: grunt.file.readJSON('package.json'),
        //name of plugin (plugin name without grunt-contrib-)
        watch: {
            less: {
                files: ['assets/less/*.less'],
                tasks: ['less']
            }
        },
        less: {
            development: {
                options: {
                    paths: ['assets/css']
                },
                files: {
                    'assets/css/style.css': 'assets/less/style.less',
                    'assets/css/grid.css': 'assets/less/grid.less'
                }
            }
        }
    });

    //load plugin
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    //load task
    grunt.registerTask("default", ['watch']);
};