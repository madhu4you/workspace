/**
 * plugin names
 * 1. grunt-contrib-cssmin  => css merge and minify
 * 2. grunt-contrib-uglify  => js merge and minify
 */

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
    /* grunt.registerTask("default", "", function(){
        grunt.log.write("Less file compile start");

        grunt.log.write("Less file converted css end compile");
    }); */
}