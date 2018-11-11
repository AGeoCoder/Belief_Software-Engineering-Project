angular.module('articleController', [])

.controller('articleCtrl', function($routeParams) {
  var app = this;
  app.articleID = $routeParams.articleID;
  //var path = 'https://cdn.rawgit.com/amgreenstreet/BeliefMeToo/master/public/articles/' + {{article.articleID}}
  app.articleURL = 'https://cdn.rawgit.com/amgreenstreet/BeliefMeToo/master/public/articles/' + $routeParams.articleID + '.txt';
});
