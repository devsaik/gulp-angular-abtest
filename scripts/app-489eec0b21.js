!function(){"use strict";angular.module("gulpAngularAbtest",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","restangular","ui.router","ui.bootstrap","toastr"])}(),function(){"use strict";function t(){function t(){return a}var a=[{title:"Adobe Test and Target",url:"https://capitaloneservices.marketing.adobe.com/content/mac/capitaloneservices/target/activities.html",description:"Home page",logo:"Adobe.png"}];this.getTec=t}angular.module("gulpAngularAbtest").service("webDevTec",t)}(),function(){"use strict";function t(t,a){return{restrict:"A",link:function(e,n){n.on("click",function(){t.log("Inside directive"),a.open(e.awesomeThing.url,"_blank")})}}}t.$inject=["$log","$window"],angular.module("gulpAngularAbtest").directive("thumbnail",t)}(),function(){"use strict";function t(){function t(t){var a=this;a.relativeDate=t(a.creationDate).fromNow()}t.$inject=["moment"];var a={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return a}angular.module("gulpAngularAbtest").directive("acmeNavbar",t)}(),function(){"use strict";function t(t){function a(a,e,n,i){var o,r=t(e[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});e.addClass("acme-malarkey"),angular.forEach(a.extraValues,function(t){r.type(t).pause()["delete"]()}),o=a.$watch("vm.contributors",function(){angular.forEach(i.contributors,function(t){r.type(t.login).pause()["delete"]()})}),a.$on("$destroy",function(){o()})}function e(t,a){function e(){return n().then(function(){t.info("Activated Contributors View")})}function n(){return a.getContributors(10).then(function(t){return i.contributors=["Sai","Kats"],i.contributors})}var i=this;i.contributors=[],e()}e.$inject=["$log","githubContributor"];var n={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:a,controller:e,controllerAs:"vm"};return n}t.$inject=["malarkey"],angular.module("gulpAngularAbtest").directive("acmeMalarkey",t)}(),function(){"use strict";function t(t,a){function e(e){function i(t){return t.data}function o(a){t.error("XHR Failed for getContributors.\n"+angular.toJson(a.data,!0))}return e||(e=30),a.get(n+"/contributors?per_page="+e).then(i)["catch"](o)}var n="https://api.github.com/repos/Swiip/generator-gulp-angular",i={apiHost:n,getContributors:e};return i}t.$inject=["$log","$http"],angular.module("gulpAngularAbtest").factory("githubContributor",t)}(),function(){"use strict";function t(t,a,e){function n(){o(),t(function(){r.classAnimation="rubberBand"},4e3)}function i(){e.info("Toastr Invoked"),r.classAnimation=""}function o(){r.awesomeThings=[],angular.forEach(r.awesomeThings,function(t){t.rank=Math.random()})}var r=this;r.awesomeThings=[],r.classAnimation="",r.creationDate=1452626449447,r.showToastr=i,n()}t.$inject=["$timeout","webDevTec","toastr"],angular.module("gulpAngularAbtest").controller("TestAndTargetController",t)}(),function(){"use strict";function t(t,a,e){function n(){o(),t(function(){r.classAnimation="rubberBand"},4e3)}function i(){e.info("Toastr Invoked"),r.classAnimation=""}function o(){r.awesomeThings=[],angular.forEach(r.awesomeThings,function(t){t.rank=Math.random()})}var r=this;r.awesomeThings=[],r.classAnimation="",r.creationDate=1452626449447,r.showToastr=i,n()}t.$inject=["$timeout","webDevTec","toastr"],angular.module("gulpAngularAbtest").controller("OptimizelyController",t)}(),function(){"use strict";function t(t,a,e){function n(){o(),t(function(){r.classAnimation="rubberBand"},4e3)}function i(){e.info("Toastr Invoked"),r.classAnimation=""}function o(){r.awesomeThings=a.getTec(),angular.forEach(r.awesomeThings,function(t){t.rank=Math.random()})}var r=this;r.awesomeThings=[],r.classAnimation="",r.creationDate=1452626449447,r.showToastr=i,n()}t.$inject=["$timeout","webDevTec","toastr"],angular.module("gulpAngularAbtest").controller("MainController",t)}(),function(){"use strict";function t(t,a,e){function n(){o(),t(function(){r.classAnimation="rubberBand"},4e3)}function i(){e.info("Toastr Invoked"),r.classAnimation=""}function o(){r.awesomeThings=[],angular.forEach(r.awesomeThings,function(t){t.rank=Math.random()})}var r=this;r.awesomeThings=[],r.classAnimation="",r.creationDate=1452626449447,r.showToastr=i,n()}t.$inject=["$timeout","webDevTec","toastr"],angular.module("gulpAngularAbtest").controller("AgendaController",t)}(),function(){"use strict";function t(t,a,e){t.debug("runBlock end");try{e.optimizely=window.optimizely||[],e.optimizely.push(["activate"])}catch(n){t.error("Optimizely related "+n)}a.$on("$stateChangeStart",function(a,e){try{e.url.indexOf("optimizely")>=0&&window.optimizely.push(["activate",4574084077])}catch(n){t.error(n)}})}t.$inject=["$log","$rootScope","$window"],angular.module("gulpAngularAbtest").run(t)}(),function(){"use strict";function t(t,a,e){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("testandtarget",{url:"/testandtarget",templateUrl:"app/testandtarget/testandtarget.html",controller:"TestAndTargetController",controllerAs:"testandtarget"}).state("optimizely",{url:"/optimizely",templateUrl:"app/optimizely/optimizely.html",controller:"OptimizelyController",controllerAs:"optimizely"}).state("agenda",{url:"/agenda",templateUrl:"app/agenda/agenda.html",controller:"AgendaController",controllerAs:"agenda"}),e.html5Mode(!0),a.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],angular.module("gulpAngularAbtest").config(t)}(),function(){"use strict";angular.module("gulpAngularAbtest").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function t(t,a){t.debugEnabled(!0),a.allowHtml=!0,a.timeOut=3e3,a.positionClass="toast-top-right",a.preventDuplicates=!0,a.progressBar=!0}t.$inject=["$logProvider","toastrConfig"],angular.module("gulpAngularAbtest").config(t)}(),angular.module("gulpAngularAbtest").run(["$templateCache",function(t){t.put("app/agenda/agenda.html",'<div class="container"><div><acme-navbar creation-date="agenda.creationDate"></acme-navbar></div><div class="jumbotron text-center"><h1>Agenda Page</h1></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in agenda.awesomeThings"><div thumbnail="" class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p class="wordwrap"><a ng-href="{{awesomeThing.url}}">{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),t.put("app/optimizely/optimizely.html",'<div class="container"><div><acme-navbar creation-date="optimizely.creationDate"></acme-navbar></div><div class="jumbotron text-center"><h1>Optimizely Testing</h1></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in optimizely.awesomeThings"><div thumbnail="" class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p class="wordwrap"><a ng-href="{{awesomeThing.url}}">{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),t.put("app/main/main.html",'<div class="container"><div><acme-navbar creation-date="main.creationDate"></acme-navbar></div><div class="jumbotron text-center"><h1>AB Testing</h1></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in main.awesomeThings"><div thumbnail="" class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p class="wordwrap"><a ng-href="{{awesomeThing.url}}">{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),t.put("app/testandtarget/testandtarget.html",'<div class="container"><div><acme-navbar creation-date="testandtarget.creationDate"></acme-navbar></div><div class="jumbotron text-center"><h1>Test and Target</h1></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in testandtarget.awesomeThings"><div thumbnail="" class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p class="wordwrap"><a ng-href="{{awesomeThing.url}}">{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" ui-sref="/"><span class="glyphicon glyphicon-home"></span> AB Testing</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ui-href="/">Home</a></li><li><a ui-sref="testandtarget">Test and Target</a></li><li><a ui-sref="agenda">Agenda</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-489eec0b21.js.map