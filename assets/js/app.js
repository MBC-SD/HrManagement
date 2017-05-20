// script.js

// create the module and name it hrApp
var hrApp = angular.module('hrApp', ['ngMaterial', 'ngRoute']);

// configure our routes
hrApp.config(function ($routeProvider) {
    $routeProvider

        // route for the point entry
        .when('/masterPointEntry', {
            templateUrl: 'app/components/master/pointEntry/pointEntry.html'
        })
});

// create the controller and inject Angular's $scope
hrApp.controller('mainController', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.message = 'Everyone come and see how good I look!';

    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function () {
        return $mdSidenav('right').isOpen();
    };

    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
        var timer;

        return function debounced() {
            var context = $scope,
                args = Array.prototype.slice.call(arguments);
            $timeout.cancel(timer);
            timer = $timeout(function () {
                timer = undefined;
                func.apply(context, args);
            }, wait || 10);
        };
    }

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
        return debounce(function () {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav(navID)
                .toggle()
                .then(function () {
                    $log.debug("toggle " + navID + " is done");
                });
        }, 200);
    }

    function buildToggler(navID) {
        return function () {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav(navID)
                .toggle()
                .then(function () {
                    $log.debug("toggle " + navID + " is done");
                });
        };
    }
});

hrApp.controller('homeController', function ($scope) {
    $scope.message = 'You are home.';
})

hrApp.controller('aboutController', function ($scope) {
    $scope.message = 'Look! I am an about page.';
});

hrApp.controller('contactController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});
