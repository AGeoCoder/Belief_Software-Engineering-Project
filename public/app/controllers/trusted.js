app.filter('trusted', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
});

// app.filter('trusted', ['$sce', function ($sce) {
//     return function(url) {
//         return $sce.trustAsResourceUrl(url);
//     };
// }]);
