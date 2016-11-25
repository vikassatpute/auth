(function () {
    'use strict';

    angular
        .module('app')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];
    function RegisterController(UserService, $location, $rootScope, FlashService, $http) {
        var vm = this;

        vm.register = register;

        function register() {
            vm.dataLoading = true;
            $http.get("api/register")
            .then(function(response) {
                $scope.myWelcome = response.data;
            });
            $http({
                method: 'POST',
                url: 'api/register',
                data: vm.user,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {

            }).error(function (data, status, header, config) {

            });
            // UserService.Create(vm.user)
            //     .then(function (response) {
            //         if (response.success) {
            //             FlashService.Success('Registration successful', true);
            //             $location.path('/login');
            //         } else {
            //             FlashService.Error(response.message);
            //             vm.dataLoading = false;
            //         }
            //     });
        }
    }

})();
