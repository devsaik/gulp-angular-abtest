!function(){"use strict";angular.module("gulpAngularAbtest",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","restangular","ui.router","ui.bootstrap","toastr"])}(),function(){"use strict";function t(t,n){return{restrict:"A",link:function(e,a){a.on("click",function(){t.log("Inside directive"),n.open(e.awesomeThing.url,"_blank")})}}}t.$inject=["$log","$window"],angular.module("gulpAngularAbtest").directive("thumbnail",t)}(),function(){"use strict";function t(){function t(){return n}var n=[{title:"Optimizely",url:"https://app.optimizely.com/projects/4565492258/experiments",description:"Home page",logo:"optimizely.jpeg"},{title:"Adobe Test and Target",url:"https://capitaloneservices.marketing.adobe.com/content/mac/capitaloneservices/target/activities.html",description:"Home page",logo:"Adobe.png"}];this.getTec=t}angular.module("gulpAngularAbtest").service("webDevTec",t)}(),function(){"use strict";function t(){function t(t){var n=this;n.relativeDate=t(n.creationDate).fromNow()}t.$inject=["moment"];var n={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return n}angular.module("gulpAngularAbtest").directive("acmeNavbar",t)}(),function(){"use strict";function t(t){function n(n,e,a,i){var o,r=t(e[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});e.addClass("acme-malarkey"),angular.forEach(n.extraValues,function(t){r.type(t).pause()["delete"]()}),o=n.$watch("vm.contributors",function(){angular.forEach(i.contributors,function(t){r.type(t.login).pause()["delete"]()})}),n.$on("$destroy",function(){o()})}function e(t,n){function e(){return a().then(function(){t.info("Activated Contributors View")})}function a(){return n.getContributors(10).then(function(t){return i.contributors=["Sai","Kats"],i.contributors})}var i=this;i.contributors=[],e()}e.$inject=["$log","githubContributor"];var a={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:n,controller:e,controllerAs:"vm"};return a}t.$inject=["malarkey"],angular.module("gulpAngularAbtest").directive("acmeMalarkey",t)}(),function(){"use strict";function t(t,n){function e(e){function i(t){return t.data}function o(n){t.error("XHR Failed for getContributors.\n"+angular.toJson(n.data,!0))}return e||(e=30),n.get(a+"/contributors?per_page="+e).then(i)["catch"](o)}var a="https://api.github.com/repos/Swiip/generator-gulp-angular",i={apiHost:a,getContributors:e};return i}t.$inject=["$log","$http"],angular.module("gulpAngularAbtest").factory("githubContributor",t)}(),function(){"use strict";function t(t,n,e){function a(){o(),t(function(){r.classAnimation="rubberBand"},4e3)}function i(){e.info("Toastr Invoked"),r.classAnimation=""}function o(){r.awesomeThings=n.getTec(),angular.forEach(r.awesomeThings,function(t){t.rank=Math.random()})}var r=this;r.awesomeThings=[],r.classAnimation="",r.creationDate=1452626449447,r.showToastr=i,a()}t.$inject=["$timeout","webDevTec","toastr"],angular.module("gulpAngularAbtest").controller("OptimizelyController",t)}(),function(){"use strict";function t(t,n,e){function a(){o(),t(function(){r.classAnimation="rubberBand"},4e3)}function i(){e.info("Toastr Invoked"),r.classAnimation=""}function o(){r.awesomeThings=n.getTec(),angular.forEach(r.awesomeThings,function(t){t.rank=Math.random()})}var r=this;r.awesomeThings=[],r.classAnimation="",r.creationDate=1452626449447,r.showToastr=i,a()}t.$inject=["$timeout","webDevTec","toastr"],angular.module("gulpAngularAbtest").controller("MainController",t)}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("gulpAngularAbtest").run(t)}(),function(){"use strict";function t(t,n){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),n.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("gulpAngularAbtest").config(t)}(),function(){"use strict";angular.module("gulpAngularAbtest").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function t(t,n){t.debugEnabled(!0),n.allowHtml=!0,n.timeOut=3e3,n.positionClass="toast-top-right",n.preventDuplicates=!0,n.progressBar=!0}t.$inject=["$logProvider","toastrConfig"],angular.module("gulpAngularAbtest").config(t)}(),angular.module("gulpAngularAbtest").run(["$templateCache",function(t){t.put("app/main/main.html",'<div class="container"><div><acme-navbar creation-date="main.creationDate"></acme-navbar></div><div class="jumbotron text-center"><h1>AB Testing</h1></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in main.awesomeThings"><div thumbnail="" class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p class="wordwrap"><a ng-href="{{awesomeThing.url}}">{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),t.put("app/optimizely/optimizely.html",'<div class="container"><div><acme-navbar creation-date="main.creationDate"></acme-navbar></div><div class="jumbotron text-center"><h1>AB Testing</h1></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in main.awesomeThings"><div thumbnail="" class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p class="wordwrap"><a ng-href="{{awesomeThing.url}}">{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" ng-href="#"><span class="glyphicon glyphicon-home"></span> AB Testing</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">Test and Target</a></li><li><a ng-href="#">Optimizely</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-4e3bafcc20.js.map
