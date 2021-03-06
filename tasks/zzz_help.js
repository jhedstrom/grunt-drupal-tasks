module.exports = function(grunt) {

  /**
   * Define "help" task, a more purposeful and structured help than -h.
   *
   * grunt help
   *   Provides an overview of intended and useful grunt tasks.
   */

  grunt.loadNpmTasks('grunt-available-tasks');

  grunt.config('help.default', {
    group: 'Build Process'
  });
  grunt.config('help.newer', {
    group: 'Utilities'
  });

  var help = grunt.config.get('help'),
    items = Object.keys(help),
    descriptions = {},
    groups = {};

  items.forEach(function(item) {
    if (help[item]['description']) {
      descriptions[item] = help[item]['description'];
    }
    if (help[item]['group']) {
      var groupName = help[item]['group'];
      if (groups[groupName] == undefined) {
        groups[groupName] = [];
      }
      groups[groupName].push(item);
    }
  });

  grunt.config(['availabletasks', 'help'], {
    options: {
      filter: 'include',
      tasks: Object.keys(help),
      descriptions: descriptions,
      groups: groups
    }
  });

  grunt.registerTask('help', ['availabletasks:help']);
};
