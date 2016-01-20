(function() {
  'use strict';

  angular
    .module('gulpAngularAbtest')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr,$log) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1452626449447;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
      debugger;
      $log.info('Adobe Target:: '+adobe.target);
      adobe.target.getOffer({
        mbox: 'target-global-mbox',
        success: function(offer) {
          adobe.target.applyOffer({
            offer: offer
          })
        },
        error: function(e) {
          $log.error('Unexpected Error target'+e);
        }
      })
    }

    function showToastr() {
      toastr.info('Toastr Invoked');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
