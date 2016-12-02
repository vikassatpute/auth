(function () {
    'use strict';

    angular
        .module('app')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['UserService', '$location', '$rootScope', 'FlashService', '$http'];
    function RegisterController(UserService, $location, $rootScope, FlashService, $http) {
        var vm = this;

        vm.register = register;

        function register() {
            vm.dataLoading = true;
            // $http({
            //     method: 'POST',
            //     url: 'api/register',
            //     data: vm
            // }).success(function (data, status, headers, config) {

            // }).error(function (data, status, header, config) {

            // });
            console.log(vm.user);
            UserService.Create(vm.user)
            .then(function (response) {
                if (response.success) {
                    FlashService.Success('Registration successful', true);
                    $location.path('/login');
                } else {
                    console.log(response);
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        }
    }

})();
