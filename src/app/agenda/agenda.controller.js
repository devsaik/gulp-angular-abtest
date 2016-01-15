(function() {
  'use strict';

  angular
    .module('gulpAngularAbtest')
    .controller('AgendaController', AgendaController);

  /** @ngInject */
  function AgendaController($timeout, webDevTec, toastr) {
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
    }

    function showToastr() {
      toastr.info('Toastr Invoked');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = [];

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
