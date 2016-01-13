(function() {
  'use strict';

  angular
      .module('gulpAngularAbtest')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var data = [
      {
        'title': 'Optimizely',
        'url': 'https://app.optimizely.com/projects/4565492258/experiments',
        'description': 'Home page',
        'logo': 'optimizely.jpeg'
      },
      {
        'title': 'Adobe Test and Target',
        'url': 'https://capitaloneservices.marketing.adobe.com/content/mac/capitaloneservices/target/activities.html',
        'description': 'Home page',
        'logo': 'Adobe.png'
      }

    ];

    this.getTec = getTec;

    function getTec() {
      return data;
    }
  }

})();
