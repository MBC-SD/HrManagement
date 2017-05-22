
angular.module('hrApp').controller('pointEntryController', function ($scope, $http) {
    //$window.document.getElementById('inputPointId').focus();
    $scope.focuser = true;

    $scope.points = [];
    var pointKey = 0;
    $scope.point = {
        key: 0,
        pointId: "",
        desc: ""
    };

    $scope.clearAll = function () {
        $scope.focuser = true;
    };
    $scope.save = function () {
        var l_point = angular.copy($scope.point);
        l_point.key = ++pointKey;
        $scope.points.push(l_point);
        $scope.point.pointId = "";
        $scope.point.desc = "";
    };
    $scope.edit = function () {

    };
    $scope.delete = function () {

    };
    $scope.reset = function () {

    };
    $scope.list = function () {

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
        alert('b');
        $http.post('http://192.168.100.1/JSWebservice/MyWebservice.asmx/SelectData')
            .then(function (response) {
                $scope.holas = response.data;
                alert($scope.holas);
            })
    };
});
