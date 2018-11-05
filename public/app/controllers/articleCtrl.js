angular.module('articleController', [])

.controller('articleCtrl', function($routeParams) {
  var app = this;
  app.hide = false;
  app.articleID = $routeParams.articleID;
  if (app.articleID == "Intimate_Partner_Sexual_Violence") app.hide = true;
  //var path = 'https://cdn.rawgit.com/amgreenstreet/BeliefMeToo/master/public/articles/' + {{article.articleID}}
  app.articleURL = 'https://cdn.rawgit.com/amgreenstreet/BeliefMeToo/master/public/articles/' + $routeParams.articleID + '.txt';

  app.show = function(createData, confirmed) {
    app.hide = false;
  };
});
