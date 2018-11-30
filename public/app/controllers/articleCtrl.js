angular.module('articleController', [])

.controller('articleCtrl', function($scope, $routeParams) {
  $scope.greeting = 'Hola!';
  $scope.hide = false;
  $scope.articleID = $routeParams.articleID;
  if ($scope.articleID == "Intimate_Partner_Sexual_Violence") app.hide = true;
    $scope.articleURL = 'https://cdn.rawgit.com/amgreenstreet/BeliefMeToo/master/public/articles/' + $routeParams.articleID + '.html';
    if ($scope.articleID == "Intimate_Partner_Sexual_Violence") {
      $scope.relatedURL = '/article/What_is_sexual_assault'
      $scope.relatedTitle = 'What is sexual assault'
    }
    if ($scope.articleID == "What_is_sexual_assault") {
      $scope.relatedURL = '/article/Intimate_Partner_Sexual_Violence'
      $scope.relatedTitle = 'Intimate Partner Sexual Violence'
    }
    if ($scope.articleID == "Depression") {
      //$scope.articleURL = 'https://cdn.rawgit.com/amgreenstreet/BeliefMeToo/master/public/articles/' + $routeParams.articleID + '.html';
      $scope.relatedURL = '/article/Flashbacks'
      $scope.relatedTitle = 'Flashbacks'
    }
    if ($scope.articleID == "Flashbacks") {
      //$scope.articleURL = 'https://cdn.rawgit.com/amgreenstreet/BeliefMeToo/master/public/articles/' + $routeParams.articleID + '.html';
      $scope.relatedURL = '/article/Drepression'
      $scope.relatedTitle = 'Depression'
    }
    if ($scope.articleID == "PTSD") {
      //$scope.articleURL = 'https://cdn.rawgit.com/amgreenstreet/BeliefMeToo/master/public/articles/' + $routeParams.articleID + '.html';
      $scope.relatedURL = '/article/Drepression'
      $scope.relatedTitle = 'Depression'
    }
    if ($scope.articleID == "Consent") {
      //$scope.articleURL = 'https://cdn.rawgit.com/amgreenstreet/BeliefMeToo/master/public/articles/' + $routeParams.articleID + '.rtf';
      $scope.relatedURL = '/article/Legal'
      $scope.relatedTitle = 'Legal Role of Consent'
    }
    if ($scope.articleID == "Legal") {
      //$scope.articleURL = 'https://cdn.rawgit.com/amgreenstreet/BeliefMeToo/master/public/articles/' + $routeParams.articleID + '.rtf';
      $scope.relatedURL = '/article/Consent'
      $scope.relatedTitle = 'What Consent Looks Like'
    }
    if ($scope.articleID == "Wisconsin") {
      //$scope.articleURL = 'https://cdn.rawgit.com/amgreenstreet/BeliefMeToo/master/public/articles/' + $routeParams.articleID + '.rtf';
      // $scope.relatedURL = '/article/Wisconsin'
      // $scope.relatedTitle = 'Intimate Partner Sexual Violence'
    }
    if ($scope.articleID == "Illinois") {
      //$scope.articleURL = 'https://cdn.rawgit.com/amgreenstreet/BeliefMeToo/master/public/articles/' + $routeParams.articleID + '.rtf';
      // $scope.relatedURL = '/article/Drepression'
      // $scope.relatedTitle = 'Intimate Partner Sexual Violence'
    }
    if ($scope.articleID == "Minnesota") {
      //$scope.articleURL = 'https://cdn.rawgit.com/amgreenstreet/BeliefMeToo/master/public/articles/' + $routeParams.articleID + '.rtf';
      // $scope.relatedURL = '/article/Drepression'
      // $scope.relatedTitle = 'Intimate Partner Sexual Violence'
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
