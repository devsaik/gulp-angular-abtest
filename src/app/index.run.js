(function() {
  'use strict';

  angular
    .module('gulpAngularAbtest')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log,$rootScope,$window,$timeout) {

    $log.debug('runBlock end');

    $rootScope.$on('$viewContentLoaded',
      function(event, toState){
        try{
        $timeout(function(){

          $log.info('activate! :: '+typeof($window.optimizely));
          $window.optimizely.push(["activate"]);
        });

        }
        catch(ex){
          $log.error(ex);
        }


      });
  }

})();
