
angular.module('hrApp').controller('pointEntryController', function ($scope, $http) {
    $scope.points = [];

    var pointKey = 0;

    $scope.point = {
        key: 0,
        pointId: "",
        desc: ""
    };

    $scope.add = function () {
        var l_point = angular.copy($scope.point);
        l_point.key = ++pointKey;
        $scope.points.push(l_point);
        $scope.point.pointId = "";
        $scope.point.desc = "";

        alert($scope.points.length);
    };

    $scope.remove = function (index) {
        $scope.points.splice(index, 1);
    };

    $scope.find = function (id) {
        $scope.chosen = $scope.points.filter(function (val) {
            return val.pointId == id;
        });
        if ($scope.chosen.length > 0) {
            $scope.point.desc = $scope.chosen[0].desc;
        }
    };

    $scope.getData = function () {
        // $http.post('http://localhost:61884/HolaWs.asmx/GetAllHolas')
        //     .then(function (response) {
        //         $scope.holas = response.data;
        //         alert($scope.holas);
        //     })
    };
});
