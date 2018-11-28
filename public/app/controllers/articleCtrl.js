angular.module('articleController', [])

.controller('articleCtrl', function($scope, $routeParams) {
  $scope.greeting = 'Hola!';
  $scope.hide = false;
  $scope.articleID = $routeParams.articleID;
  if ($scope.articleID == "Intimate_Partner_Sexual_Violence") $scope.hide = true;
    $scope.articleURL = 'https://cdn.rawgit.com/amgreenstreet/BeliefMeToo/master/public/articles/' + $routeParams.articleID + '.txt';
    if ($scope.articleID == "Intimate_Partner_Sexual_Violence") {
      $scope.relatedURL = '/article/What_is_sexual_assault'
      $scope.relatedTitle = 'What is sexual assault'
    }
    if ($scope.articleID == "What_is_sexual_assault") {
      $scope.relatedURL = '/article/Intimate_Partner_Sexual_Violence'
      $scope.relatedTitle = 'Intimate Partner Sexual Violence'
    }
    $scope.show = function(createData, confirmed) {
      $scope.hide = false;
    };
});

// .controller('articleCtrl', function($routeParams) {
//   var app = this;
//   app.hide = false;
//   app.articleID = $routeParams.articleID;
//   if (app.articleID == "Intimate_Partner_Sexual_Violence") app.hide = true;
//   //var path = 'https://cdn.rawgit.com/amgreenstreet/BeliefMeToo/master/public/articles/' + {{article.articleID}}
//   app.articleURL = 'https://cdn.rawgit.com/amgreenstreet/BeliefMeToo/master/public/articles/' + $routeParams.articleID + '.txt';
//   if (app.articleID == "Intimate_Partner_Sexual_Violence") {
//     app.relatedURL = '/article/What_is_sexual_assault'
//     app.relatedTitle = 'What is sexual assault'
//   }
//   if (app.articleID == "What_is_sexual_assault") {
//     app.relatedURL = '/article/Intimate_Partner_Sexual_Violence'
//     app.relatedTitle = 'Intimate Partner Sexual Violence'
//   }
//   app.show = function(createData, confirmed) {
//     app.hide = false;
//   };
// });
