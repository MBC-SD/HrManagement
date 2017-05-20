
angular.module('hrApp').controller('pointEntryController', function ($scope) {
    $scope.points = [];

    var pointKey = 0;

    $scope.point = {
        key: 0,
        pointId: "",
        desc: ""
    };

    $scope.add = function () {
        var l_point = angular.copy($scope.point);
        l_point.pointId = ++pointKey;
        $scope.points.push(l_point);
        $scope.point.pointId = "";
        $scope.point.desc = "";

        alert($scope.points.length);
    }

    $scope.remove = function (index) {
        $scope.points.splice(index, 1);
    }
});
