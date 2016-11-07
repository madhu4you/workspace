# Grunt setup demo
GRUNT task runner

######Steps:
1. Install Grunt cli
    ```
    npm install grunt-cli -g
    ```
2. Install Grunt 
    ```
    npm install grunt --save-dev
    ```
3. Install Grunt plugin for css min
    ``
    npm install grunt-contrib-cssmin
    ```
4. Install Grunt plugin for js minfy
    ```
    npm install grunt-contrib-uglify
    ```
5. create a **gruntFile.js** start wrinting the task runner code
    ```
    module.exports = function(grunt){
        //configure the init for project
        grunt.initConfig({
            //basic setting about the plugin
            pkg: grunt.file.readJSON('package.json'),
            //name of plugin (plugin name without grunt-contrib-)
            //example for css combine
            cssmin :{
                combine :{
                    files:{
                        '/css/style.css': ['/css/header.css', '/css/section.css']
                    }
                }
            },
            //for js combine and minfiy
            uglify :{
                dist :{
                    files:{
                        '/js/my.min.js': ['/js/my.js']
                    }
                }
            },
        });
        
        //load plugin
        grunt.loadNpmTasks('grunt-contrib.cssmin');
        grunt.loadNpmTasks('grunt-contrib.uglify');

        //load task
        grunt.registerTask("default", "", ['cssmin', 'uglify']);
    }
    ```

