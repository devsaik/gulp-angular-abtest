(function() {
  'use strict';

  angular
    .module('gulpAngularAbtest')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr,$log,adobeTargetOfferService) {
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
     /* adobeTargetOfferService.getOffer().then(function(response){
        $log.info('get offer response:: '+response);
      }, function(reason) {
        $log.error('Failed: ' + reason);
      });*/
     /* debugger;
      $log.info('Adobe Target:: '+adobe.target);
      adobe.target.getOffer({
        mbox: 'target-global-mbox',
        success: function(response) {
          $log.log('response recieved::'+response);
        },
        error: function(status,error) {
          $log.error('Unexpected Error status :: '+status);
          $log.error('Unexpected Error error :: '+error);
        }
      })*/
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
