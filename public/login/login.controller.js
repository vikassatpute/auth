(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService', '$http'];
    function LoginController($location, AuthenticationService, FlashService, $http) {
        var vm = this;

        vm.login = login;

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {
            console.log('vm.user-->',vm);
            var user = {
                username: vm.username,
                password: vm.password
            };
            vm.dataLoading = true;
            // $http({
            //     method: 'POST',
            //     url: 'api/authenticate',
            //     data: user
            // }).success(function (data, status, headers, config) {
            //     console.log(data,status);
            //     AuthenticationService.SetCredentials(vm.username, vm.password);
            //     $location.path('/');
            // }).error(function (data, status, header, config) {
            //     console.log(data,status);
            //     FlashService.Error(response.message);
            //     vm.dataLoading = false;

            // });
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                console.log(response);
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password, response.token);
                    $location.path('/');
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        };
    }

})();
