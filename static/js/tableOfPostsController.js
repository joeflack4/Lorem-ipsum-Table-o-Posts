// The Challenge - https://github.com/kyleondata/JsInterviewChallenge

app.controller('tableOfPostsController', ['$scope', '$http', function($scope, $http) {

    $scope.sortType = 'id';
    $scope.sortReverse = false;
    $scope.searchPosts = '';

    var data = $http.get('http://jsonplaceholder.typicode.com/posts')
        .success(function(data, status) {
            $scope.data = data;
            $scope.posts = data;
        });

}]);
