/**
 * Created by rca733 on 1/8/16.
 */
(function() {
  'use strict';

  angular
    .module('gulpAngularAbtest')
    .directive('thumbnail', thumbnail);
  /** @ngInject */
  function thumbnail($log,$window) {
    return {
      restrict:'A',
      link: function(scope,element){
        element.on('click',function(){
          $log.log('Inside directive');
          $window.open(scope.awesomeThing.url, '_blank');
        });
      }
    }
  }
}());

