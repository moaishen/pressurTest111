angular.module('pressTask',['ng','ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("attack",{url: "/attack", templateUrl: 'tpl/attack.html'})
      .state("task",{url: "/task", templateUrl: 'tpl/task.html'})
      .state("web",{url: "/web", templateUrl: 'tpl/web.html'})
      .state("userInfo",{url: "/userInfo", templateUrl: 'tpl/userInfo.html'});
    $urlRouterProvider.otherwise('/attack')
  });
