module.exports = function(grunt) {

  /**
   * Define "Bundler" tasks.
   *
   * If a Gemfile is defined in the repository root, add a grunt task to run
   * "bundle install".
   */
  grunt.loadNpmTasks('grunt-shell');

  if (grunt.file.exists('Gemfile')) {
    grunt.config(['shell', 'bundleInstall'], {
      command: "bundle install --binstubs=gems/bin"
    });
    grunt.registerTask('bundleInstall', ['shell:bundleInstall']);  

    grunt.config('help.bundleInstall', {
      group: 'Dependency Management',
      description: 'Run `bundle install`, dropping symlinks to all binaries in `gems/bin`.'
    });
  }
};
